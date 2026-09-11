import 'dotenv/config';
import express, { Request, Response } from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI, Type } from '@google/genai';

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

// Fallback generator for realistic PMBA questions if API key is not yet set or during offline/contingency
function generateFallbackQuestions(
  disciplina: string,
  assunto: string,
  quantidade: number,
  dificuldade: string
): any[] {
  const bancosFallback: Record<string, any[]> = {
    'Direito Constitucional': [
      {
        banca: 'IBFC',
        assunto: 'Art. 144 da CF/88 - Segurança Pública',
        dificuldade: 'Média',
        enunciado: 'Em relação à organização da Segurança Pública prevista no artigo 144 da Constituição Federal de 1988, é correto afirmar quanto às Polícias Militares dos Estados:',
        alternativas: [
          { id: 'A', texto: 'Exercem exclusivamente as funções de polícia judiciária e a apuração de infrações penais comuns.' },
          { id: 'B', texto: 'São forças auxiliares e reserva do Exército Brasileiro, cabendo-lhes a polícia ostensiva e a preservação da ordem pública.' },
          { id: 'C', texto: 'Subordinam-se diretamente ao Ministério da Justiça e Segurança Pública, independentemente do Governador do Estado.' },
          { id: 'D', texto: 'Possuem competência concorrente com a Polícia Rodoviária Federal para o patrulhamento ostensivo das rodovias federais.' },
          { id: 'E', texto: 'Podem ser dissolvidas por decreto do Chefe do Poder Executivo Municipal em situações de calamidade.' }
        ],
        respostaCorreta: 'B',
        comentario: {
          professor: 'Maj. Dr. Sérgio Bahia',
          cargo: 'Especialista em Direito Constitucional e Segurança Pública',
          analiseGeral: 'Conforme preceitua o Art. 144, § 5º e § 6º da CF/88: "Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública", e são forças auxiliares e reserva do Exército, subordinadas aos Governadores.',
          justificativaAlternativas: {
            A: 'Incorreta. Polícia judiciária cabe à Polícia Civil e à Polícia Federal.',
            B: 'CORRETA. Art. 144, § 5º e § 6º da CF/88.',
            C: 'Incorreta. Subordinam-se aos Governadores dos Estados.',
            D: 'Incorreta. Patrulhamento de rodovias federais é atribuição exclusiva da PRF.',
            E: 'Incorreta. Municípios não exercem comando nem podem dissolver a PM.'
          },
          bizuPMBA: 'Bizu PMBA: Polícia Militar = Polícia Ostensiva + Preservação da Ordem Pública + Força Auxiliar do Exército + Subordinação ao Governador!',
          artigosCitados: ['Art. 144, § 5º e § 6º da CF/88']
        }
      },
      {
        banca: 'FCC',
        assunto: 'Art. 5º da CF/88 - Direitos e Garantias Fundamentais',
        dificuldade: 'Média',
        enunciado: 'Durante patrulhamento de rotina em Salvador, uma guarnição da PMBA aborda um indivíduo em atitude suspeita. À luz do art. 5º da Constituição Federal de 1988 e da jurisprudência do STF, assinale a opção correta:',
        alternativas: [
          { id: 'A', texto: 'A identificação criminal é obrigatória para qualquer cidadão detido, mesmo portando documento de identidade civil válido.' },
          { id: 'B', texto: 'O preso tem direito à identificação dos responsáveis por sua prisão ou por seu interrogatório policial.' },
          { id: 'C', texto: 'A prisão de qualquer pessoa poderá ser comunicada à família apenas após o término da lavratura do auto de flagrante.' },
          { id: 'D', texto: 'É lícito o uso de algemas em qualquer abordagem como regra geral do patrulhamento ostensivo.' },
          { id: 'E', texto: 'O militar estadual pode apreender o aparelho celular do cidadão abordado e acessar suas mensagens sem prévia autorização judicial.' }
        ],
        respostaCorreta: 'B',
        comentario: {
          professor: 'Cap. Dra. Juliana Medeiros',
          cargo: 'Professora de Direito Constitucional Militar',
          analiseGeral: 'O Art. 5º, LXIV, da CF/88 estabelece expressamente: "o preso tem direito à identificação dos responsáveis por sua prisão ou por seu interrogatório policial".',
          justificativaAlternativas: {
            A: 'Incorreta. O civilmente identificado não será submetido a identificação criminal, salvo nas hipóteses previstas em lei (Art. 5º, LVIII).',
            B: 'CORRETA. É garantia fundamental expressa no inciso LXIV do art. 5º da CF/88.',
            C: 'Incorreta. A prisão deve ser comunicada imediatamente ao juiz e à família (inciso LXII).',
            D: 'Incorreta. Súmula Vinculante 11 do STF: o uso de algemas é excepcional (PRPR: Perigo, Resistência, Prejuízo a terceiros, Risco de fuga).',
            E: 'Incorreta. O acesso ao conteúdo de celular sem ordem judicial ou consentimento viola a intimidade (STF).'
          },
          bizuPMBA: 'Bizu do Soldado: Súmula Vinculante 11 do STF restringe algemas aos casos de PRPR (Resistência, Fuga ou Perigo justificado por escrito)!',
          artigosCitados: ['Art. 5º, incisos LVIII, LXII e LXIV da CF/88', 'Súmula Vinculante nº 11 do STF']
        }
      }
    ],
    'Promoção da Igualdade Racial e de Gênero': [
      {
        banca: 'FCC',
        assunto: 'Estatuto da Igualdade Racial (Lei nº 12.288/2010)',
        dificuldade: 'Média',
        enunciado: 'Nos termos da Lei Federal nº 12.288/2010 (Estatuto da Igualdade Racial), considera-se "população negra":',
        alternativas: [
          { id: 'A', texto: 'Exclusivamente os indivíduos que comprovem ascendência direta quilombola ou certidão genealógica.' },
          { id: 'B', texto: 'O conjunto de pessoas que se autodeclaram pretas e pardas, conforme o quesito cor ou raça usado pela Fundação Instituto Brasileiro de Geografia e Estatística (IBGE), ou que adotam autodefinição análoga.' },
          { id: 'C', texto: 'Apenas os cidadãos que residam em comunidades tradicionais reconhecidas pela Fundação Cultural Palmares.' },
          { id: 'D', texto: 'Todos os cidadãos residentes nas regiões Norte e Nordeste do Brasil que pertençam a núcleos familiares de baixa renda.' },
          { id: 'E', texto: 'Os cidadãos que forem submetidos e aprovados perante comissão heteroidentificatória municipal com laudo emitido há menos de 1 ano.' }
        ],
        respostaCorreta: 'B',
        comentario: {
          professor: 'Ten. Dra. Cláudia Santana',
          cargo: 'Especialista em Legislação Étnico-Racial e Direitos Humanos',
          analiseGeral: 'O Art. 1º, parágrafo único, inciso IV, da Lei nº 12.288/2010 define: "população negra: o conjunto de pessoas que se autodeclaram pretas e pardas, conforme o quesito cor ou raça usado pela Fundação IBGE, ou que adotam autodefinição análoga".',
          justificativaAlternativas: {
            A: 'Incorreta. A definição legal abrange autodeclarados pretos e pardos, sem exigência de comprovação de ascendência quilombola.',
            B: 'CORRETA. Literalidade do art. 1º, parágrafo único, IV da Lei Federal 12.288/2010.',
            C: 'Incorreta. Comunidades tradicionais são outro conceito contemplado na lei.',
            D: 'Incorreta. O conceito não está restrito a regiões geográficas nem à faixa de renda.',
            E: 'Incorreta. A regra geral do Estatuto é a autodeclaração conforme quesito do IBGE.'
          },
          bizuPMBA: 'Bizu do Concurso: População Negra segundo a Lei 12.288/10 = Pretos + Pardos (critério IBGE)! Cai em todas as provas da PMBA!',
          artigosCitados: ['Art. 1º, parágrafo único, IV da Lei Federal nº 12.288/2010']
        }
      }
    ],
    'História da Bahia': [
      {
        banca: 'IBFC',
        assunto: 'Independência da Bahia (2 de Julho de 1823)',
        dificuldade: 'Média',
        enunciado: 'A data magna da Bahia, celebrada no dia 2 de Julho, comemora a vitória definitiva das tropas baianas e brasileiras sobre as forças coloniais portuguesas em 1823. Sobre este evento histórico, é correto afirmar:',
        alternativas: [
          { id: 'A', texto: 'Ocorreu sem qualquer resistência armada, tendo as tropas portuguesas do General Madeira de Melo entregado a cidade pacificamente.' },
          { id: 'B', texto: 'Contou com a participação decisiva de voluntários, sertanejos, negros escravizados e libertos, indígenas e mulheres combatentes, a exemplo de Maria Quitéria e Joana Angélica.' },
          { id: 'C', texto: 'Foi liderada exclusivamente pela corte imperial recém-instalada no Rio de Janeiro, sem adesão dos municípios do Recôncavo Baiano.' },
          { id: 'D', texto: 'A vitória consolidou a separação da Bahia em relação ao restante do Império do Brasil, proclamando uma república independente.' },
          { id: 'E', texto: 'Teve início com a Batalha de Pirajá, que marcou a derrota das forças baianas e a manutenção do domínio português até o ano de 1889.' }
        ],
        respostaCorreta: 'B',
        comentario: {
          professor: 'Cel. Historiador Carlos Alberto',
          cargo: 'Especialista em História Militar e Tradições da Bahia',
          analiseGeral: 'A Guerra de Independência da Bahia (1822-1823) foi uma verdadeira guerra popular e militar, onde o povo baiano e as tropas do Recôncavo, incluindo heroínas como Maria Quitéria, Joana Angélica e Maria Felipa, expulsaram as tropas portuguesas em 2 de Julho de 1823.',
          justificativaAlternativas: {
            A: 'Incorreta. Houve sangrentos confrontos militares, como a Batalha de Pirajá e o cerco de Salvador.',
            B: 'CORRETA. Foi um movimento amplamente popular e decisivo para a soberania do Brasil.',
            C: 'Incorreta. Teve adesão maciça dos municípios do Recôncavo (Cachoeira, Santo Amaro, Maragogipe).',
            D: 'Incorreta. A vitória consolidou a independência do Brasil como um todo, sem separatismo.',
            E: 'Incorreta. A Batalha de Pirajá (novembro de 1822) foi vitória crucial das forças brasileiras (Corneta Lopes).'
          },
          bizuPMBA: 'Bizu Histórico: Maria Quitéria (Soldado Medeiros), Joana Angélica (mártir da Lapa), Maria Felipa (Itaparica) e o 2 de Julho de 1823!',
          artigosCitados: ['Lei Estadual nº 9.093/1995 (Data Magna da Bahia)', 'Patrono e Heroínas da Pátria']
        }
      }
    ]
  };

  const pool = bancosFallback[disciplina] || bancosFallback['Direito Constitucional'];
  const generated: any[] = [];
  const timestamp = Date.now();

  for (let i = 0; i < quantidade; i++) {
    const base = pool[i % pool.length];
    generated.push({
      id: `q-gen-${timestamp}-${i + 1}`,
      numero: timestamp % 10000 + i + 1,
      banca: base.banca || 'Inédita PMBA',
      orgao: 'PM-BA',
      cargo: 'Soldado da Polícia Militar da Bahia',
      ano: 2026,
      disciplina,
      assunto: assunto !== 'Todos os Assuntos' ? assunto : base.assunto,
      dificuldade: (dificuldade as any) || 'Média',
      enunciado: base.enunciado,
      alternativas: base.alternativas,
      respostaCorreta: base.respostaCorreta,
      comentario: base.comentario
    });
  }

  return generated;
}

