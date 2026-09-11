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
    banca = 'IBFC / FCC (Padrão PMBA)'
  } = req.body || {};

  const numQuestoes = Math.min(Math.max(Number(quantidade) || 3, 1), 10);
  const ai = getAI();

  // If no Gemini API key configured, instantly serve the verified pedagogical bank
  if (!ai) {
    const questoes = gerarQuestoesPedagogicas(disciplina, assunto, numQuestoes, dificuldade, banca);
    return res.json({ questoes, fonte: 'banco_pedagogico_pmba' });
  }

  try {
    const prompt = `Você é uma banca examinadora pedagógica para o concurso de Soldado da Polícia Militar da Bahia (PMBA).
Gere exatamente ${numQuestoes} questões inéditas de múltipla escolha no estilo ${banca}.
Disciplina: ${disciplina}
Assunto: ${assunto}
Dificuldade: ${dificuldade}

Retorne ESTRITAMENTE um array JSON puro (sem markdown ou texto extra) onde cada elemento segue esta estrutura:
[
  {
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

    // Strict timeout promise (4.5s) to guarantee the server never hangs on external API delays or 503 spikes
    const timeoutPromise = new Promise<never>((_, reject) => {
      setTimeout(() => reject(new Error('TIMEOUT_GEMINI_API')), 4500);
    });

    const aiCall = ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
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

    const questoes = rawList.map((q: any, idx: number) => ({
      id: `q-ia-live-${timestamp}-${idx + 1}`,
      numero: (timestamp % 9000) + 1000 + idx,
      banca: banca.includes('IBFC') ? 'IBFC' : banca.includes('FCC') ? 'FCC' : 'Simulado PMBA',
      orgao: 'PM-BA',
      cargo: 'Soldado da Polícia Militar da Bahia',
      ano: 2026,
      disciplina: q.disciplina || disciplina,
      assunto: q.assunto || (assunto !== 'Todos os Assuntos' ? assunto : 'Tópicos do Edital PMBA'),
      dificuldade: (dificuldade as any) || 'Média',
      enunciado: q.enunciado,
      alternativas: Array.isArray(q.alternativas) ? q.alternativas : [],
      respostaCorreta: q.respostaCorreta || 'A',
      comentario: {
        professor: q.comentario?.professor || 'Coordenação Pedagógica PMBA',
        cargo: q.comentario?.cargo || `Especialista em ${disciplina}`,
        analiseGeral: q.comentario?.analiseGeral || 'Comentário fundamentado no edital da Polícia Militar da Bahia.',
        justificativaAlternativas: q.comentario?.justificativaAlternativas || {},
        bizuPMBA: q.comentario?.bizuPMBA || 'Bizu PMBA: Atente-se à literalidade da lei e enunciados de jurisprudência.',
        artigosCitados: q.comentario?.artigosCitados || [`Edital PMBA - ${disciplina}`]
      }
    }));

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
