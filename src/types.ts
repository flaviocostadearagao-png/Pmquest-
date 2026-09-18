export type AlternativaId = 'A' | 'B' | 'C' | 'D' | 'E';
export type TemaApp = 'dark' | 'light';

export interface Alternativa {
  id: AlternativaId;
  texto: string;
}

export interface ComentarioProfessor {
  professor: string;
  cargo: string;
  analiseGeral: string;
  justificativaAlternativas: Record<AlternativaId, string>;
  bizuPMBA: string;
  artigosCitados?: string[];
}

export interface Questao {
  id: string;
  numero: number;
  banca: string;
  orgao: string;
  cargo: string;
  ano: number;
  disciplina: string;
  assunto: string;
  enunciado: string;
  alternativas: Alternativa[];
  respostaCorreta: AlternativaId;
  comentario: ComentarioProfessor;
  dificuldade: 'Fácil' | 'Média' | 'Difícil';
}

export interface TopicoTeoria {
  id: string;
  titulo: string;
  tempoLeituraMin: number;
  resumoIntro: string;
  pontosImportantes: string[];
  dicaDeProva: string;
  legislacaoOuReferencia: string;
}

export interface MateriaEdital {
  id: string;
  nome: string;
  icone: string;
  totalQuestoesEdital: string;
  relevancia: 'Muito Alta' | 'Alta' | 'Média';
  descricao: string;
  topicos: TopicoTeoria[];
}

export interface RespostaUsuario {
  alternativaEscolhida: AlternativaId;
  acertou: boolean;
  data: string;
  tempoGastoSegundos?: number;
}

export type ModoEstudo = 'padrao' | 'maratona' | 'treino_cirurgico' | 'simulado_oficial' | 'caderno_erros' | 'misto_aleatorio';

export type FiltroVisualizacao = 'todas' | 'nao_respondidas' | 'somente_erros' | 'somente_acertos';

export interface MetaEstudo {
  metaMensalQuestoes: number;
  questoesResolvidasMes: number;
  metaDiariaQuestoes: number;
  streakDias: number;
  ultimoDiaResolucao?: string;
  tempoMedioSegundos?: number;
}

export interface ConfigAltaPerformance {
  autoPrefetch: boolean;
  atalhosTeclado: boolean;
  cronometroRitmoAtivo: boolean;
  tempoMaxPorQuestaoSegundos: number; // default 180 (3 min)
  modoMaratona: boolean;
}

// --- Novos Tipos (Redação e Patente) ---

export interface RedacaoTema {
  tipo: 'redacao_tema';
  tema: string;
  textos_motivadores: string[];
  diretrizes: string;
}

export interface RedacaoCorrecao {
  tipo: 'redacao_correcao';
  nota_final: number;
  criterios: {
    ortografia_gramatica: string;
    estrutura_dissertativa: string;
    relevancia_ao_tema: string;
  };
  pontos_fortes: string[];
  pontos_de_melhoria: string[];
  exemplo_melhorado: string;
}

export interface PatenteFeedback {
  tipo: 'patente_feedback';
  nova_patente: string;
  mensagem_comandante: string;
  missao_diaria: string;
}