// POST /api/gerar-questoes
app.post('/api/gerar-questoes', async (req: Request, res: Response) => {
  try {
    const {
      disciplina = 'Direito Constitucional',
      assunto = 'Artigo 5º e 144 da CF/88',
      quantidade = 3,
      dificuldade = 'Média',
      banca = 'IBFC / FCC (Padrão PMBA)'
    } = req.body;

    const numQuestoes = Math.min(Math.max(Number(quantidade) || 3, 1), 10);
    const ai = getAI();

    if (!ai) {
      console.log('Gemini API key ausente no servidor. Utilizando gerador pedagógico de contingência PMBA.');
      const fallbackQuestions = generateFallbackQuestions(disciplina, assunto, numQuestoes, dificuldade);
      return res.json({ questoes: fallbackQuestions, fonte: 'banco_pedagogico_pmba' });
    }

    const prompt = `Você é uma banca examinadora sênior e pedagógica especializada nos concursos para Soldado da Polícia Militar da Bahia (PMBA), seguindo o estilo das bancas FCC e IBFC.

Crie exatamente ${numQuestoes} questões inéditas de múltipla escolha estritamente baseadas no Edital da PMBA com as seguintes especificações:
- Disciplina: ${disciplina}
- Assunto/Tópico: ${assunto}
- Nível de Dificuldade: ${dificuldade}
- Estilo da Banca: ${banca}
- Órgão: Polícia Militar da Bahia (PMBA)
- Cargo: Soldado da Polícia Militar

REQUISITOS OBRIGATÓRIOS PARA CADA QUESTÃO:
1. Enunciado contextualizado, com situação prática policial, caso concreto, jurisprudência recente do STF/STJ ou texto de lei/gramática aplicável ao serviço militar estadual.
2. 5 alternativas (A, B, C, D, E). Apenas 1 deve ser a correta.
3. As alternativas incorretas devem conter pegadinhas clássicas de concurso da PMBA (troca de prazos, inversão de competências da PM e Civil, exceções do Art. 5º ou Lei Maria da Penha).
4. Comentário completo do professor:
   - 'professor': Nome fictício com patente militar (ex: 'Cap. Dr. André Vasconcelos')
   - 'cargo': 'Especialista em ${disciplina} para Concursos Policiais'
   - 'analiseGeral': Explicação clara do tema central e embasamento doutrinário ou legal.
   - 'justificativaAlternativas': Objeto com justificativa para CADA uma das letras A, B, C, D e E, explicando por que estão certas ou erradas.
   - 'bizuPMBA': Mnemônico, dica prática ou macete para acertar no dia da prova.
   - 'artigosCitados': Lista com os artigos de lei, súmulas ou referências bibliográficas pertinentes.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              id: { type: Type.STRING },
              numero: { type: Type.INTEGER },
              banca: { type: Type.STRING },
              orgao: { type: Type.STRING },
              cargo: { type: Type.STRING },
              ano: { type: Type.INTEGER },
              disciplina: { type: Type.STRING },
              assunto: { type: Type.STRING },
              dificuldade: { type: Type.STRING, enum: ['Fácil', 'Média', 'Difícil'] },
              enunciado: { type: Type.STRING },
              alternativas: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    id: { type: Type.STRING, enum: ['A', 'B', 'C', 'D', 'E'] },
                    texto: { type: Type.STRING }
                  },
                  required: ['id', 'texto']
                }
              },
              respostaCorreta: { type: Type.STRING, enum: ['A', 'B', 'C', 'D', 'E'] },
              comentario: {
                type: Type.OBJECT,
                properties: {
                  professor: { type: Type.STRING },
                  cargo: { type: Type.STRING },
                  analiseGeral: { type: Type.STRING },
                  justificativaAlternativas: {
                    type: Type.OBJECT,
                    properties: {
                      A: { type: Type.STRING },
                      B: { type: Type.STRING },
                      C: { type: Type.STRING },
                      D: { type: Type.STRING },
                      E: { type: Type.STRING }
                    },
                    required: ['A', 'B', 'C', 'D', 'E']
                  },
                  bizuPMBA: { type: Type.STRING },
                  artigosCitados: {
                    type: Type.ARRAY,
                    items: { type: Type.STRING }
                  }
                },
                required: ['professor', 'cargo', 'analiseGeral', 'justificativaAlternativas', 'bizuPMBA']
              }
            },
            required: [
              'id',
              'banca',
              'orgao',
              'cargo',
              'ano',
              'disciplina',
              'assunto',
              'dificuldade',
              'enunciado',
              'alternativas',
              'respostaCorreta',
              'comentario'
            ]
          }
        }
      }
    });

    const text = response.text;
    if (!text) {
      throw new Error('Resposta vazia da API Gemini');
    }

    const rawQuestoes = JSON.parse(text);
    const timestamp = Date.now();

    // Sanitize and ensure unique IDs
    const questoes = (Array.isArray(rawQuestoes) ? rawQuestoes : [rawQuestoes]).map((q, idx) => ({
      ...q,
      id: q.id && !q.id.startsWith('q-gen') ? `q-gen-${timestamp}-${idx + 1}` : q.id || `q-gen-${timestamp}-${idx + 1}`,
      numero: q.numero || Math.floor(Math.random() * 9000) + 1000,
      ano: q.ano || 2026,
      orgao: q.orgao || 'PM-BA',
      cargo: q.cargo || 'Soldado da Polícia Militar da Bahia',
      disciplina: q.disciplina || disciplina,
      assunto: q.assunto || assunto,
      dificuldade: q.dificuldade || dificuldade,
      banca: q.banca || 'Inédita / IA PMBA'
    }));

    return res.json({ questoes, fonte: 'gemini_ai' });
  } catch (error: any) {
    console.error('Erro ao gerar questões com Gemini:', error);
    // Graceful fallback to avoid leaving user with empty screen
    const {
      disciplina = 'Direito Constitucional',
      assunto = 'Artigo 5º da CF/88',
      quantidade = 3,
      dificuldade = 'Média'
    } = req.body || {};
    const fallback = generateFallbackQuestions(disciplina, assunto, Number(quantidade) || 3, dificuldade);
    return res.json({ questoes: fallback, fonte: 'contingencia_fallback', error: error.message });
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
