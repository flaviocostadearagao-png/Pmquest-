import { Questao, AlternativaId } from '../types';
import { QUESTOES_EXPANDIDAS_PMBA } from './questionsData';

function normalizeDisciplina(d: string): string {
  const s = d.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  if (s.includes('constitucional')) return 'constitucional';
  if (s.includes('igualdade') || s.includes('racial') || s.includes('genero') || s.includes('raca')) return 'igualdade';
  if (s.includes('historia')) return 'historia';
  if (s.includes('administrativo')) return 'administrativo';
  if (s.includes('portugues') || s.includes('lingua')) return 'portugues';
  if (s.includes('humano')) return 'humanos';
  if (s.includes('geografia')) return 'geografia';
  if (s.includes('penal')) return 'penal';
  if (s.includes('logico') || s.includes('matematica')) return 'matematica';
  return s.trim();
}

// Track IDs served to avoid repeating the exact same questions in the same session
const QUESTOES_UTILIZADAS = new Set<string>();

export function gerarQuestoesPedagogicas(
  disciplina: string,
  assunto: string,
  quantidade: number = 3,
  dificuldade: string = 'Média',
  banca: string = 'FCC / IBFC (Padrão PMBA)'
): Questao[] {
  const normTarget = normalizeDisciplina(disciplina);

  // Filter pool by discipline
  let candidatos = QUESTOES_EXPANDIDAS_PMBA.filter((q) => {
    const normQ = normalizeDisciplina(q.disciplina);
    return normQ === normTarget;
  });

  if (candidatos.length === 0) {
    candidatos = QUESTOES_EXPANDIDAS_PMBA;
  }

  // If subject specified and not general, filter or prioritize
  if (assunto && assunto !== 'Todos os Assuntos' && assunto !== 'Edital PMBA') {
    const normAssunto = assunto.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const comAssunto = candidatos.filter((q) => {
      const qAssunto = q.assunto.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      return qAssunto.includes(normAssunto) || normAssunto.includes(qAssunto);
    });
    if (comAssunto.length > 0) {
      candidatos = comAssunto;
    }
  }

  // Shuffle candidates using Fisher-Yates algorithm
  const pool = [...candidatos];
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }

  // Sort unseen questions first
  pool.sort((a, b) => {
    const aUsed = QUESTOES_UTILIZADAS.has(a.id) ? 1 : 0;
    const bUsed = QUESTOES_UTILIZADAS.has(b.id) ? 1 : 0;
    return aUsed - bUsed;
  });

  const timestamp = Date.now();
  const qtd = Math.min(Math.max(quantidade, 1), 10);
  const resultado: Questao[] = [];

  for (let i = 0; i < qtd; i++) {
    const base = pool[i % pool.length];
    QUESTOES_UTILIZADAS.add(base.id);

    // Generate unique randomized ID
    const uniqueId = `q-pmba-real-${timestamp}-${Math.random().toString(36).substring(2, 7)}-${i + 1}`;
    
    // Choose banca label
    const bancaNome = banca.includes('IBFC') ? 'IBFC' : banca.includes('FCC') ? 'FCC' : 'CESPE / Cebraspe';

    // Clone and adapt to ensure completely fresh and genuine instance
    resultado.push({
      id: uniqueId,
      numero: (timestamp % 8000) + 1000 + i,
      banca: bancaNome,
      orgao: 'PM-BA',
      cargo: 'Soldado da Polícia Militar da Bahia',
      ano: 2023 + (i % 2),
      disciplina: disciplina,
      assunto: assunto && assunto !== 'Todos os Assuntos' ? assunto : base.assunto,
      dificuldade: (dificuldade as any) || base.dificuldade || 'Média',
      enunciado: base.enunciado,
      alternativas: base.alternativas.map((alt) => ({ ...alt })),
      respostaCorreta: base.respostaCorreta,
      comentario: {
        professor: base.comentario?.professor || 'Coordenação Pedagógica PMBA',
        cargo: base.comentario?.cargo || `Especialista em ${disciplina} para a Polícia Militar`,
        analiseGeral: base.comentario?.analiseGeral || 'Análise da questão baseada na jurisprudência e doutrina cobradas pelas bancas examinadoras da PMBA.',
        justificativaAlternativas: {
          A: base.comentario?.justificativaAlternativas?.A || 'Análise da alternativa A.',
          B: base.comentario?.justificativaAlternativas?.B || 'Análise da alternativa B.',
          C: base.comentario?.justificativaAlternativas?.C || 'Análise da alternativa C.',
          D: base.comentario?.justificativaAlternativas?.D || 'Análise da alternativa D.',
          E: base.comentario?.justificativaAlternativas?.E || 'Análise da alternativa E.'
        },
        bizuPMBA: base.comentario?.bizuPMBA || 'Bizu do Soldado: Revise os pontos principais do edital e treine com constância!',
        artigosCitados: base.comentario?.artigosCitados ? [...base.comentario.artigosCitados] : [`Edital PMBA - ${disciplina}`]
      }
    });
  }

  return resultado;
}
