import 'dotenv/config';
import express, { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import { gerarQuestoesPedagogicas } from './src/data/questoesPedagogicasPMBA';
import { canonicalizeDisciplina } from './src/utils/disciplinaUtils';
import { embaralharAlternativas } from './src/utils/shuffleUtils';

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy-initialized Gemini AI client
let aiClient: GoogleGenAI | null = null;
function getAI(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === 'MY_GEMINI_API_KEY') {
    return null;
  }
  if (!aiClient) {
    aiClient = new GoogleGenAI({ apiKey });
  }
  return aiClient;
}

// POST /api/gerar-questoes
app.post('/api/gerar-questoes', async (req: Request, res: Response) => {
  const {
    disciplina = 'Direito Constitucional',
    assunto = 'Artigo 5º e 144 da CF/88',
    quantidade = 3,
    dificuldade = 'Média',
    banca = 'IBFC / FCC (Padrão PMBA)',
    modo = 'padrao', // 'padrao' | 'maratona' | 'treino_cirurgico' | 'simulado_oficial'
    errosRecentes = [], // array of { disciplina, assunto, totalErros }
    enunciadosExistentes = [] // array of existing question strings to avoid duplicates
  } = req.body || {};

  const numQuestoes = Math.min(Math.max(Number(quantidade) || 3, 1), 15);
  const ai = getAI();

  // If no Gemini API key configured, instantly serve the verified pedagogical bank
  if (!ai) {
    const questoes = gerarQuestoesPedagogicas(disciplina, assunto, numQuestoes, dificuldade, banca);
    return res.json({ questoes, fonte: 'banco_pedagogico_pmba' });
  }

  try {
    const seedAleatoria = Date.now() + Math.random().toString(36).substring(7);
    const isMisto =
      disciplina.toLowerCase().includes('todas') ||
      disciplina.toLowerCase().includes('misto') ||
      modo === 'misto_aleatorio' ||
      modo === 'simulado_oficial';
    
    let instrucaoModo = '';
    if (modo === 'treino_cirurgico' && Array.isArray(errosRecentes) && errosRecentes.length > 0) {
      const listaErros = errosRecentes.map(e => `- ${e.disciplina} -> ${e.assunto} (${e.totalErros} erros)`).join('\n');
      instrucaoModo = `\n[MODO TREINO CIRÚRGICO DE ALTA PERFORMANCE]:\nO aluno errou frequentemente os seguintes tópicos:\n${listaErros}\nCrie questões focadas EXATAMENTE nas pegadinhas, exceções e minúcias desses pontos fracos para consolidação imediata da aprendizagem.`;
    } else if (modo === 'maratona') {
      instrucaoModo = `\n[MODO MARATONA DE ALTA VELOCIDADE]:\nQuestões dinâmicas, com enunciados objetivos e contextualizados com o cotidiano da Polícia Militar da Bahia. Comentários diretos e com Bizus PMBA memoráveis.`;
    } else if (isMisto) {
      instrucaoModo = `\n[MODO SIMULADO GERAL MISTO / TODAS AS MATÉRIAS DA PMBA]:\nDistribua as ${numQuestoes} questões de forma balanceada e aleatória entre as diversas disciplinas do edital da PMBA:
- Língua Portuguesa
- Raciocínio Lógico
- História da Bahia
- Geografia da Bahia
- Atualidades
- Informática
- Direito Constitucional
- Noções de Direito Penal
- Noções de Direito Processual Penal
- Direito Administrativo
- Direitos Humanos
- Promoção da Igualdade Racial e de Gênero
- Noções de Direito Penal Militar

IMPORTANTE: No campo "disciplina" de CADA objeto JSON, especifique a matéria exata referente à questão gerada (ex: "Direito Constitucional", "Noções de Direito Penal", etc.) e no campo "assunto" o tópico específico abordado.`;
    }

    // Exemplos de enunciados a evitar para impedir repetições ou questões semelhantes
    let filtroDuplicadas = '';
    if (Array.isArray(enunciadosExistentes) && enunciadosExistentes.length > 0) {
      const amostraEnunciados = enunciadosExistentes
        .filter(Boolean)
        .slice(0, 30)
        .map((en: string, idx: number) => `${idx + 1}. "${String(en).substring(0, 110)}..."`)
        .join('\n');
      filtroDuplicadas = `\n[REGRAS ANTI-DUPLICAÇÃO E INEDITISMO ABSOLUTO]:
Não gere NENHUMA questão com fatos, enredos, pegadinhas ou estruturas idênticas ou muito parecidas com as seguintes questões já cadastradas no banco:
${amostraEnunciados}
Cada uma das ${numQuestoes} questões geradas DEVE ser 100% inédita, trazendo casos práticos novos, artigos ou parágrafos ainda não explorados e alternativas bem construídas.`;
    }

    const prompt = `Você é o Coordenador Pedagógico e Examinador de Alta Performance para o concurso de Soldado da Polícia Militar da Bahia (PMBA).
[SEED DE VARIABILIDADE: ${seedAleatoria}] - Use essa semente para gerar um ângulo completamente novo e criativo!
${instrucaoModo}
${filtroDuplicadas}

Gere exatamente ${numQuestoes} questões INÉDITAS, AUTÊNTICAS e EXCLUSIVAS de múltipla escolha com 5 alternativas (A, B, C, D, E).
ESTILO DA BANCA E PERFIL EXIGIDO:
- Banca informada: ${banca}
- DIRETRIZ FUNDAMENTAL: A elaboração NÃO precisa se restringir unicamente ao estilo estrito de FCC ou IBFC caso outra banca ou estilo seja selecionado, MAS as questões DEVEM estar OBRIGATORIAMENTE calibradas com o nível de complexidade, rigor jurídico e padrão real de cobrança do concurso de Soldado da PMBA.
- Base legal e temática da PMBA: Estatuto dos Policiais Militares da Bahia (Lei nº 7.990/2001), Lei Estadual nº 13.201/2015, Decreto nº 14.224/2012, CF/88 (especialmente Arts. 5º e 144), Código Penal, Código de Processo Penal, Código Penal Militar, Direitos Humanos, Raciocínio Lógico (padrão PMBA), Informática (segurança e nuvem), Atualidades e Realidade Baiana (História e Geografia da Bahia).
- CONTEXTUALIZAÇÃO OPERACIONAL E POLICIAL: Enuncie situações reais de serviço policial militar (guarnições ostensivas, abordagens, mandado judicial vs flagrante delito à noite, crimes em flagrante, preservação de cena de crime, cadeia de custódia, rádio patrulha, CICOM, etc.).

INSTRUÇÕES CRÍTICAS PARA ESTUDANTE DE ALTO RENDIMENTO:
1. SEM REPETIÇÕES: NUNCA gere questões óbvias, simplórias ou repetitivas entre si. Cada questão deve abordar um artigo, nuance, prazo ou caso prático independente.
2. Cada questão DEVE ter alternativas verossímeis, com distratores inteligentes que testam a real interpretação do candidato.
3. Elabore comentários pedagógicos aprofundados com:
   - Análise geral fundamentada;
   - Justificativa individual para CADA uma das 5 alternativas (A, B, C, D, E);
   - Bizu PMBA mnemônico prático para memorização rápida;
   - Artigos de lei citados.
4. DISTRIBUIÇÃO DE GABARITO: Alterne a resposta correta entre as letras A, B, C, D e E de forma equilibrada em cada lote de questões, evitando repetir a mesma letra seguidamente ou concentrar em "A".

${isMisto ? 'Modo: Simulado Geral com Todas as Matérias Juntas (Misto Aleatório)' : `Disciplina: ${disciplina}\nAssunto: ${assunto}`}
Dificuldade: ${dificuldade}

Retorne ESTRITAMENTE um array JSON puro (sem markdown ou texto extra fora dos colchetes) onde cada elemento segue esta estrutura:
[
  {
    "disciplina": "${isMisto ? 'Nome exato da Disciplina do Edital' : disciplina}",
    "assunto": "${isMisto ? 'Tópico Específico do Edital' : assunto}",
    "enunciado": "Texto da questão contextualizada com situação de serviço ou caso prático policial...",
    "alternativas": [
      { "id": "A", "texto": "..." },
      { "id": "B", "texto": "..." },
      { "id": "C", "texto": "..." },
      { "id": "D", "texto": "..." },
      { "id": "E", "texto": "..." }
    ],
    "respostaCorreta": "B",
    "comentario": {
      "professor": "Oficial Instrutor PMBA",
      "cargo": "Especialista na Matéria",
      "analiseGeral": "Fundamentação legal clara da resposta.",
      "justificativaAlternativas": {
        "A": "Explicação do erro da alternativa A",
        "B": "CORRETA. Justificativa com base na lei ou edital",
        "C": "Explicação do erro da alternativa C",
        "D": "Explicação do erro da alternativa D",
        "E": "Explicação do erro da alternativa E"
      },
      "bizuPMBA": "Dica prática para memorizar e não cair em pegadinha no concurso PMBA.",
      "artigosCitados": ["Edital PMBA - Legislação Pertinente"]
    }
  }
]`;

    // Dynamic timeout according to requested questions volume
    const timeoutMs = Math.max(30000, numQuestoes * 2500);
    const timeoutPromise = new Promise<never>((_, reject) => {
      setTimeout(() => reject(new Error('TIMEOUT_GEMINI_API')), timeoutMs);
    });

    const aiCall = ai.models.generateContent({
      model: 'gemini-flash-lite-latest',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        temperature: 0.95
      }
    });

    const response = await Promise.race([aiCall, timeoutPromise]);
    const text = response.text;

    if (!text) {
      throw new Error('Resposta vazia da API');
    }

    // Safely extract JSON array even if model introduces extra wrapping
    let cleanedText = text.trim();
    const firstBracket = cleanedText.indexOf('[');
    const lastBracket = cleanedText.lastIndexOf(']');
    if (firstBracket !== -1 && lastBracket !== -1 && lastBracket > firstBracket) {
      cleanedText = cleanedText.substring(firstBracket, lastBracket + 1);
    } else {
      cleanedText = cleanedText.replace(/^```json\s*/i, '').replace(/\s*```$/i, '').trim();
    }

    const rawData = JSON.parse(cleanedText);
    const rawList = Array.isArray(rawData) ? rawData : [rawData];
    const timestamp = Date.now();

    // Rigorous deduplication (Jaccard similarity check on word tokens with 20% max threshold)
    const SIMILARITY_THRESHOLD = 0.20; // 20% max allowed similarity

    const getTokens = (str: string) => {
      const normalized = String(str || '').toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9 ]/g, ' ');
      
      return new Set(
        normalized.split(/\s+/).filter(w => w.length >= 3) // words of 3+ chars
      );
    };

    const existingTokenSets = (enunciadosExistentes || []).filter(Boolean).map((e: any) => getTokens(String(e)));

    const isTooSimilar = (newText: string, currentAcceptedSets: Set<string>[]) => {
      const newTokens = getTokens(newText);
      if (newTokens.size < 3) return false;
      const allSetsToCompare = [...existingTokenSets, ...currentAcceptedSets];
      for (const oldTokens of allSetsToCompare) {
        let intersection = 0;
        for (const t of newTokens) {
          if (oldTokens.has(t)) intersection++;
        }
        const union = newTokens.size + oldTokens.size - intersection;
        const jaccard = union > 0 ? intersection / union : 0;
        if (jaccard > SIMILARITY_THRESHOLD) {
          return true; // Reject if similarity exceeds 20%
        }
      }
      return false;
    };

    const acceptedRawList: any[] = [];
    const acceptedTokenSets: Set<string>[] = [];

    for (const q of rawList) {
      if (acceptedRawList.length >= numQuestoes) break;
      const text = q?.enunciado || '';
      if (!text || text.trim().length < 15) continue; // ignore too short ones

      if (!isTooSimilar(text, acceptedTokenSets)) {
        acceptedRawList.push({ ...q, _isAI: true }); // mark as AI
        acceptedTokenSets.push(getTokens(text));
      }
    }

    // Supplement if needed
    if (acceptedRawList.length < numQuestoes) {
      const needed = numQuestoes - acceptedRawList.length;
      const suplemento = gerarQuestoesPedagogicas(disciplina, assunto, needed * 3, dificuldade, banca);
      for (const sup of suplemento) {
        if (acceptedRawList.length >= numQuestoes) break;
        if (!isTooSimilar(sup.enunciado, acceptedTokenSets)) {
          acceptedRawList.push({
            id: sup.id, // Preserve original ID!
            disciplina: sup.disciplina,
            assunto: sup.assunto,
            enunciado: sup.enunciado,
            alternativas: sup.alternativas,
            respostaCorreta: sup.respostaCorreta,
            comentario: sup.comentario,
            banca: sup.banca,
            _isAI: false // mark as bank
          });
          acceptedTokenSets.push(getTokens(sup.enunciado));
        }
      }
    }

    const questoes = acceptedRawList.slice(0, numQuestoes).map((q: any, idx: number) => {
      const rawResp = (q.respostaCorreta || 'A').toString().trim().toUpperCase();
      const cleanResp = (rawResp.match(/[A-E]/)?.[0] || 'A') as 'A' | 'B' | 'C' | 'D' | 'E';

      const alternativasLimpa = Array.isArray(q.alternativas)
        ? q.alternativas.map((alt: any, aIdx: number) => {
            const fallbackId = (['A', 'B', 'C', 'D', 'E'][aIdx] || 'A') as 'A' | 'B' | 'C' | 'D' | 'E';
            const rawId = (alt.id || fallbackId).toString().trim().toUpperCase();
            const cleanId = (rawId.match(/[A-E]/)?.[0] || fallbackId) as 'A' | 'B' | 'C' | 'D' | 'E';
            return {
              id: cleanId,
              texto: String(alt.texto || '').trim(),
            };
          })
        : [];

      // Logic for ID: Use existing if from bank, generate if from AI
      let finalId = q.id;
      if (q._isAI || !finalId) {
        // Generate stable ID for AI questions based on enunciado prefix and timestamp
        const prefix = String(q.enunciado || '').slice(0, 20).replace(/\W/g, '_').toLowerCase();
        finalId = `q-ia-${timestamp}-${prefix}-${idx}`;
      }

      const questaoBase = {
        id: finalId,
        numero: q.numero || (timestamp % 9000) + 1000 + idx,
        banca: q.banca || (banca === 'FCC / IBFC (Padrão PMBA)' ? 'IBFC/FCC (PMBA)' : banca),
        orgao: 'PM-BA',
        cargo: 'Soldado da Polícia Militar da Bahia',
        ano: q.ano || 2026,
        disciplina: canonicalizeDisciplina(q.disciplina || disciplina),
        assunto: q.assunto || (assunto !== 'Todos os Assuntos' ? assunto : 'Tópicos do Edital PMBA'),
        dificuldade: (dificuldade as any) || q.dificuldade || 'Média',
        enunciado: String(q.enunciado || '').trim(),
        alternativas: alternativasLimpa,
        respostaCorreta: cleanResp,
        comentario: {
          professor: q.comentario?.professor || 'Coordenação Pedagógica PMBA',
          cargo: q.comentario?.cargo || `Especialista em ${disciplina}`,
          analiseGeral: q.comentario?.analiseGeral || 'Comentário fundamentado no edital da Polícia Militar da Bahia.',
          justificativaAlternativas: typeof q.comentario?.justificativaAlternativas === 'object' && q.comentario?.justificativaAlternativas !== null
            ? q.comentario.justificativaAlternativas
            : {},
          bizuPMBA: q.comentario?.bizuPMBA || 'Bizu PMBA: Atente-se à literalidade da lei e enunciados de jurisprudência.',
          artigosCitados: Array.isArray(q.comentario?.artigosCitados)
            ? q.comentario.artigosCitados
            : [`Edital PMBA - ${disciplina}`]
        }
      };

      // Shuffling alternatives here for AI and mixed questions as well
      return embaralharAlternativas(questaoBase);
    });

    if (questoes.length > 0 && questoes[0].alternativas?.length >= 2) {
      return res.json({ questoes, fonte: 'gemini_ai' });
    } else {
      throw new Error('Formato retornado incompleto');
    }
  } catch (error: any) {
    console.warn('Fallback pedagógico acionado para geração de questões PMBA:', error?.message || error);
    // Instantaneous graceful fallback: guaranteed high quality, complete questions
    const fallback = gerarQuestoesPedagogicas(disciplina, assunto, numQuestoes, dificuldade, banca);
    return res.json({ questoes: fallback, fonte: 'banco_pedagogico_pmba' });
  }
});

