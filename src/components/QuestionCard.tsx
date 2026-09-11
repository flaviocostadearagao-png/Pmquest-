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
  Flame,
  Eye,
  EyeOff
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Questao, AlternativaId, RespostaUsuario } from '../types';
import { useTheme } from '../context/ThemeContext';

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
  ocultarRespondidas?: boolean;
  onToggleOcultarRespondidas?: () => void;
  onAbrirGerador?: () => void;
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
  ocultarRespondidas = false,
  onToggleOcultarRespondidas,
  onAbrirGerador,
}) => {
  const { isDark } = useTheme();
  const [selectedAlternativa, setSelectedAlternativa] = useState<AlternativaId | null>(null);
  const [showComentario, setShowComentario] = useState<boolean>(false);
  const [showFiltros, setShowFiltros] = useState<boolean>(false);

  // Current question
  const currentQuestao = questoes[currentIndex] || questoes[0];

  // Check if current question has been answered
  const statusResposta = currentQuestao ? historicoRespostas[currentQuestao.id] : undefined;
  const foiRespondida = !!statusResposta;
  const alternativaMarcada = statusResposta ? statusResposta.alternativaEscolhida : selectedAlternativa;

  // Questions in current filter (independent of hide answered toggle)
  const todasNoFiltro = todasQuestoes.filter((q) => {
    const matchDisc = disciplinaFiltro === 'Todas as Disciplinas' || q.disciplina.toLowerCase() === disciplinaFiltro.toLowerCase();
    const matchAss = assuntoFiltro === 'Todos os Assuntos' || q.assunto.toLowerCase() === assuntoFiltro.toLowerCase();
    return matchDisc && matchAss;
  });
  const respondidasNoFiltro = todasNoFiltro.filter((q) => !!historicoRespostas[q.id]).length;
  const todasForamRespondidas = todasNoFiltro.length > 0 && respondidasNoFiltro === todasNoFiltro.length;

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
    if (ocultarRespondidas && todasForamRespondidas) {
      return (
        <div className="w-full max-w-md mx-auto space-y-4 pb-20">
          <div className={`p-6 text-center rounded-3xl border shadow-xl ${
            isDark ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
          }`}>
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center mb-3">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <span className="text-[11px] font-bold text-emerald-500 uppercase tracking-wider block mb-1">
              Filtro 100% Concluído
            </span>
            <h3 className="text-lg font-extrabold mb-1.5">
              Todas as {todasNoFiltro.length} questões foram respondidas!
            </h3>
            <p className={`text-xs mb-5 max-w-xs mx-auto leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Você já resolveu todas as questões de <strong>{disciplinaFiltro}</strong>. Desative a opção abaixo para rever seus acertos e erros, ou gere novas questões inéditas com IA!
            </p>
            <div className="flex flex-col gap-2.5 max-w-xs mx-auto">
              {onToggleOcultarRespondidas && (
                <button
                  id="btn-desativar-ocultar-vazio"
                  onClick={onToggleOcultarRespondidas}
                  className="w-full py-2.5 px-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-xs flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-amber-500/20 transition-transform active:scale-98"
                >
                  <Eye className="w-4 h-4" />
                  <span>Exibir Questões Respondidas</span>
                </button>
              )}
              {onAbrirGerador && (
                <button
                  id="btn-gerar-mais-vazio"
                  onClick={onAbrirGerador}
                  className="w-full py-2.5 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-blue-600/25 transition-transform active:scale-98"
                >
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>Gerar Mais Questões com IA</span>
                </button>
              )}
              <button
                onClick={() => {
                  onSelectDisciplina('Todas as Disciplinas');
                  onSelectAssunto('Todos os Assuntos');
                }}
                className={`w-full py-2 px-4 border rounded-xl text-xs cursor-pointer font-medium ${
                  isDark ? 'border-slate-700 hover:bg-slate-800 text-slate-300' : 'border-slate-300 hover:bg-slate-100 text-slate-700'
                }`}
              >
                Ver Todas as Disciplinas
              </button>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className={`p-6 text-center rounded-3xl border ${isDark ? 'bg-slate-900 border-slate-800 text-slate-300' : 'bg-white border-slate-200 text-slate-700'}`}>
        <p className="font-semibold mb-2">Nenhuma questão encontrada para este filtro.</p>
        <div className="flex flex-col gap-2 max-w-xs mx-auto mt-4">
          {onAbrirGerador && (
            <button
              onClick={onAbrirGerador}
              className="py-2.5 px-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-xs flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <Sparkles className="w-4 h-4" />
              <span>Gerar Questões para este Filtro</span>
            </button>
          )}
          <button
            onClick={() => {
              onSelectDisciplina('Todas as Disciplinas');
              onSelectAssunto('Todos os Assuntos');
            }}
            className="py-2 px-4 bg-blue-600 hover:bg-blue-500 rounded-xl text-white text-xs font-semibold cursor-pointer"
          >
            Limpar Filtros
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto space-y-4 pb-20">
      {/* Filters Header (QConcursos Style) */}
      <section
        className={`rounded-2xl p-3 shadow-md transition-colors ${
          isDark
            ? 'bg-slate-900/90 border border-slate-800'
            : 'bg-white border border-slate-200'
        }`}
      >
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 overflow-hidden">
            <Filter className="w-4 h-4 text-amber-500 shrink-0" />
            <div className="truncate">
              <span className={`text-[11px] font-bold uppercase tracking-wider block ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                Filtro Atual
              </span>
              <span className={`text-xs font-semibold truncate block ${isDark ? 'text-slate-200' : 'text-slate-900'}`}>
                {disciplinaFiltro === 'Todas as Disciplinas' ? 'Todas as Matérias' : disciplinaFiltro}
              </span>
            </div>
          </div>

          <button
            id="toggle-filter-dropdown-btn"
            onClick={() => setShowFiltros(!showFiltros)}
            className={`flex items-center gap-1 text-xs font-semibold px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer ${
              isDark
                ? 'bg-blue-950 text-blue-300 border border-blue-800 hover:bg-blue-900'
                : 'bg-blue-50 text-blue-900 border border-blue-200 hover:bg-blue-100'
            }`}
          >
            <span>Filtrar</span>
            <ChevronRight className={`w-3.5 h-3.5 transition-transform ${showFiltros ? 'rotate-90' : ''}`} />
          </button>
        </div>

        {/* Quick Action Toolbar: Ocultar Respondidas & Gerador com IA */}
        <div className="flex items-center gap-2 mt-2.5 pt-2.5 border-t border-slate-800/40">
          {onToggleOcultarRespondidas && (
            <button
              id="btn-toggle-ocultar-respondidas"
              onClick={onToggleOcultarRespondidas}
              className={`flex-1 flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs transition-all cursor-pointer ${
                ocultarRespondidas
                  ? 'bg-amber-500 text-slate-950 border border-amber-400 font-bold shadow-sm shadow-amber-500/20'
                  : isDark
                  ? 'bg-slate-950/70 border border-slate-800 text-slate-300 hover:border-slate-700'
                  : 'bg-slate-100 border border-slate-300 text-slate-700 hover:bg-slate-200 font-medium'
              }`}
              title={
                ocultarRespondidas
                  ? 'Exibindo apenas questões não respondidas. Clique para ver todas.'
                  : 'Ocultar questões que você já resolveu'
              }
            >
              {ocultarRespondidas ? (
                <EyeOff className="w-3.5 h-3.5 shrink-0" />
              ) : (
                <Eye className="w-3.5 h-3.5 shrink-0 text-slate-400" />
              )}
              <span className="truncate">
                {ocultarRespondidas ? 'Ocultando respondidas' : 'Ocultar respondidas'}
              </span>
              {respondidasNoFiltro > 0 && (
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono font-bold shrink-0 ${
                    ocultarRespondidas
                      ? 'bg-slate-950/30 text-slate-950'
                      : isDark
                      ? 'bg-blue-900/60 text-blue-300'
                      : 'bg-blue-100 text-blue-800'
                  }`}
                >
                  {respondidasNoFiltro}
                </span>
              )}
            </button>
          )}

          {onAbrirGerador && (
            <button
              id="btn-card-abrir-gerador"
              onClick={onAbrirGerador}
              className={`flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer shrink-0 ${
                isDark
                  ? 'bg-blue-950/80 text-amber-400 border border-blue-800 hover:bg-blue-900'
                  : 'bg-amber-50 text-amber-900 border border-amber-300 hover:bg-amber-100'
              }`}
              title="Gerar questões inéditas com IA para esta disciplina"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>+ Gerar IA</span>
            </button>
          )}
        </div>

        {/* Collapsible Filter Selectors */}
        <AnimatePresence>
          {showFiltros && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className={`overflow-hidden pt-3 mt-2 border-t space-y-2.5 ${
                isDark ? 'border-slate-800/80' : 'border-slate-200'
              }`}
            >
              <div>
                <label className={`text-[11px] block mb-1 font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Disciplina do Edital PMBA
                </label>
                <select
                  id="select-disciplina"
                  value={disciplinaFiltro}
                  onChange={(e) => {
                    onSelectDisciplina(e.target.value);
                    onSelectAssunto('Todos os Assuntos');
                  }}
                  className={`w-full text-xs rounded-xl px-3 py-2 focus:outline-none focus:border-amber-400 cursor-pointer ${
                    isDark
                      ? 'bg-slate-950 text-slate-200 border border-slate-700'
                      : 'bg-slate-50 text-slate-900 border border-slate-300'
                  }`}
                >
                  {disciplinasDisponiveis.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className={`text-[11px] block mb-1 font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Assunto Específico
                </label>
                <select
                  id="select-assunto"
                  value={assuntoFiltro}
                  onChange={(e) => onSelectAssunto(e.target.value)}
                  className={`w-full text-xs rounded-xl px-3 py-2 focus:outline-none focus:border-amber-400 cursor-pointer ${
                    isDark
                      ? 'bg-slate-950 text-slate-200 border border-slate-700'
                      : 'bg-slate-50 text-slate-900 border border-slate-300'
                  }`}
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
      <section
        className={`rounded-xl px-3.5 py-2.5 border flex items-center justify-between gap-2 text-xs transition-colors ${
          isDark
            ? 'bg-slate-900/60 border-slate-800/70'
            : 'bg-white border-slate-200 shadow-xs'
        }`}
      >
        <div className={`flex items-center gap-1.5 font-bold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
          <BookMarked className="w-4 h-4 text-amber-500" />
          <span>Questão {currentIndex + 1} de {questoes.length}</span>
        </div>

        {/* Quick jump dots (scrollable if many) */}
        <div className="flex items-center gap-1 overflow-x-auto max-w-[200px] py-1 no-scrollbar">
          {questoes.map((q, idx) => {
            const resp = historicoRespostas[q.id];
            let dotColor = isDark
              ? 'bg-slate-800 border-slate-700 text-slate-400'
              : 'bg-slate-100 border-slate-300 text-slate-600';

            if (resp) {
              dotColor = resp.acertou
                ? 'bg-emerald-600 border-emerald-500 text-white font-bold'
                : 'bg-rose-600 border-rose-500 text-white font-bold';
            } else if (idx === currentIndex) {
              dotColor = 'bg-amber-500 border-amber-400 text-slate-950 font-extrabold ring-2 ring-amber-500/40';
            }

            return (
              <button
                key={q.id}
                onClick={() => {
                  onNavigate(idx);
                  setSelectedAlternativa(null);
                  setShowComentario(false);
                }}
                className={`w-6 h-6 rounded-full border shrink-0 flex items-center justify-center text-[10px] transition-transform active:scale-90 cursor-pointer ${dotColor}`}
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
        className={`rounded-2xl border shadow-xl overflow-hidden transition-colors ${
          isDark
            ? 'bg-slate-900 border-slate-800'
            : 'bg-white border-slate-200'
        }`}
      >
        {/* Card Header: Metadata Badges (QConcursos Style) */}
        <div
          className={`px-4 py-3 border-b transition-colors ${
            isDark
              ? 'bg-[#0b1b36] border-slate-800/90'
              : 'bg-slate-50 border-slate-200'
          }`}
        >
          <div className="flex flex-wrap items-center gap-1.5 mb-1.5">
            <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold ${
              isDark
                ? 'bg-blue-900/60 text-blue-200 border border-blue-700/50'
                : 'bg-blue-100 text-blue-900 border border-blue-200'
            }`}>
              {currentQuestao.banca}
            </span>
            <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-semibold ${
              isDark
                ? 'bg-slate-800 text-slate-200 border border-slate-700'
                : 'bg-slate-200 text-slate-800 border border-slate-300'
            }`}>
              {currentQuestao.orgao} • {currentQuestao.ano}
            </span>
            <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-semibold ${
              isDark
                ? 'bg-amber-950/70 text-amber-300 border border-amber-800/40'
                : 'bg-amber-50 text-amber-900 border border-amber-300'
            }`}>
              {currentQuestao.cargo}
            </span>
          </div>

          <div className="text-[11px] leading-tight">
            <span className="font-bold text-amber-500">{currentQuestao.disciplina}</span>
            <span className={isDark ? 'text-slate-500 mx-1.5' : 'text-slate-400 mx-1.5'}>•</span>
            <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>{currentQuestao.assunto}</span>
          </div>
        </div>

        {/* Question Statement (Enunciado) */}
        <div className="p-4 sm:p-5">
          <p className={`text-sm sm:text-base font-normal leading-relaxed text-justify ${
            isDark ? 'text-slate-100' : 'text-slate-800'
          }`}>
            {currentQuestao.enunciado}
          </p>
        </div>

        {/* Alternatives (5 Opções A, B, C, D, E) */}
        <div className="px-4 pb-4 space-y-2.5">
          <span className={`text-[11px] font-bold uppercase tracking-wider block mb-1 ${
            isDark ? 'text-slate-400' : 'text-slate-500'
          }`}>
            Selecione uma alternativa:
          </span>

          {currentQuestao.alternativas.map((alt) => {
            const isSelected = alternativaMarcada === alt.id;
            const isCorrectAnswer = currentQuestao.respostaCorreta === alt.id;

            // Visual state styling
            let containerClasses = isDark
              ? 'border-slate-800 bg-slate-950/60 hover:bg-slate-800/40 text-slate-200'
              : 'border-slate-200 bg-white hover:bg-blue-50/40 text-slate-800';
            let badgeClasses = isDark
              ? 'bg-slate-800 text-slate-300 border-slate-700'
              : 'bg-slate-100 text-slate-700 border-slate-300';

            if (!foiRespondida && isSelected) {
              containerClasses = isDark
                ? 'border-blue-500 bg-blue-950/50 text-blue-100 ring-2 ring-blue-500/20'
                : 'border-blue-600 bg-blue-50 text-blue-950 ring-2 ring-blue-500/20 font-medium';
              badgeClasses = 'bg-blue-600 text-white border-blue-400';
            } else if (foiRespondida) {
              if (isCorrectAnswer) {
                // Correct alternative highlighted in green always
                containerClasses = isDark
                  ? 'border-emerald-500 bg-emerald-950/60 text-emerald-100 ring-2 ring-emerald-500/30'
                  : 'border-emerald-600 bg-emerald-50 text-emerald-950 ring-2 ring-emerald-500/30 font-medium';
                badgeClasses = 'bg-emerald-600 text-white font-black border-emerald-500';
              } else if (isSelected && !isCorrectAnswer) {
                // Incorrect chosen option marked in red
                containerClasses = isDark
                  ? 'border-rose-500 bg-rose-950/60 text-rose-100 ring-2 ring-rose-500/30'
                  : 'border-rose-600 bg-rose-50 text-rose-950 ring-2 ring-rose-500/30';
                badgeClasses = 'bg-rose-600 text-white font-black border-rose-500';
              } else {
                containerClasses = isDark
                  ? 'opacity-40 border-slate-800 bg-slate-950/30 text-slate-400'
                  : 'opacity-40 border-slate-200 bg-slate-50 text-slate-400';
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
                    <Check className="w-4 h-4 text-white stroke-[3]" />
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
                  ? isDark
                    ? 'bg-emerald-950/80 border-emerald-500 text-emerald-100'
                    : 'bg-emerald-50 border-emerald-500 text-emerald-950'
                  : isDark
                  ? 'bg-rose-950/80 border-rose-500 text-rose-100'
                  : 'bg-rose-50 border-rose-500 text-rose-950'
              }`}
            >
              <div className="flex items-center gap-2.5">
                {statusResposta.acertou ? (
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center text-emerald-500 shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                ) : (
                  <div className="w-8 h-8 rounded-full bg-rose-500/20 border border-rose-400 flex items-center justify-center text-rose-500 shrink-0">
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
        <div
          className={`p-4 border-t space-y-3 transition-colors ${
            isDark
              ? 'bg-[#08152a] border-slate-800'
              : 'bg-slate-50 border-slate-200'
          }`}
        >
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
                    : isDark
                    ? 'bg-slate-800 text-slate-500 border border-slate-700/60 cursor-not-allowed'
                    : 'bg-slate-200 text-slate-400 border border-slate-300 cursor-not-allowed'
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
                    : isDark
                    ? 'bg-slate-800 text-slate-400 border border-slate-700 cursor-default'
                    : 'bg-slate-200 text-slate-500 border border-slate-300 cursor-default'
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
                  : isDark
                  ? 'bg-slate-800/90 text-amber-300 hover:bg-slate-700 border-amber-500/40'
                  : 'bg-white text-blue-900 hover:bg-slate-100 border-slate-300'
              }`}
            >
              <Sparkles className="w-4 h-4 text-amber-500" />
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
                  ? isDark
                    ? 'border-slate-800/60 text-slate-600 cursor-not-allowed'
                    : 'border-slate-200 text-slate-300 cursor-not-allowed'
                  : isDark
                  ? 'border-slate-700 text-slate-300 hover:bg-slate-800'
                  : 'border-slate-300 text-slate-700 hover:bg-slate-100'
              }`}
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Anterior</span>
            </button>

            <span className={`text-[11px] font-semibold ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              {currentIndex + 1} de {questoes.length}
            </span>

            <button
              id="btn-proxima-pequeno"
              type="button"
              disabled={currentIndex === questoes.length - 1}
              onClick={handleNext}
              className={`flex items-center gap-1 text-xs font-semibold py-2 px-3 rounded-lg border min-h-[44px] cursor-pointer transition-colors ${
                currentIndex === questoes.length - 1
                  ? isDark
                    ? 'border-slate-800/60 text-slate-600 cursor-not-allowed'
                    : 'border-slate-200 text-slate-300 cursor-not-allowed'
                  : isDark
                  ? 'border-slate-700 text-slate-300 hover:bg-slate-800'
                  : 'border-slate-300 text-slate-700 hover:bg-slate-100'
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
              className={`overflow-hidden border-t-2 border-amber-500 transition-colors ${
                isDark ? 'bg-[#061122]' : 'bg-slate-50'
              }`}
            >
              <div className="p-4 sm:p-5 space-y-4">
                {/* Professor Header */}
                <div className={`flex items-center justify-between pb-3 border-b ${
                  isDark ? 'border-slate-800' : 'border-slate-200'
                }`}>
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-600 to-amber-400 border border-amber-300 flex items-center justify-center text-slate-950 font-black text-sm">
                      PM
                    </div>
                    <div>
                      <h4 className={`text-xs font-bold flex items-center gap-1.5 ${
                        isDark ? 'text-slate-100' : 'text-slate-900'
                      }`}>
                        {currentQuestao.comentario.professor}
                        <Award className="w-3.5 h-3.5 text-amber-500" />
                      </h4>
                      <p className={`text-[10px] leading-none mt-0.5 ${
                        isDark ? 'text-slate-400' : 'text-slate-500'
                      }`}>
                        {currentQuestao.comentario.cargo}
                      </p>
                    </div>
                  </div>

                  <span className={`text-[11px] px-2 py-0.5 rounded-full font-bold ${
                    isDark
                      ? 'bg-emerald-950 text-emerald-300 border border-emerald-700/60'
                      : 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                  }`}>
                    Gabarito: {currentQuestao.respostaCorreta}
                  </span>
                </div>

                {/* General Analysis */}
                <div className="space-y-1.5">
                  <h5 className={`text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 ${
                    isDark ? 'text-slate-200' : 'text-slate-800'
                  }`}>
                    <MessageSquare className="w-3.5 h-3.5 text-blue-500" />
                    Análise do Especialista
                  </h5>
                  <p className={`text-xs sm:text-sm leading-relaxed p-3 rounded-xl border ${
                    isDark
                      ? 'bg-slate-900/60 text-slate-300 border-slate-800/80'
                      : 'bg-white text-slate-700 border-slate-200 shadow-xs'
                  }`}>
                    {currentQuestao.comentario.analiseGeral}
                  </p>
                </div>

                {/* Option by Option Breakdown */}
                <div className="space-y-2">
                  <h5 className={`text-xs font-bold uppercase tracking-wider ${
                    isDark ? 'text-slate-200' : 'text-slate-800'
                  }`}>
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
                              ? isDark
                                ? 'bg-emerald-950/40 border-emerald-500/50 text-emerald-200'
                                : 'bg-emerald-50 border-emerald-300 text-emerald-950 font-medium'
                              : isDark
                              ? 'bg-slate-900/40 border-slate-800/70 text-slate-300'
                              : 'bg-white border-slate-200 text-slate-700'
                          }`}
                        >
                          <span
                            className={`font-black mr-1.5 px-1.5 py-0.2 rounded text-[11px] ${
                              isCorrect
                                ? 'bg-emerald-600 text-white'
                                : isDark
                                ? 'bg-slate-800 text-slate-400'
                                : 'bg-slate-200 text-slate-700'
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
                <div className={`p-3.5 rounded-xl border space-y-1 ${
                  isDark
                    ? 'bg-gradient-to-r from-amber-950/60 via-amber-900/30 to-red-950/40 border-amber-500/60 text-amber-200'
                    : 'bg-amber-50 border-amber-300 text-amber-950'
                }`}>
                  <div className="flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-amber-600">
                    <Flame className="w-4 h-4 text-amber-500 fill-amber-500" />
                    <span>Dica de Prova • Bizu PMBA</span>
                  </div>
                  <p className="text-xs leading-relaxed font-medium">
                    {currentQuestao.comentario.bizuPMBA}
                  </p>
                </div>

                {/* Legal Citations */}
                {currentQuestao.comentario.artigosCitados && (
                  <div className={`text-[11px] pt-1 flex flex-wrap items-center gap-1.5 ${
                    isDark ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    <span className={`font-semibold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>Fundamentação Legal:</span>
                    {currentQuestao.comentario.artigosCitados.map((art, i) => (
                      <span
                        key={i}
                        className={`px-2 py-0.5 rounded border text-[10px] ${
                          isDark
                            ? 'bg-slate-800/80 border-slate-700 text-slate-300'
                            : 'bg-white border-slate-300 text-slate-700 shadow-2xs'
                        }`}
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

