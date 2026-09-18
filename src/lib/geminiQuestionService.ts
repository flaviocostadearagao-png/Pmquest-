import { Questao } from '../types';
import { gerarQuestoesPedagogicas } from '../data/questoesPedagogicasPMBA';

export interface GerarQuestoesParams {
  disciplina: string;
  assunto: string;
  quantidade?: number;
  dificuldade?: 'Fácil' | 'Média' | 'Difícil';
  banca?: string;
  modo?: 'padrao' | 'maratona' | 'treino_cirurgico' | 'simulado_oficial';
  errosRecentes?: Array<{ disciplina: string; assunto: string; totalErros: number }>;
}

export interface GerarQuestoesResponse {
  questoes: Questao[];
  fonte: 'gemini_ai' | 'banco_pedagogico_pmba' | 'contingencia_fallback';
  aviso?: string;
  error?: string;
}

export async function gerarQuestoesEdital(
  params: GerarQuestoesParams
): Promise<GerarQuestoesResponse> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 30000);

  try {
    const response = await fetch('/api/gerar-questoes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      signal: controller.signal,
      body: JSON.stringify({
        disciplina: params.disciplina,
        assunto: params.assunto || 'Todos os Assuntos do Edital',
        quantidade: params.quantidade || 3,
        dificuldade: params.dificuldade || 'Média',
        banca: params.banca || 'FCC / IBFC (Padrão PMBA)',
        modo: params.modo || 'padrao',
        errosRecentes: params.errosRecentes || [],
      }),
    });

    clearTimeout(timeoutId);

    if (response.ok) {
      const data: GerarQuestoesResponse = await response.json();
      if (data && Array.isArray(data.questoes) && data.questoes.length > 0) {
        return data;
      }
    } else {
      console.warn('Servidor respondeu com status não-OK:', response.status);
    }
  } catch (error: any) {
    clearTimeout(timeoutId);
    console.warn('Conexão ao servidor de IA oscilou ou excedeu tempo limite. Ativando gerador pedagógico PMBA seguro:', error?.message || error);
  }

  // Graceful client fallback: Guaranteed instantaneous questions without failure
  const questoesLocais = gerarQuestoesPedagogicas(
    params.disciplina,
    params.assunto || 'Edital PMBA',
    params.quantidade || 3,
    params.dificuldade || 'Média',
    params.banca || 'FCC / IBFC (Padrão PMBA)'
  );

  return {
    questoes: questoesLocais,
    fonte: 'banco_pedagogico_pmba',
    aviso: 'Questões carregadas pelo Banco Oficial PMBA (FCC/IBFC).',
  };
}

/**
 * High-Performance Surgical Weakness Training Generator
 * Focuses AI precisely on the subjects with the highest error rates in the user's history
 */
export async function gerarTreinoCirurgicoIA(
  errosRecentes: Array<{ disciplina: string; assunto: string; totalErros: number }>,
  quantidade: number = 5
): Promise<GerarQuestoesResponse> {
  const materiaPrincipal = errosRecentes[0]?.disciplina || 'Direito Constitucional';
  const assuntoPrincipal = errosRecentes[0]?.assunto || 'Tópicos Críticos do Edital PMBA';

  return gerarQuestoesEdital({
    disciplina: materiaPrincipal,
    assunto: assuntoPrincipal,
    quantidade,
    dificuldade: 'Difícil',
    banca: 'IBFC / FCC (Padrão PMBA)',
    modo: 'treino_cirurgico',
    errosRecentes,
  });
}

/**
 * High-Performance Full Official PMBA Mock Simulation Generator
 */
export async function gerarSimuladoOficialPMBA(
  quantidade: number = 10
): Promise<GerarQuestoesResponse> {
  return gerarQuestoesEdital({
    disciplina: 'Simulado Geral Oficial PMBA',
    assunto: 'Todas as Disciplinas do Edital',
    quantidade,
    dificuldade: 'Média',
    banca: 'IBFC / FCC (Padrão PMBA)',
    modo: 'simulado_oficial',
  });
}

/**
 * Background prefetching to prepare fresh questions seamlessly before the student runs out
 */
export async function prefetchProximasQuestoes(
  disciplina: string,
  assunto: string,
  questoesExistentes: Questao[] = []
): Promise<Questao[]> {
  try {
    const res = await gerarQuestoesEdital({
      disciplina,
      assunto: assunto && assunto !== 'Todos os Assuntos' ? assunto : 'Tópicos do Edital PMBA',
      quantidade: 3,
      dificuldade: 'Média',
      banca: 'FCC / IBFC (Padrão PMBA)',
      modo: 'padrao',
    });

    if (res && Array.isArray(res.questoes)) {
      const existingEnunciados = new Set(questoesExistentes.map(q => (q.enunciado || '').trim()));
      return res.questoes.filter(q => !existingEnunciados.has((q.enunciado || '').trim()));
    }
    return [];
  } catch {
    return [];
  }
}