// Agente PMBA - Multi-Mode Handler
app.post('/api/agente-pmba', async (req: Request, res: Response) => {
  const { comando } = req.body || {};
  const ai = getAI();

  if (!ai) {
    return res.status(500).json({ error: 'Configuração da IA (Gemini) indisponível.' });
  }

  const systemInstruction = `Você deve operar em 3 modos diferentes, dependendo do comando do usuário: [MODO QUESTÃO], [MODO REDAÇÃO] ou [MODO PATENTE].

---

[DIRETRIZES GERAIS DA PMBA]
- Baseie-se estritamente na legislação vigente da Bahia: Lei Estadual nº 7.990/2001 (Estatuto da PMBA), Lei Estadual nº 13.201/2015 (LOB) e Decreto Estadual nº 14.224/2012 (Igualdade Racial e de Gênero).
- Mantenha a temperatura de resposta baixa para evitar alucinações jurídicas.

---

[MODO 1: MODO QUESTÃO]
Gere uma questão inédita e seu comentário detalhado.
Entrada esperada: "Questão: [Matéria] | [Assunto]"
Formato de Saída (JSON estrito):
{
  "tipo": "questao",
  "materia": "",
  "assunto": "",
  "enunciado": "[Texto focado no estilo da banca, sem ambiguidades]",
  "alternativas": {"A": "", "B": "", "C": "", "D": "", "E": ""},
  "gabarito": "[A-E]",
  "comentario": "[Explicação cirúrgica item por item, citando o artigo exato da lei ou regra]"
}

---

[MODO 2: MODO REDAÇÃO]
Gere um tema inédito de redação focado na realidade atual da Bahia ou corrija um texto enviado pelo aluno.
Entrada esperada: "Redação: Gerar Tema" OU "Redação: Corrigir | Tema: [Tema] | Texto: [Texto do Aluno]"
Formato de Saída para GERAR TEMA (JSON estrito):
{
  "tipo": "redacao_tema",
  "tema": "[Tema de cunho histórico-cultural, atualidade ou segurança pública na Bahia]",
  "textos_motivadores": ["Texto 1...", "Texto 2..."],
  "diretrizes": "[O que o candidato deve abordar na estrutura dissertativa-argumentativa]"
}
Formato de Saída para CORRIGIR (JSON estrito):
{
  "tipo": "redacao_correcao",
  "nota_final": 0,
  "criterios": {
    "ortografia_gramatica": "[Nota e feedback]",
    "estrutura_dissertativa": "[Nota e feedback]",
    "relevancia_ao_tema": "[Nota e feedback]"
  },
  "pontos_fortes": ["", ""],
  "pontos_de_melhoria": ["", ""],
  "exemplo_melhorado": "[Sugestão de um parágrafo do aluno reescrito de forma excelente]"
}

---

[MODO 3: MODO PATENTE]
Atue como o Comandante do site. Avalie o desempenho do usuário e gere uma mensagem de áudio/texto motivacional militar, definindo se ele avança na hierarquia ou precisa de "rancho" (estudar mais).
Entrada esperada: "Patente: [Patente Atual] | Acertos: [X] | Erros: [Y] | Materia: [Materia]"
Formato de Saída (JSON estrito):
{
  "tipo": "patente_feedback",
  "nova_patente": "[Manter atual ou promover para: Recruta, Soldado, Cabo, Sargento, Subtenente, Oficial]",
  "mensagem_comandante": "[Mensagem motivacional curta com jargões militares nordestinos/baianos, ex: 'Padrão!', 'Bizu pesado', estimulando o foco na missão]",
  "missao_diaria": "[Uma meta clara baseada nos erros do usuário, ex: 'Resolver 5 questões de Direito Penal Militar nas próximas 24h']"
}

---

[EXECUÇÃO]
Responda APENAS com o objeto JSON correspondente ao modo solicitado, sem nenhuma introdução (como \`\`\`json) ou conclusões fora das chaves.
Comando recebido: ${comando}`;

  try {
    const aiCall = ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: systemInstruction,
      config: {
        responseMimeType: 'application/json',
        temperature: 0.2
      }
    });

    const timeoutPromise = new Promise<never>((_, reject) => {
      setTimeout(() => reject(new Error('TIMEOUT_GEMINI_API')), 15000);
    });

    const response = await Promise.race([aiCall, timeoutPromise]);
    const text = response.text;

    if (!text) {
      throw new Error('Resposta vazia da API');
    }

    const cleanedText = text.replace(/^```json\s*/i, '').replace(/\s*```$/i, '').trim();
    const rawData = JSON.parse(cleanedText);

    return res.json(rawData);
  } catch (error: any) {
    console.error('Erro no agente PMBA:', error);
    return res.status(500).json({ error: error?.message || 'Erro ao processar comando do agente.' });
  }
});

