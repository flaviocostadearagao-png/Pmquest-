import { Questao } from '../types';
import { gerarQuestoesPedagogicas } from '../data/questoesPedagogicasPMBA';

export interface GerarQuestoesParams {
  disciplina: string;
  assunto: string;
  quantidade?: number;
  dificuldade?: 'Fácil' | 'Média' | 'Difícil';
  banca?: string;
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
  const timeoutId = setTimeout(() => controller.abort(), 12000);

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
