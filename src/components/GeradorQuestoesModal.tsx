import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  X,
  BookOpen,
  Sliders,
  CheckCircle2,
  AlertCircle,
  Loader2,
  BrainCircuit,
  Award,
  ChevronRight,
  Flame
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Questao } from '../types';
import { gerarQuestoesEdital } from '../lib/geminiQuestionService';
import { useTheme } from '../context/ThemeContext';

interface GeradorQuestoesModalProps {
  isOpen: boolean;
  onClose: () => void;
  disciplinaInicial?: string;
  assuntoInicial?: string;
  onQuestoesGeradas: (novasQuestoes: Questao[], disciplina: string) => void;
}

const DISCIPLINAS_EDITAL = [
  'Direito Constitucional',
  'Promoção da Igualdade Racial e de Gênero',
  'História da Bahia',
  'Direitos Humanos',
  'Direito Administrativo',
  'Língua Portuguesa',
  'Geografia da Bahia',
  'Noções de Direito Penal',
];

const SUGESTOES_ASSUNTOS: Record<string, string[]> = {
  'Direito Constitucional': [
    'Art. 5º da CF/88 (Inviolabilidade de Domicílio e Remédios)',
    'Art. 144 da CF/88 (Segurança Pública e Atribuições da PM)',
    'Direitos e Garantias Fundamentais e Prisão Legal',
    'Nacionalidade e Direitos Políticos',
  ],
  'Promoção da Igualdade Racial e de Gênero': [
    'Estatuto da Igualdade Racial (Lei Federal 12.288/2010)',
    'Lei Maria da Penha (Lei 11.340/2006) - Medidas Protetivas',
    'Crimes de Racismo e Preconceito de Cor (Lei 7.716/1989)',
    'Estatuto da Igualdade Racial do Estado da Bahia (Lei 13.182/2014)',
  ],
  'História da Bahia': [
    'Independência da Bahia (2 de Julho de 1823) e Batalha de Pirajá',
    'Revolta dos Alfaiates / Conjuração Baiana (1798)',
    'Guerra de Canudos (1896-1897) e Antônio Conselheiro',
    'Revolta dos Malês (1835) e Sabinada (1837)',
  ],
  'Direitos Humanos': [
    'Declaração Universal dos Direitos Humanos (DUDH de 1948)',
    'Pacto de San José da Costa Rica (CADH)',
    'Convenção contra a Tortura e Tratamentos Degradantes',
    'Garantias Processuais e Dignidade da Pessoa Humana',
  ],
  'Direito Administrativo': [
    'Princípios da Administração Pública (LIMPE - Art. 37 da CF/88)',
    'Poderes da Administração e Poder de Polícia Militar',
    'Atos Administrativos (Requisitos, Atributos e Extinção)',
    'Responsabilidade Civil do Estado (Art. 37, § 6º da CF/88)',
  ],
  'Língua Portuguesa': [
    'Interpretação e Compreensão de Texto / Tipologia Textual',
    'Crase e Emprego dos Pronomes Relativos',
    'Concordância Verbal e Nominal',
    'Regência Verbal, Regência Nominal e Pontuação',
  ],
  'Geografia da Bahia': [
    'Aspectos Físicos e Climatologia da Bahia (Semiárido e Litoral)',
    'Bacia Hidrográfica do Rio São Francisco e Recursos Hídricos',
    'Urbanização, Região Metropolitana de Salvador e Interiorização',
    'Biomas Baianos (Caatinga, Cerrado e Mata Atlântica)',
  ],
  'Noções de Direito Penal': [
    'Crimes contra a Pessoa (Homicídio e Lesão Corporal)',
    'Crimes contra o Patrimônio (Furto, Roubo e Extorsão)',
    'Causas Excludentes de Ilicitude (Legítima Defesa e Estrito Cumprimento)',
    'Estatuto do Desarmamento (Lei 10.826/2003)',
  ],
};

