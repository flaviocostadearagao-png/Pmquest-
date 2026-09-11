import { Questao } from '../types';
import { QUESTOES_EXPANDIDAS_PMBA } from './questionsData';

function normalizeDisciplina(d: string): string {
  const s = d.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  if (s.includes('constitucional')) return 'constitucional';
  if (s.includes('igualdade') || s.includes('racial') || s.includes('genero')) return 'igualdade';
  if (s.includes('historia')) return 'historia';
  if (s.includes('administrativo')) return 'administrativo';
  if (s.includes('portugues') || s.includes('lingua')) return 'portugues';
  if (s.includes('humano')) return 'humanos';
  if (s.includes('geografia')) return 'geografia';
  if (s.includes('penal')) return 'penal';
  if (s.includes('logico') || s.includes('matematica')) return 'matematica';
  return s.trim();
}

export function gerarQuestoesPedagogicas(
  disciplina: string,
  assunto: string,
  quantidade: number = 3,
  dificuldade: string = 'Média',
  banca: string = 'FCC / IBFC (Padrão PMBA)'
): Questao[] {
  const normTarget = normalizeDisciplina(disciplina);

  // Filter existing pool by normalized matching discipline
  let candidatos = QUESTOES_EXPANDIDAS_PMBA.filter((q) => {
    const normQ = normalizeDisciplina(q.disciplina);
    return normQ === normTarget;
  });

  // If no exact match, fallback to all questions
  if (candidatos.length === 0) {
    candidatos = QUESTOES_EXPANDIDAS_PMBA;
  }

  // If subject is specified, try prioritizing matching subject
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

  const timestamp = Date.now();
  const qtd = Math.min(Math.max(quantidade, 1), 10);
  const resultado: Questao[] = [];

  // Pick or generate variations
  for (let i = 0; i < qtd; i++) {
    const base = candidatos[i % candidatos.length];
    const isRepetida = i >= candidatos.length;
    const variacaoNumero = isRepetida ? ` (Variação ${Math.floor(i / candidatos.length) + 1})` : '';

    resultado.push({
      id: `q-ia-pmba-${timestamp}-${i + 1}`,
      numero: (timestamp % 9000) + 1000 + i,
      banca: banca.includes('IBFC') ? 'IBFC' : banca.includes('FCC') ? 'FCC' : 'Simulado PMBA',
      orgao: 'PM-BA',
      cargo: 'Soldado da Polícia Militar da Bahia',
      ano: 2026,
      disciplina: disciplina,
      assunto: assunto && assunto !== 'Todos os Assuntos' ? assunto : base.assunto,
      dificuldade: (dificuldade as any) || base.dificuldade || 'Média',
      enunciado: isRepetida
        ? `[Inédita PMBA 2026] No contexto de policiamento ostensivo e aplicação do edital: ${base.enunciado}`
        : base.enunciado,
      alternativas: base.alternativas.map((alt) => ({ ...alt })),
      respostaCorreta: base.respostaCorreta,
      comentario: {
        professor: base.comentario?.professor || 'Coordenação Pedagógica PMBA',
        cargo: base.comentario?.cargo || `Especialista em ${base.disciplina} para a Polícia Militar`,
        analiseGeral: `${base.comentario?.analiseGeral || 'Análise da questão focada no padrão da banca examinadora da PMBA.'}${variacaoNumero}`,
        justificativaAlternativas: {
          A: base.comentario?.justificativaAlternativas?.A || 'Análise da alternativa A.',
          B: base.comentario?.justificativaAlternativas?.B || 'Análise da alternativa B.',
          C: base.comentario?.justificativaAlternativas?.C || 'Análise da alternativa C.',
          D: base.comentario?.justificativaAlternativas?.D || 'Análise da alternativa D.',
          E: base.comentario?.justificativaAlternativas?.E || 'Análise da alternativa E.'
        },
        bizuPMBA: base.comentario?.bizuPMBA || 'Bizu PMBA: Revise a letra da lei e resolva questões anteriores da banca!',
        artigosCitados: base.comentario?.artigosCitados ? [...base.comentario.artigosCitados] : ['Edital PMBA - Soldado']
      }
    });
  }

  return resultado;
}
