import React, { useState } from 'react';
import {
  CheckCircle2,
  XCircle,
  ChevronRight,
  ChevronLeft,
  MessageSquare,
  Sparkles,
  Award,
  RotateCcw,
  BookMarked,
  Filter,
  Check,
  HelpCircle,
  Flame
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Questao, AlternativaId, RespostaUsuario } from '../types';

interface QuestionCardProps {
  questoes: Questao[];
  todasQuestoes: Questao[];
  currentIndex: number;
  onNavigate: (index: number) => void;
  historicoRespostas: Record<string, RespostaUsuario>;
  onResponder: (questaoId: string, alternativa: AlternativaId) => void;
  onResetarQuestao: (questaoId: string) => void;
  disciplinaFiltro: string;
  onSelectDisciplina: (disc: string) => void;
  assuntoFiltro: string;
  onSelectAssunto: (assunto: string) => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  questoes,
  todasQuestoes,
  currentIndex,
  onNavigate,
  historicoRespostas,
  onResponder,
  onResetarQuestao,
  disciplinaFiltro,
  onSelectDisciplina,
  assuntoFiltro,
  onSelectAssunto,
}) => {
  const [selectedAlternativa, setSelectedAlternativa] = useState<AlternativaId | null>(null);
  const [showComentario, setShowComentario] = useState<boolean>(false);
  const [showFiltros, setShowFiltros] = useState<boolean>(false);

  // Current question
  const currentQuestao = questoes[currentIndex] || questoes[0];

  // Check if current question has been answered
  const statusResposta = currentQuestao ? historicoRespostas[currentQuestao.id] : undefined;
  const foiRespondida = !!statusResposta;
  const alternativaMarcada = statusResposta ? statusResposta.alternativaEscolhida : selectedAlternativa;

  // Disciplinas list for filter
  const disciplinasDisponiveis = [
    'Todas as Disciplinas',
    ...Array.from(new Set(todasQuestoes.map((q) => q.disciplina)))
  ];

  // Assuntos list for current disciplina
  const assuntosDisponiveis = [
    'Todos os Assuntos',
    ...Array.from(
      new Set(
        todasQuestoes
          .filter((q) => disciplinaFiltro === 'Todas as Disciplinas' || q.disciplina === disciplinaFiltro)
          .map((q) => q.assunto)
      )
    )
  ];

  const handleSelectAlternative = (id: AlternativaId) => {
    if (foiRespondida) return;
    setSelectedAlternativa(id);
  };

  const handleConfirmarResposta = () => {
    if (!selectedAlternativa || foiRespondida || !currentQuestao) return;
    onResponder(currentQuestao.id, selectedAlternativa);
  };

  const handleNext = () => {
    if (currentIndex < questoes.length - 1) {
      onNavigate(currentIndex + 1);
      setSelectedAlternativa(null);
      setShowComentario(false);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      onNavigate(currentIndex - 1);
      setSelectedAlternativa(null);
      setShowComentario(false);
    }
  };

  const handleTentarNovamente = () => {
    if (!currentQuestao) return;
    onResetarQuestao(currentQuestao.id);
    setSelectedAlternativa(null);
    setShowComentario(false);
  };

  if (!currentQuestao) {
    return (
      <div className="p-6 text-center text-slate-300">
        <p className="font-semibold">Nenhuma questão encontrada para este filtro.</p>
        <button
          onClick={() => {
            onSelectDisciplina('Todas as Disciplinas');
            onSelectAssunto('Todos os Assuntos');
          }}
          className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-white font-medium"
        >
          Limpar Filtros
        </button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto space-y-4 pb-20">
      {/* Filters Header (QConcursos Style) */}
      <section className="bg-slate-900/90 rounded-2xl border border-slate-800 p-3 shadow-md">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 overflow-hidden">
            <Filter className="w-4 h-4 text-amber-400 shrink-0" />
            <div className="truncate">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                Filtro Atual
              </span>
              <span className="text-xs font-semibold text-slate-200 truncate block">
                {disciplinaFiltro === 'Todas as Disciplinas' ? 'Todas as Matérias' : disciplinaFiltro}
              </span>
            </div>
          </div>

          <button
            id="toggle-filter-dropdown-btn"
            onClick={() => setShowFiltros(!showFiltros)}
            className="flex items-center gap-1 text-xs font-semibold px-2.5 py-1.5 rounded-lg bg-blue-950 text-blue-300 border border-blue-800 hover:bg-blue-900 transition-colors"
          >
            <span>Filtrar</span>
            <ChevronRight className={`w-3.5 h-3.5 transition-transform ${showFiltros ? 'rotate-90' : ''}`} />
          </button>
        </div>

        {/* Collapsible Filter Selectors */}
        <AnimatePresence>
          {showFiltros && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden pt-3 mt-2 border-t border-slate-800/80 space-y-2.5"
            >
              <div>
                <label className="text-[11px] text-slate-400 block mb-1 font-medium">
                  Disciplina do Edital PMBA
                </label>
                <select
                  id="select-disciplina"
                  value={disciplinaFiltro}
                  onChange={(e) => {
                    onSelectDisciplina(e.target.value);
                    onSelectAssunto('Todos os Assuntos');
                  }}
                  className="w-full text-xs bg-slate-950 text-slate-200 border border-slate-700 rounded-xl px-3 py-2 focus:outline-none focus:border-amber-400 cursor-pointer"
                >
                  {disciplinasDisponiveis.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-[11px] text-slate-400 block mb-1 font-medium">
                  Assunto Específico
                </label>
                <select
                  id="select-assunto"
                  value={assuntoFiltro}
                  onChange={(e) => onSelectAssunto(e.target.value)}
                  className="w-full text-xs bg-slate-950 text-slate-200 border border-slate-700 rounded-xl px-3 py-2 focus:outline-none focus:border-amber-400 cursor-pointer"
                >
                  {assuntosDisponiveis.map((a) => (
                    <option key={a} value={a}>
                      {a}
                    </option>
                  ))}
                </select>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Question Progression Bar & Quick Index Pills */}
      <section className="bg-slate-900/60 rounded-xl px-3.5 py-2.5 border border-slate-800/70 flex items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-1.5 font-bold text-slate-300">
          <BookMarked className="w-4 h-4 text-amber-400" />
          <span>Questão {currentIndex + 1} de {questoes.length}</span>
        </div>

        {/* Quick jump dots */}
        <div className="flex items-center gap-1.5">
          {questoes.map((q, idx) => {
            const resp = historicoRespostas[q.id];
            let dotColor = 'bg-slate-700 border-slate-600 text-slate-300';
            if (resp) {
              dotColor = resp.acertou
                ? 'bg-emerald-600 border-emerald-400 text-white font-bold'
                : 'bg-rose-600 border-rose-400 text-white font-bold';
            } else if (idx === currentIndex) {
              dotColor = 'bg-amber-500 border-amber-300 text-slate-950 font-extrabold ring-2 ring-amber-500/40';
            }

            return (
              <button
                key={q.id}
                onClick={() => {
                  onNavigate(idx);
                  setSelectedAlternativa(null);
                  setShowComentario(false);
                }}
                className={`w-6 h-6 rounded-full border flex items-center justify-center text-[10px] transition-transform active:scale-90 ${dotColor}`}
                title={`Ir para questão ${idx + 1}`}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>
      </section>

      {/* Main Question Card (Estilo QConcursos) */}
      <article
        id={`card-questao-${currentQuestao.id}`}
        className="bg-slate-900 rounded-2xl border border-slate-800 shadow-xl overflow-hidden"
      >
        {/* Card Header: Metadata Badges (QConcursos Style) */}
        <div className="bg-[#0b1b36] px-4 py-3 border-b border-slate-800/90">
          <div className="flex flex-wrap items-center gap-1.5 mb-1.5">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-blue-900/60 text-blue-200 border border-blue-700/50 text-[10px] font-bold">
              {currentQuestao.banca}
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-800 text-slate-200 border border-slate-700 text-[10px] font-semibold">
              {currentQuestao.orgao} • {currentQuestao.ano}
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-amber-950/70 text-amber-300 border border-amber-800/40 text-[10px] font-semibold">
              {currentQuestao.cargo}
            </span>
          </div>

          <div className="text-[11px] text-slate-300 leading-tight">
            <span className="font-bold text-amber-400">{currentQuestao.disciplina}</span>
            <span className="text-slate-500 mx-1.5">•</span>
            <span className="text-slate-400">{currentQuestao.assunto}</span>
          </div>
        </div>

        {/* Question Statement (Enunciado) */}
        <div className="p-4 sm:p-5">
          <p className="text-sm sm:text-base text-slate-100 font-normal leading-relaxed text-justify">
            {currentQuestao.enunciado}
          </p>
        </div>

        {/* Alternatives (5 Opções A, B, C, D, E com Custom Radios) */}
        <div className="px-4 pb-4 space-y-2.5">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
            Selecione uma alternativa:
          </span>

          {currentQuestao.alternativas.map((alt) => {
            const isSelected = alternativaMarcada === alt.id;
            const isCorrectAnswer = currentQuestao.respostaCorreta === alt.id;

            // Visual state styling
            let containerClasses = 'border-slate-800 bg-slate-950/60 hover:bg-slate-800/40 text-slate-200';
            let badgeClasses = 'bg-slate-800 text-slate-300 border-slate-700';

            if (!foiRespondida && isSelected) {
              containerClasses = 'border-blue-500 bg-blue-950/50 text-blue-100 ring-2 ring-blue-500/20';
              badgeClasses = 'bg-blue-600 text-white border-blue-400';
            } else if (foiRespondida) {
              if (isCorrectAnswer) {
                // Correct alternative highlighted in green always
                containerClasses = 'border-emerald-500 bg-emerald-950/60 text-emerald-100 ring-2 ring-emerald-500/30';
                badgeClasses = 'bg-emerald-500 text-slate-950 font-black border-emerald-400';
              } else if (isSelected && !isCorrectAnswer) {
                // Incorrect chosen option marked in red
                containerClasses = 'border-rose-500 bg-rose-950/60 text-rose-100 ring-2 ring-rose-500/30';
                badgeClasses = 'bg-rose-500 text-white font-black border-rose-400';
              } else {
                containerClasses = 'opacity-50 border-slate-800 bg-slate-950/30 text-slate-400';
              }
            }

            return (
              <button
                key={alt.id}
                id={`btn-alt-${alt.id}`}
                type="button"
                disabled={foiRespondida}
                onClick={() => handleSelectAlternative(alt.id)}
                className={`w-full text-left p-3.5 rounded-xl border transition-all duration-150 flex items-start gap-3 min-h-[52px] select-none cursor-pointer active:scale-[0.99] ${containerClasses}`}
              >
                {/* Alternative Letter Circle */}
                <div
                  className={`w-8 h-8 rounded-full shrink-0 flex items-center justify-center font-bold text-xs border transition-colors ${badgeClasses}`}
                >
                  {foiRespondida && isCorrectAnswer ? (
                    <Check className="w-4 h-4 text-emerald-950 stroke-[3]" />
                  ) : foiRespondida && isSelected && !isCorrectAnswer ? (
                    <XCircle className="w-4 h-4 text-white" />
                  ) : (
                    alt.id
                  )}
                </div>

                {/* Alternative Text */}
                <span className="text-xs sm:text-sm leading-snug pt-1 flex-1 font-normal">
                  {alt.texto}
                </span>
              </button>
            );
          })}
        </div>

        {/* Immediate Result Feedback Banner */}
        <AnimatePresence>
          {foiRespondida && statusResposta && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mx-4 mb-4 p-3.5 rounded-xl border flex items-center justify-between gap-3 ${
                statusResposta.acertou
                  ? 'bg-emerald-950/80 border-emerald-500 text-emerald-100'
                  : 'bg-rose-950/80 border-rose-500 text-rose-100'
              }`}
            >
              <div className="flex items-center gap-2.5">
                {statusResposta.acertou ? (
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center text-emerald-400 shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                ) : (
                  <div className="w-8 h-8 rounded-full bg-rose-500/20 border border-rose-400 flex items-center justify-center text-rose-400 shrink-0">
                    <XCircle className="w-5 h-5" />
                  </div>
                )}
                <div>
                  <h4 className="text-xs font-bold leading-tight">
                    {statusResposta.acertou ? 'Parabéns! Resposta Correta!' : 'Resposta Incorreta!'}
                  </h4>
                  <p className="text-[11px] opacity-90">
                    {statusResposta.acertou
                      ? 'Excelente fixação do conteúdo do edital.'
                      : `Gabarito oficial da questão: Letra ${currentQuestao.respostaCorreta}`}
                  </p>
                </div>
              </div>

              <button
                onClick={handleTentarNovamente}
                className="text-[11px] font-semibold underline underline-offset-2 hover:opacity-80 shrink-0 cursor-pointer"
              >
                Refazer
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Action Buttons (Responder, Gabarito Comentado) */}
        <div className="bg-[#08152a] p-4 border-t border-slate-800 space-y-3">
          <div className="flex items-center gap-2.5">
            {!foiRespondida ? (
              <button
                id="btn-responder-questao"
                type="button"
                disabled={!selectedAlternativa}
                onClick={handleConfirmarResposta}
                className={`flex-1 min-h-[48px] rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg active:scale-95 ${
                  selectedAlternativa
                    ? 'bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 hover:from-blue-500 hover:to-indigo-600 text-white border border-blue-400/50 shadow-blue-900/30'
                    : 'bg-slate-800 text-slate-500 border border-slate-700/60 cursor-not-allowed'
                }`}
              >
                <Check className="w-4 h-4" />
                <span>Responder Questão</span>
              </button>
            ) : (
              <button
                id="btn-proxima-questao"
                type="button"
                onClick={handleNext}
                disabled={currentIndex === questoes.length - 1}
                className={`flex-1 min-h-[48px] rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-95 ${
                  currentIndex < questoes.length - 1
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white border border-emerald-400/40 shadow-emerald-900/30'
                    : 'bg-slate-800 text-slate-400 border border-slate-700 cursor-default'
                }`}
              >
                <span>{currentIndex < questoes.length - 1 ? 'Próxima Questão' : 'Última Questão'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}

            {/* Gabarito Comentado Button */}
            <button
              id="btn-gabarito-comentado"
              type="button"
              onClick={() => setShowComentario(!showComentario)}
              className={`min-h-[48px] px-3.5 rounded-xl font-semibold text-xs flex items-center justify-center gap-1.5 border transition-all cursor-pointer active:scale-95 ${
                showComentario
                  ? 'bg-amber-400 text-slate-950 border-amber-300 font-bold shadow-md shadow-amber-400/20'
                  : 'bg-slate-800/90 text-amber-300 hover:bg-slate-700 border-amber-500/40'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span className="hidden sm:inline">Gabarito</span>
              <span>Comentado</span>
            </button>
          </div>

          {/* Navigation Bar between questions */}
          <div className="flex items-center justify-between pt-1">
            <button
              id="btn-questao-anterior"
              type="button"
              disabled={currentIndex === 0}
              onClick={handlePrev}
              className={`flex items-center gap-1 text-xs font-semibold py-2 px-3 rounded-lg border min-h-[44px] cursor-pointer transition-colors ${
                currentIndex === 0
                  ? 'border-slate-800/60 text-slate-600 cursor-not-allowed'
                  : 'border-slate-700 text-slate-300 hover:bg-slate-800'
              }`}
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Anterior</span>
            </button>

            <span className="text-[11px] font-semibold text-slate-400">
              {currentIndex + 1} de {questoes.length}
            </span>

            <button
              id="btn-proxima-pequeno"
              type="button"
              disabled={currentIndex === questoes.length - 1}
              onClick={handleNext}
              className={`flex items-center gap-1 text-xs font-semibold py-2 px-3 rounded-lg border min-h-[44px] cursor-pointer transition-colors ${
                currentIndex === questoes.length - 1
                  ? 'border-slate-800/60 text-slate-600 cursor-not-allowed'
                  : 'border-slate-700 text-slate-300 hover:bg-slate-800'
              }`}
            >
              <span>Próxima</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Panel "Gabarito Comentado" (Professor Explanation) */}
        <AnimatePresence>
          {showComentario && (
            <motion.div
              id="painel-gabarito-comentado"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden bg-[#061122] border-t-2 border-amber-500/50"
            >
              <div className="p-4 sm:p-5 space-y-4">
                {/* Professor Header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-600 to-amber-400 border border-amber-300 flex items-center justify-center text-slate-950 font-black text-sm">
                      PM
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-100 flex items-center gap-1.5">
                        {currentQuestao.comentario.professor}
                        <Award className="w-3.5 h-3.5 text-amber-400" />
                      </h4>
                      <p className="text-[10px] text-slate-400 leading-none mt-0.5">
                        {currentQuestao.comentario.cargo}
                      </p>
                    </div>
                  </div>

                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-700/60 font-bold">
                    Gabarito: {currentQuestao.respostaCorreta}
                  </span>
                </div>

                {/* General Analysis */}
                <div className="space-y-1.5">
                  <h5 className="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5 text-blue-400" />
                    Análise do Especialista
                  </h5>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-900/60 p-3 rounded-xl border border-slate-800/80">
                    {currentQuestao.comentario.analiseGeral}
                  </p>
                </div>

                {/* Option by Option Breakdown */}
                <div className="space-y-2">
                  <h5 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                    Justificativa das Alternativas:
                  </h5>
                  <div className="space-y-1.5">
                    {currentQuestao.alternativas.map((alt) => {
                      const isCorrect = currentQuestao.respostaCorreta === alt.id;
                      return (
                        <div
                          key={alt.id}
                          className={`p-2.5 rounded-xl border text-xs leading-relaxed ${
                            isCorrect
                              ? 'bg-emerald-950/40 border-emerald-500/50 text-emerald-200'
                              : 'bg-slate-900/40 border-slate-800/70 text-slate-300'
                          }`}
                        >
                          <span
                            className={`font-black mr-1.5 px-1.5 py-0.2 rounded text-[11px] ${
                              isCorrect
                                ? 'bg-emerald-600 text-white'
                                : 'bg-slate-800 text-slate-400'
                            }`}
                          >
                            Opção {alt.id}
                          </span>
                          {currentQuestao.comentario.justificativaAlternativas[alt.id]}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* "Bizu PMBA" / Dica de Ouro */}
                <div className="p-3.5 rounded-xl bg-gradient-to-r from-amber-950/60 via-amber-900/30 to-red-950/40 border border-amber-500/60 text-amber-200 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-extrabold text-amber-300 uppercase tracking-wider">
                    <Flame className="w-4 h-4 text-amber-400 fill-amber-400" />
                    <span>Dica de Prova • Bizu PMBA</span>
                  </div>
                  <p className="text-xs leading-relaxed font-medium">
                    {currentQuestao.comentario.bizuPMBA}
                  </p>
                </div>

                {/* Legal Citations */}
                {currentQuestao.comentario.artigosCitados && (
                  <div className="text-[11px] text-slate-400 pt-1 flex flex-wrap items-center gap-1.5">
                    <span className="font-semibold text-slate-300">Fundamentação Legal:</span>
                    {currentQuestao.comentario.artigosCitados.map((art, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700 text-slate-300 text-[10px]"
                      >
                        {art}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </article>
    </div>
  );
};