// Endpoint: POST /api/ia-o-que-estudar
app.post('/api/ia-o-que-estudar', async (req: Request, res: Response) => {
  const {
    totalRespondidas = 0,
    totalAcertos = 0,
    totalErros = 0,
    taxaGeral = 0,
    disciplinaAlvo = 'Direito Constitucional',
    topicoIdAlvo = 'tc-1',
    topicoTituloAlvo = 'Art. 5º da CF/88',
    errosNoTema = 0,
    taxaAcertoNoTema = 0,
    dicaBase = ''
  } = req.body || {};

  const ai = getAI();
  if (!ai) {
    return res.json({
      diagnosticoPedagogico: `Com base no seu histórico recente (${totalErros} erros registrados), sua maior oportunidade de ganho de pontuação na PMBA é reforçar "${disciplinaAlvo}" (especialmente "${topicoTituloAlvo}"). Dominar este tópico aumentará sua segurança nas próximas questões.`,
      planoAcao: [
        `1. Revise a teoria tática de "${topicoTituloAlvo}"`,
        '2. Memorize os mnemônicos e exceções das bancas FCC/IBFC',
        '3. Resolva de 3 a 5 questões exclusivas deste tema para fixação imediata'
      ],
      bizuDeOuro: dicaBase || 'Atenção aos detalhes literais da lei exigidos pelas bancas da PMBA.',
      origem: 'ia_local'
    });
  }

  try {
    const prompt = `Você é o Coordenador Pedagógico e Comandante Militar Especialista no Concurso de Soldado da Polícia Militar da Bahia (PMBA).
O candidato está estudando no simulado oficial e pediu orientação clicando em "IA, o que estudar?".
Dados do histórico do candidato:
- Total de questões feitas: ${totalRespondidas}
- Total de erros gerais: ${totalErros}
- Taxa geral de acertos: ${taxaGeral}%
- Tema prioritário ou com maior índice de erros identificado: "${topicoTituloAlvo}" (${disciplinaAlvo})
- Erros específicos nesse tema: ${errosNoTema}
- Aproveitamento no tema: ${taxaAcertoNoTema}%
- Dica de prova base: "${dicaBase}"

Gere uma orientação cirúrgica em tom motivador militar baiano, firme e didático (sem jargões vazios, focando nas pegadinhas clássicas da FCC/IBFC).
Retorne ESTRITAMENTE em formato JSON com as chaves:
{
  "diagnosticoPedagogico": "Explicação direta (2 a 3 frases) apontando por que este ponto é o calcanhar de aquiles do aluno e sua relevância para a nota de corte da PMBA.",
  "planoAcao": [
    "1. [Ação de leitura]",
    "2. [Ação de memorização com bizu]",
    "3. [Ação de treino prático de questões]"
  ],
  "bizuDeOuro": "A pegadinha clássica da banca que o candidato não pode mais cair (ex: flagrante à noite x mandado judicial de dia, etc.)"
}`;

    const aiCall = ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        temperature: 0.3
      }
    });

    const timeoutPromise = new Promise<never>((_, reject) => {
      setTimeout(() => reject(new Error('TIMEOUT_GEMINI_API')), 10000);
    });

    const response = await Promise.race([aiCall, timeoutPromise]);
    const text = response.text;
    if (!text) throw new Error('Resposta vazia');

    const cleaned = text.replace(/^```json\s*/i, '').replace(/\s*```$/i, '').trim();
    const parsed = JSON.parse(cleaned);
    return res.json({
      ...parsed,
      origem: 'ia_remota'
    });
  } catch (error: any) {
    console.warn('Erro ao consultar Gemini para o que estudar:', error?.message || error);
    return res.json({
      diagnosticoPedagogico: `Com base no seu histórico recente (${totalErros} erros registrados), sua maior oportunidade de ganho de pontuação na PMBA é reforçar "${disciplinaAlvo}" (especialmente "${topicoTituloAlvo}"). Dominar este tópico aumentará sua segurança nas próximas questões.`,
      planoAcao: [
        `1. Revise a teoria tática de "${topicoTituloAlvo}"`,
        '2. Memorize os mnemônicos e exceções das bancas FCC/IBFC',
        '3. Resolva de 3 a 5 questões exclusivas deste tema para fixação imediata'
      ],
      bizuDeOuro: dicaBase || 'Atenção aos detalhes literais da lei exigidos pelas bancas da PMBA.',
      origem: 'ia_local'
    });
  }
});

// Health check
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

async function startServer() {
  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req: Request, res: Response) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor Simulado PMBA ativo em http://localhost:${PORT}`);
  });
}

startServer();