export const GeradorQuestoesModal: React.FC<GeradorQuestoesModalProps> = ({
  isOpen,
  onClose,
  disciplinaInicial,
  assuntoInicial,
  onQuestoesGeradas,
}) => {
  const { isDark } = useTheme();

  const [disciplina, setDisciplina] = useState<string>(
    disciplinaInicial && DISCIPLINAS_EDITAL.includes(disciplinaInicial)
      ? disciplinaInicial
      : 'Direito Constitucional'
  );
  const [assunto, setAssunto] = useState<string>(
    assuntoInicial && assuntoInicial !== 'Todos os Assuntos'
      ? assuntoInicial
      : 'Geral (Todos os Assuntos)'
  );
  const [quantidade, setQuantidade] = useState<number>(3);
  const [dificuldade, setDificuldade] = useState<'Fácil' | 'Média' | 'Difícil'>('Média');
  const [banca, setBanca] = useState<string>('FCC / IBFC (Padrão PMBA)');

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [questoesGeradasPreview, setQuestoesGeradasPreview] = useState<Questao[] | null>(null);
  const [fonteGeracao, setFonteGeracao] = useState<string>('gemini_ai');

  useEffect(() => {
    if (isOpen) {
      if (disciplinaInicial && DISCIPLINAS_EDITAL.includes(disciplinaInicial)) {
        setDisciplina(disciplinaInicial);
        if (assuntoInicial && assuntoInicial !== 'Todos os Assuntos') {
          setAssunto(assuntoInicial);
        } else {
          setAssunto('Geral (Todos os Assuntos)');
        }
      }
      setQuestoesGeradasPreview(null);
      setErrorMessage(null);
    }
  }, [isOpen, disciplinaInicial, assuntoInicial]);

  // When disciplina changes, reset suggested assunto
  const handleDisciplinaChange = (novaDisciplina: string) => {
    setDisciplina(novaDisciplina);
    setAssunto('Geral (Todos os Assuntos)');
    setQuestoesGeradasPreview(null);
    setErrorMessage(null);
  };

  const handleGerar = async () => {
    setIsLoading(true);
    setErrorMessage(null);
    setQuestoesGeradasPreview(null);

    try {
      const response = await gerarQuestoesEdital({
        disciplina,
        assunto: assunto.trim() || 'Edital PMBA',
        quantidade,
        dificuldade,
        banca,
      });

      if (response && response.questoes && response.questoes.length > 0) {
        setQuestoesGeradasPreview(response.questoes);
        setFonteGeracao(response.fonte || 'banco_pedagogico_pmba');
      } else {
        setErrorMessage('Não foi possível gerar questões no momento. Tente novamente.');
      }
    } catch (err: any) {
      console.error('Erro na geração:', err);
      setErrorMessage('Ocorreu um erro ao conectar ao servidor de geração. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleAdicionarAoSimulado = () => {
    if (!questoesGeradasPreview || questoesGeradasPreview.length === 0) return;
    onQuestoesGeradas(questoesGeradasPreview, disciplina);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm">
      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.92, opacity: 0 }}
        className={`w-full max-w-md rounded-3xl overflow-hidden shadow-2xl border flex flex-col max-h-[92vh] transition-colors ${
          isDark
            ? 'bg-slate-900 border-slate-800 text-slate-100'
            : 'bg-white border-slate-200 text-slate-900'
        }`}
      >
        {/* Modal Header */}
        <div
          className={`p-4 border-b flex items-center justify-between ${
            isDark ? 'border-slate-800 bg-[#0a192f]' : 'border-slate-200 bg-blue-50/70'
          }`}
        >
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-slate-950 shadow-md shadow-amber-500/30 shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="text-sm font-bold leading-tight">Gerador de Questões com IA</h3>
                <span className="text-[10px] uppercase font-extrabold bg-amber-500 text-slate-950 px-1.5 py-0.5 rounded-full">
                  Edital PMBA
                </span>
              </div>
              <p className={`text-[11px] ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Expanda seu banco com questões inéditas e fundamentadas
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className={`w-7 h-7 rounded-full flex items-center justify-center text-xs cursor-pointer ${
              isDark ? 'bg-slate-800 text-slate-400 hover:text-slate-200' : 'bg-slate-100 text-slate-500 hover:text-slate-700'
            }`}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 overflow-y-auto space-y-4 flex-1">
          {questoesGeradasPreview ? (
            /* Result Preview Screen */
            <div className="space-y-4">
              <div
                className={`p-3.5 rounded-2xl border text-center space-y-1 ${
                  isDark
                    ? 'bg-emerald-950/40 border-emerald-800/60 text-emerald-300'
                    : 'bg-emerald-50 border-emerald-200 text-emerald-800'
                }`}
              >
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 mx-auto flex items-center justify-center mb-1 text-emerald-500">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div className="flex items-center justify-center gap-2 mb-1">
                  <span className={`inline-flex items-center gap-1 text-[10px] uppercase font-bold px-2 py-0.5 rounded-full ${
                    fonteGeracao === 'gemini_ai'
                      ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
                      : 'bg-blue-500/20 text-blue-400 border border-blue-500/40'
                  }`}>
                    {fonteGeracao === 'gemini_ai' ? (
                      <>
                        <Sparkles className="w-3 h-3" />
                        <span>IA Gemini Especialista</span>
                      </>
                    ) : (
                      <>
                        <Award className="w-3 h-3" />
                        <span>Banco Oficial PMBA (FCC/IBFC)</span>
                      </>
                    )}
                  </span>
                </div>
                <h4 className="text-sm font-bold">
                  {questoesGeradasPreview.length} Questões Inéditas Geradas!
                </h4>
                <p className="text-xs opacity-90">
                  Todas com gabarito comentado, bizu da PMBA e justificativas completas letra por letra.
                </p>
              </div>

              {/* Mini previews */}
              <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                {questoesGeradasPreview.map((q, idx) => (
                  <div
                    key={q.id}
                    className={`p-3 rounded-xl border text-xs space-y-1.5 ${
                      isDark ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-amber-500 text-[11px]">
                        Questão {idx + 1} • {q.disciplina}
                      </span>
                      <span className={`text-[10px] px-1.5 py-0.5 rounded ${
                        isDark ? 'bg-slate-800 text-slate-300' : 'bg-slate-200 text-slate-700'
                      }`}>
                        {q.dificuldade}
                      </span>
                    </div>
                    <p className={`line-clamp-2 leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      {q.enunciado}
                    </p>
                    <div className="flex items-center gap-2 pt-1 border-t border-slate-800/40 text-[11px] text-slate-400">
                      <span>Gabarito: <strong>{q.respostaCorreta}</strong></span>
                      <span>•</span>
                      <span className="truncate">Comentário: {q.comentario?.professor}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2 space-y-2">
                <button
                  id="btn-adicionar-questoes-ao-simulado"
                  onClick={handleAdicionarAoSimulado}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Adicionar ao Simulado e Resolver Agora</span>
                </button>

                <button
                  onClick={() => setQuestoesGeradasPreview(null)}
                  className={`w-full py-2 px-3 rounded-xl text-xs font-semibold border cursor-pointer ${
                    isDark
                      ? 'border-slate-800 hover:bg-slate-800 text-slate-400'
                      : 'border-slate-200 hover:bg-slate-100 text-slate-600'
                  }`}
                >
                  Configurar e Gerar Outras Questões
                </button>
              </div>
            </div>
          ) : (
            /* Form Configuration */
            <div className="space-y-3.5">
              {/* Disciplina Selector */}
              <div>
                <label className={`text-[11px] font-bold uppercase tracking-wider block mb-1.5 ${
                  isDark ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  1. Disciplina do Edital
                </label>
                <select
                  id="select-gerador-disciplina"
                  value={disciplina}
                  onChange={(e) => handleDisciplinaChange(e.target.value)}
                  disabled={true}
                  className={`w-full text-xs rounded-xl px-3 py-2.5 focus:outline-none focus:border-amber-500 font-medium opacity-80 cursor-not-allowed ${
                    isDark
                      ? 'bg-slate-950 text-slate-200 border border-slate-700'
                      : 'bg-slate-50 text-slate-900 border border-slate-300'
                  }`}
                >
                  {DISCIPLINAS_EDITAL.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </div>

              {/* Quick Topic Chips */}
              <div>
                <label className={`text-[11px] font-bold uppercase tracking-wider block mb-1.5 ${
                  isDark ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  2. Tópicos Frequentes no Concurso PMBA
                </label>
                <div className="flex flex-wrap gap-1.5 mb-2">
                  <button
                    type="button"
                    onClick={() => setAssunto('Geral (Todos os Assuntos)')}
                    className={`text-[11px] text-left px-2.5 py-1.5 rounded-lg border transition-all cursor-pointer ${
                      assunto === 'Geral (Todos os Assuntos)'
                        ? 'bg-amber-500 text-slate-950 font-bold border-amber-400 shadow-sm'
                        : isDark
                        ? 'bg-slate-950/80 text-slate-300 border-slate-800 hover:border-slate-700'
                        : 'bg-slate-100 text-slate-700 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    Geral (Todos os Assuntos)
                  </button>
                  {(SUGESTOES_ASSUNTOS[disciplina] || []).map((sugestao) => {
                    const isSelected = assunto === sugestao;
                    return (
                      <button
                        key={sugestao}
                        type="button"
                        onClick={() => setAssunto(sugestao)}
                        className={`text-[11px] text-left px-2.5 py-1.5 rounded-lg border transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-amber-500 text-slate-950 font-bold border-amber-400 shadow-sm'
                            : isDark
                            ? 'bg-slate-950/80 text-slate-300 border-slate-800 hover:border-slate-700'
                            : 'bg-slate-100 text-slate-700 border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        {sugestao}
                      </button>
                    );
                  })}
                </div>

                {/* Custom Topic Input */}
                <input
                  type="text"
                  value={assunto}
                  onChange={(e) => setAssunto(e.target.value)}
                  placeholder="Ou digite um assunto específico (ex: Art. 5º, XI da CF/88)"
                  className={`w-full text-xs rounded-xl px-3 py-2 focus:outline-none focus:border-amber-500 ${
                    isDark
                      ? 'bg-slate-950 text-slate-200 border border-slate-700'
                      : 'bg-slate-50 text-slate-900 border border-slate-300'
                  }`}
                />
              </div>

              {/* Quantidade e Dificuldade Row */}
              <div className="grid grid-cols-2 gap-2.5">
                <div>
                  <label className={`text-[11px] font-bold uppercase tracking-wider block mb-1.5 ${
                    isDark ? 'text-slate-300' : 'text-slate-700'
                  }`}>
                    Quantidade
                  </label>
                  <div className="flex gap-1">
                    {[2, 3, 5].map((qtd) => (
                      <button
                        key={qtd}
                        type="button"
                        onClick={() => setQuantidade(qtd)}
                        className={`flex-1 py-1.5 text-xs font-bold rounded-lg border cursor-pointer transition-colors ${
                          quantidade === qtd
                            ? 'bg-blue-600 text-white border-blue-500'
                            : isDark
                            ? 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                            : 'bg-slate-100 border-slate-300 text-slate-700 hover:bg-slate-200'
                        }`}
                      >
                        {qtd}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className={`text-[11px] font-bold uppercase tracking-wider block mb-1.5 ${
                    isDark ? 'text-slate-300' : 'text-slate-700'
                  }`}>
                    Dificuldade
                  </label>
                  <select
                    value={dificuldade}
                    onChange={(e) => setDificuldade(e.target.value as any)}
                    className={`w-full text-xs rounded-xl px-2.5 py-1.5 focus:outline-none focus:border-amber-500 cursor-pointer font-medium ${
                      isDark
                        ? 'bg-slate-950 text-slate-200 border border-slate-700'
                        : 'bg-slate-50 text-slate-900 border border-slate-300'
                    }`}
                  >
                    <option value="Fácil">Fácil</option>
                    <option value="Média">Média (Padrão PMBA)</option>
                    <option value="Difícil">Difícil</option>
                  </select>
                </div>
              </div>

              {/* Estilo da Banca */}
              <div>
                <label className={`text-[11px] font-bold uppercase tracking-wider block mb-1.5 ${
                  isDark ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  Estilo da Banca
                </label>
                <select
                  value={banca}
                  onChange={(e) => setBanca(e.target.value)}
                  className={`w-full text-xs rounded-xl px-3 py-2 focus:outline-none focus:border-amber-500 cursor-pointer font-medium ${
                    isDark
                      ? 'bg-slate-950 text-slate-200 border border-slate-700'
                      : 'bg-slate-50 text-slate-900 border border-slate-300'
                  }`}
                >
                  <option value="FCC / IBFC (Padrão PMBA)">FCC / IBFC (Padrão Histórico PMBA)</option>
                  <option value="FCC (Casos Práticos e Jurisprudência)">FCC (Casos Práticos e Jurisprudência)</option>
                  <option value="IBFC (Letra da Lei e Doutrina)">IBFC (Letra da Lei e Doutrina)</option>
                  <option value="CESPE / Cebraspe">CESPE / Cebraspe (Múltipla Escolha)</option>
                  <option value="VUNESP">VUNESP</option>
                  <option value="AOCP">Instituto AOCP</option>
                  <option value="FGV">Fundação Getulio Vargas (FGV)</option>
                  <option value="UNEB">UNEB (Universidade do Estado da Bahia)</option>
                  <option value="Simulado Tático PMBA">Simulado Tático PMBA (Situações de Ronda)</option>
                </select>
              </div>

              {/* Error Display */}
              {errorMessage && (
                <div className="p-3 rounded-xl bg-rose-950/50 border border-rose-800 text-rose-300 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Action Button */}
              <div className="pt-2">
                <button
                  id="btn-executar-geracao-ia"
                  type="button"
                  onClick={handleGerar}
                  disabled={isLoading}
                  className={`w-full py-3 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer ${
                    isLoading
                      ? 'bg-amber-600/50 text-slate-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 shadow-amber-500/25'
                  }`}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
                      <span>Gerando {quantidade} questões com IA...</span>
                    </>
                  ) : (
                    <>
                      <BrainCircuit className="w-4 h-4" />
                      <span>Gerar {quantidade} Questões para {disciplina}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};
