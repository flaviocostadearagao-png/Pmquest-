import { Questao } from '../types';

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
  error?: string;
}

export async function gerarQuestoesEdital(
  params: GerarQuestoesParams
): Promise<GerarQuestoesResponse> {
  try {
    const response = await fetch('/api/gerar-questoes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        disciplina: params.disciplina,
        assunto: params.assunto || 'Todos os Assuntos do Edital',
        quantidade: params.quantidade || 3,
        dificuldade: params.dificuldade || 'Média',
        banca: params.banca || 'FCC / IBFC (Padrão PMBA)',
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.warn('Falha na requisição ao servidor:', response.status, errorText);
      throw new Error(`Erro no servidor: ${response.status}`);
    }

    const data: GerarQuestoesResponse = await response.json();
    return data;
  } catch (error: any) {
    console.error('Erro ao chamar API de geração de questões:', error);
    throw error;
  }
}
