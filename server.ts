import 'dotenv/config';
import express, { Request, Response } from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import { gerarQuestoesPedagogicas } from './src/data/questoesPedagogicasPMBA';

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
    errosRecentes = [] // array of { disciplina, assunto, totalErros }
  } = req.body || {};

  const numQuestoes = Math.min(Math.max(Number(quantidade) || 3, 1), 10);
  const ai = getAI();

  // If no Gemini API key configured, instantly serve the verified pedagogical bank
  if (!ai) {
    const questoes = gerarQuestoesPedagogicas(disciplina, assunto, numQuestoes, dificuldade, banca);
    return res.json({ questoes, fonte: 'banco_pedagogico_pmba' });
  }

  try {
    const seedAleatoria = Date.now() + Math.random().toString(36).substring(7);
    
    let instrucaoModo = '';
    if (modo === 'treino_cirurgico' && Array.isArray(errosRecentes) && errosRecentes.length > 0) {
      const listaErros = errosRecentes.map(e => `- ${e.disciplina} -> ${e.assunto} (${e.totalErros} erros)`).join('\n');
      instrucaoModo = `\n[MODO TREINO CIRÚRGICO DE ALTA PERFORMANCE]:\nO aluno errou frequentemente os seguintes tópicos:\n${listaErros}\nCrie questões focadas EXATAMENTE nas pegadinhas, exceções e minúcias desses pontos fracos para consolidação imediata da aprendizagem.`;
    } else if (modo === 'maratona') {
      instrucaoModo = `\n[MODO MARATONA DE ALTA VELOCIDADE]:\nQuestões dinâmicas, com enunciados objetivos e contextualizados com o cotidiano da Polícia Militar da Bahia. Comentários diretos e com Bizus PMBA memoráveis.`;
    } else if (modo === 'simulado_oficial') {
      instrucaoModo = `\n[MODO SIMULADO OFICIAL PMBA]:\nDistribua as questões entre diferentes matérias do edital da PMBA (Constitucional, Administrativo, Penal, Direitos Humanos, Igualdade Racial, História/Geografia da Bahia e Língua Portuguesa) simulando fielmente a prova real.`;
    }

    const prompt = `Você é o Coordenador Pedagógico e Examinador de Alta Performance para o concurso de Soldado da Polícia Militar da Bahia (PMBA).
[SEED DE VARIABILIDADE: ${seedAleatoria}] - Use essa semente para gerar um ângulo completamente novo!
${instrucaoModo}

Gere exatamente ${numQuestoes} questões INÉDITAS, AUTÊNTICAS e EXCLUSIVAS de múltipla escolha no estilo da banca: ${banca}.
ATENÇÃO: Mesmo que a banca escolhida não seja a padrão do concurso, as questões DEVEM ser estritamente baseadas e adaptadas aos tópicos do edital da PMBA (Lei nº 7.990/2001, Lei nº 13.201/2015, Decreto nº 14.224/2012, CF/88, CP, etc).

INSTRUÇÕES CRÍTICAS PARA ESTUDANTE DE ALTO RENDIMENTO (MILHARES DE QUESTÕES):
1. NUNCA gere questões óbvias ou repetitivas. Explore artigos secundários, prazos, competências, exceções legais, jurisprudência do STF/STJ aplicada e situações práticas do policiamento ostensivo baiano.
2. Cada questão DEVE abordar um ponto de lei, conceito ou regra TOTALMENTE DIFERENTE.
3. Elabore comentários pedagógicos aprofundados com:
   - Análise geral fundamentada;
   - Justificativa individual para CADA uma das 5 alternativas (A, B, C, D, E);
   - Bizu PMBA mnemônico prático para memorização rápida;
   - Artigos de lei citados.

Disciplina: ${disciplina}
Assunto: ${assunto}
Dificuldade: ${dificuldade}

Retorne ESTRITAMENTE um array JSON puro (sem markdown ou texto extra) onde cada elemento segue esta estrutura:
[
  {
    "disciplina": "${disciplina}",
    "assunto": "${assunto}",
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
      "cargo": "Especialista em ${disciplina}",
      "analiseGeral": "Fundamentação legal clara da resposta.",
      "justificativaAlternativas": {
        "A": "Explicação do erro",
        "B": "CORRETA. Justificativa com base na lei ou edital",
        "C": "Explicação do erro",
        "D": "Explicação do erro",
        "E": "Explicação do erro"
      },
      "bizuPMBA": "Dica prática para memorizar e não cair em pegadinha no concurso PMBA.",
      "artigosCitados": ["Edital PMBA - ${disciplina}"]
    }
  }
]`;

    // Generous timeout promise (25s) to guarantee high-quality generation without dropping to fallback
    const timeoutPromise = new Promise<never>((_, reject) => {
      setTimeout(() => reject(new Error('TIMEOUT_GEMINI_API')), 25000);
    });

    const aiCall = ai.models.generateContent({
      model: 'gemini-2.5-flash',
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

    // Clean any accidental markdown wrap
    const cleanedText = text.replace(/^```json\s*/i, '').replace(/\s*```$/i, '').trim();
    const rawData = JSON.parse(cleanedText);
    const rawList = Array.isArray(rawData) ? rawData : [rawData];
    const timestamp = Date.now();

    const questoes = rawList.map((q: any, idx: number) => {
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

      return {
        id: `q-ia-live-${timestamp}-${idx + 1}`,
        numero: (timestamp % 9000) + 1000 + idx,
        banca: banca === 'FCC / IBFC (Padrão PMBA)' ? 'IBFC/FCC (PMBA)' : banca,
        orgao: 'PM-BA',
        cargo: 'Soldado da Polícia Militar da Bahia',
        ano: 2026,
        disciplina: q.disciplina || disciplina,
        assunto: q.assunto || (assunto !== 'Todos os Assuntos' ? assunto : 'Tópicos do Edital PMBA'),
        dificuldade: (dificuldade as any) || 'Média',
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
