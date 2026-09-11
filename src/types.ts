export type AlternativaId = 'A' | 'B' | 'C' | 'D' | 'E';

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
}
