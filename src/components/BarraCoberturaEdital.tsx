import React, { useState } from 'react';
import {
  CheckCircle2,
  Clock,
  CircleDot,
  ChevronDown,
  ChevronUp,
  Target,
  Sparkles,
  Zap,
  BookOpen,
  Award,
  Shield,
  HelpCircle,
  TrendingUp,
  ArrowRight,
  Filter,
  Check
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from '../context/ThemeContext';
import {
  calcularCoberturaEdital,
  EditalCoverageData,
  AssuntoEditalDetalhado,
  DisciplinaCoberturaResumo
} from '../utils/editalCoverage';
import { Questao, RespostaUsuario } from '../types';

interface BarraCoberturaEditalProps {
  questoes: Questao[];
  historicoRespostas: Record<string, RespostaUsuario>;
  topicosLidos: Record<string, boolean>;
  onTreinarAssunto?: (disciplina: string, assunto: string) => void;
  onEstudarTeoria?: (disciplina?: string) => void;
  onAbrirMatrizCompleta?: () => void;
  onAbrirGerador?: (disciplina?: string, assunto?: string, modo?: any) => void;
}

export const BarraCoberturaEdital: React.FC<BarraCoberturaEditalProps> = ({
  questoes,
  historicoRespostas,
  topicosLidos,
  onTreinarAssunto,
  onEstudarTeoria,
  onAbrirMatrizCompleta,
  onAbrirGerador
}) => {
  const { isDark } = useTheme();
  const [expandido, setExpandido] = useState(false);
  const [filtroDisciplina, setFiltroDisciplina] = useState<string>('todas');
  const [filtroStatus, setFiltroStatus] = useState<'todos' | 'dominados' | 'em_progresso' | 'pendentes'>('todos');
  const [disciplinaAberta, setDisciplinaAberta] = useState<string | null>(null);

  const coverageData: EditalCoverageData = calcularCoberturaEdital(
    questoes,
    historicoRespostas,
    topicosLidos
  );

  const toggleDisciplina = (nome: string) => {
    setDisciplinaAberta((prev) => (prev === nome ? null : nome));
  };

  const getStatusBadge = (status: AssuntoEditalDetalhado['status']) => {
    switch (status) {
      case 'dominado':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 text-[10px] font-bold">
            <CheckCircle2 className="w-3 h-3 text-emerald-500" />
            Visto (15/15)
          </span>
        );
      case 'em_progresso':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30 text-[10px] font-bold">
            <Clock className="w-3 h-3 text-amber-500" />
            Em Progresso
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-500/15 text-slate-600 dark:text-slate-400 border border-slate-500/30 text-[10px] font-medium">
            <CircleDot className="w-3 h-3 text-slate-400" />
            Pendente
          </span>
        );
    }
  };

  return (
    <section
      id="edital-coverage-card"
      className={`rounded-2xl p-4 shadow-md transition-all duration-200 border ${
        isDark
          ? 'bg-slate-900 border-slate-800'
          : 'bg-white border-slate-200'
      }`}
    >
      {/* Header do Card com Status & Badges */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-slate-950 font-black shadow-md shadow-amber-500/20">
            <Target className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h3 className={`text-sm font-extrabold tracking-tight ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
                Cobertura do Edital PMBA
              </h3>
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-amber-500/15 text-amber-500 font-extrabold border border-amber-500/30">
                Meta: Bater o Edital
              </span>
            </div>
            <p className={`text-[11px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              {coverageData.assuntosDominados} de {coverageData.totalAssuntosEdital} assuntos dominados
            </p>
          </div>
        </div>

        {/* Porcentagem Grande */}
        <div className="text-right">
          <span className="font-mono font-black text-2xl text-amber-500 block leading-none">
            {coverageData.porcentagemGeral}%
          </span>
          <span className={`text-[9px] font-medium block mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            {coverageData.porcentagemGeral === 100 ? 'Edital Batido! 🎉' : 'do edital batido'}
          </span>
        </div>
      </div>

      {/* Barra de Progresso Principal com Marcadores de Milestones */}
      <div className="space-y-1.5 my-3">
        <div className="relative w-full h-3.5 bg-slate-800/20 dark:bg-slate-950 rounded-full overflow-hidden p-0.5 border border-slate-700/30 shadow-inner">
          {/* Progress fill */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${coverageData.porcentagemGeral}%` }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="h-full rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-emerald-400 shadow-sm relative"
          >
            {/* Pulsing tip light */}
            {coverageData.porcentagemGeral > 0 && coverageData.porcentagemGeral < 100 && (
              <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/60 rounded-full animate-pulse" />
            )}
          </motion.div>

          {/* Markers at 25%, 50%, 75% */}
          <div className="absolute inset-0 flex justify-between px-1 pointer-events-none items-center">
            <div className="w-[1px] h-2 bg-white/20 ml-[25%]" />
            <div className="w-[1px] h-2 bg-white/20 ml-[25%]" />
            <div className="w-[1px] h-2 bg-white/20 ml-[25%]" />
          </div>
        </div>

        {/* Milestones Labels */}
        <div className="flex justify-between text-[9px] font-mono font-medium px-0.5 text-slate-400">
          <span>0%</span>
          <span className={coverageData.porcentagemGeral >= 25 ? 'text-amber-400 font-bold' : ''}>25%</span>
          <span className={coverageData.porcentagemGeral >= 50 ? 'text-amber-400 font-bold' : ''}>50%</span>
          <span className={coverageData.porcentagemGeral >= 75 ? 'text-amber-400 font-bold' : ''}>75%</span>
          <span className={coverageData.porcentagemGeral >= 100 ? 'text-emerald-400 font-bold' : ''}>100% 🏆</span>
        </div>
      </div>

      {/* Regra Pedagógica em Destaque */}
      <div
        className={`p-2.5 rounded-xl text-[11px] flex items-start gap-2 border ${
          isDark
            ? 'bg-[#08172c] border-blue-900/40 text-slate-300'
            : 'bg-blue-50/70 border-blue-200 text-slate-700'
        }`}
      >
        <Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
        <div className="space-y-0.5">
          <p className="font-semibold leading-tight">
            <strong className="text-amber-500">Regra de Domínio PMBA:</strong> Para ser considerado <strong>"Visto e Batido"</strong>, cada tópico exige no mínimo <strong>15 questões corretas</strong>.
          </p>
        </div>
      </div>

      {/* Mini Resumo de Status (3 colunas) */}
      <div className="grid grid-cols-3 gap-2 mt-3 text-center">
        <div className={`p-2 rounded-xl border ${isDark ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
          <div className="flex items-center justify-center gap-1 text-[10px] text-emerald-500 font-bold">
            <CheckCircle2 className="w-3 h-3" />
            <span>Batidos</span>
          </div>
          <span className="font-mono font-extrabold text-base text-emerald-500">
            {coverageData.assuntosDominados}
          </span>
        </div>

        <div className={`p-2 rounded-xl border ${isDark ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
          <div className="flex items-center justify-center gap-1 text-[10px] text-amber-500 font-bold">
            <Clock className="w-3 h-3" />
            <span>Em Andamento</span>
          </div>
          <span className="font-mono font-extrabold text-base text-amber-500">
            {coverageData.assuntosEmProgresso}
          </span>
        </div>

        <div className={`p-2 rounded-xl border ${isDark ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
          <div className="flex items-center justify-center gap-1 text-[10px] text-slate-400 font-medium">
            <CircleDot className="w-3 h-3" />
            <span>Pendentes</span>
          </div>
          <span className={`font-mono font-bold text-base ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            {coverageData.assuntosPendentes}
          </span>
        </div>
      </div>

      {/* Botões de Ação Rápida e Toggle para Detalhamento */}
      <div className="flex items-center justify-between gap-2 mt-3 pt-2 border-t border-slate-700/20 dark:border-slate-800">
        <button
          type="button"
          onClick={() => setExpandido(!expandido)}
          className={`text-xs font-bold flex items-center gap-1.5 py-1.5 px-3 rounded-lg transition-colors cursor-pointer ${
            isDark
              ? 'text-amber-400 hover:bg-slate-800'
              : 'text-blue-900 hover:bg-blue-50'
          }`}
        >
          <span>{expandido ? 'Ocultar Assuntos' : 'Ver Assuntos do Edital'}</span>
          {expandido ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>

        {onAbrirMatrizCompleta && (
          <button
            type="button"
            onClick={onAbrirMatrizCompleta}
            className={`text-xs font-semibold flex items-center gap-1 py-1.5 px-2.5 rounded-lg transition-colors cursor-pointer ${
              isDark
                ? 'bg-blue-950/70 hover:bg-blue-900 text-blue-300 border border-blue-800/60'
                : 'bg-blue-100 hover:bg-blue-200 text-blue-900'
            }`}
          >
            <span>Matriz Geral</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Visão Expandida com Lista de Matérias e Tópicos */}
      <AnimatePresence>
        {expandido && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-3 pt-3 border-t border-slate-700/30 dark:border-slate-800 space-y-3"
          >
            {/* Barra de Filtro de Status Rápido */}
            <div className="flex items-center justify-between gap-1 overflow-x-auto pb-1 text-[11px]">
              <span className={`text-[10px] font-bold uppercase tracking-wider shrink-0 mr-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                Filtrar:
              </span>
              <button
                type="button"
                onClick={() => setFiltroStatus('todos')}
                className={`px-2 py-1 rounded-lg font-bold shrink-0 transition-all ${
                  filtroStatus === 'todos'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : isDark ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700'
                }`}
              >
                Todos ({coverageData.totalAssuntosEdital})
              </button>
              <button
                type="button"
                onClick={() => setFiltroStatus('dominados')}
                className={`px-2 py-1 rounded-lg font-bold shrink-0 transition-all ${
                  filtroStatus === 'dominados'
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : isDark ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700'
                }`}
              >
                Batidos ({coverageData.assuntosDominados})
              </button>
              <button
                type="button"
                onClick={() => setFiltroStatus('em_progresso')}
                className={`px-2 py-1 rounded-lg font-bold shrink-0 transition-all ${
                  filtroStatus === 'em_progresso'
                    ? 'bg-amber-600 text-white shadow-xs'
                    : isDark ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700'
                }`}
              >
                Andamento ({coverageData.assuntosEmProgresso})
              </button>
              <button
                type="button"
                onClick={() => setFiltroStatus('pendentes')}
                className={`px-2 py-1 rounded-lg font-bold shrink-0 transition-all ${
                  filtroStatus === 'pendentes'
                    ? 'bg-slate-600 text-white shadow-xs'
                    : isDark ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700'
                }`}
              >
                Pendentes ({coverageData.assuntosPendentes})
              </button>
            </div>

            {/* Lista de Disciplinas com Barras de Progresso Próprias */}
            <div className="space-y-2.5">
              {coverageData.disciplinas.map((disc) => {
                const isAberta = disciplinaAberta === disc.disciplina;

                // Filtrar assuntos conforme filtro de status
                const assuntosFiltrados = disc.assuntos.filter((ass) => {
                  if (filtroStatus === 'dominados') return ass.status === 'dominado';
                  if (filtroStatus === 'em_progresso') return ass.status === 'em_progresso';
                  if (filtroStatus === 'pendentes') return ass.status === 'pendente';
                  return true;
                });

                if (assuntosFiltrados.length === 0 && filtroStatus !== 'todos') {
                  return null;
                }

                return (
                  <div
                    key={disc.disciplina}
                    className={`rounded-xl border overflow-hidden transition-all ${
                      isDark
                        ? 'bg-slate-950/80 border-slate-800'
                        : 'bg-slate-50/80 border-slate-200'
                    }`}
                  >
                    {/* Header da Disciplina */}
                    <div
                      onClick={() => toggleDisciplina(disc.disciplina)}
                      className="p-3 flex items-center justify-between gap-2 cursor-pointer hover:bg-white/5 transition-colors"
                    >
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-1 mb-1">
                          <h4 className={`text-xs font-bold truncate ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                            {disc.disciplina}
                          </h4>
                          <span className="font-mono text-xs font-bold text-amber-500 shrink-0">
                            {disc.porcentagemCobertura}%
                          </span>
                        </div>

                        {/* Mini progress bar da matéria */}
                        <div className="w-full bg-slate-800 dark:bg-slate-900 rounded-full h-1.5 overflow-hidden">
                          <div
                            className="bg-amber-500 h-1.5 rounded-full transition-all duration-300"
                            style={{ width: `${disc.porcentagemCobertura}%` }}
                          />
                        </div>

                        <div className="flex items-center justify-between text-[10px] mt-1 text-slate-400">
                          <span>
                            {disc.assuntosDominados}/{disc.totalAssuntos} assuntos batidos
                          </span>
                          <span>
                            {disc.questoesRespondidas} questões feitas ({disc.acertos} certas)
                          </span>
                        </div>
                      </div>

                      <button
                        type="button"
                        aria-label="Expandir disciplina"
                        className="p-1 text-slate-400 hover:text-amber-400 transition-colors shrink-0"
                      >
                        {isAberta ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>
                    </div>

                    {/* Tópicos da Disciplina */}
                    {isAberta && (
                      <div className="p-3 pt-0 border-t border-slate-700/20 dark:border-slate-800/80 space-y-2 mt-1">
                        {assuntosFiltrados.map((ass) => (
                          <div
                            key={ass.id}
                            className={`p-2.5 rounded-lg border flex flex-col gap-1.5 transition-colors ${
                              ass.status === 'dominado'
                                ? isDark ? 'bg-emerald-950/20 border-emerald-900/40' : 'bg-emerald-50/50 border-emerald-200'
                                : ass.status === 'em_progresso'
                                ? isDark ? 'bg-amber-950/20 border-amber-900/40' : 'bg-amber-50/50 border-amber-200'
                                : isDark ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-slate-200'
                            }`}
                          >
                            <div className="flex items-start justify-between gap-2">
                              <div className="space-y-0.5">
                                <span className={`text-xs font-bold leading-snug block ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                                  {ass.assunto}
                                </span>
                                <p className={`text-[10px] leading-tight ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                                  {ass.motivo}
                                </p>
                              </div>
                              <div className="shrink-0">{getStatusBadge(ass.status)}</div>
                            </div>

                            {/* Progresso de 15 Acertos */}
                            <div className="space-y-1">
                              <div className="flex items-center justify-between text-[10px] text-slate-400">
                                <span>Meta do Tópico (15 acertos)</span>
                                <span className="font-mono font-bold text-amber-500">
                                  {ass.acertos}/15 ({Math.min(100, Math.round((ass.acertos / 15) * 100))}%)
                                </span>
                              </div>
                              <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-1.5 overflow-hidden">
                                <div
                                  className={`h-full rounded-full transition-all duration-300 ${
                                    ass.acertos >= 15 ? 'bg-emerald-500' : 'bg-amber-500'
                                  }`}
                                  style={{ width: `${Math.min(100, Math.round((ass.acertos / 15) * 100))}%` }}
                                />
                              </div>
                            </div>

                            {/* Estatísticas do Tópico & Botões de Ação */}
                            <div className="flex items-center justify-between gap-2 pt-1 border-t border-slate-700/20 dark:border-slate-800/60 text-[10px]">
                              <div className="flex items-center gap-1.5 font-mono flex-wrap">
                                <span className={ass.acertos > 0 ? 'text-emerald-500 font-bold' : isDark ? 'text-slate-500' : 'text-slate-400'}>
                                  {ass.acertos}/15 certas
                                </span>
                                <span className="text-slate-500">•</span>
                                <span className={ass.erros > 0 ? 'text-rose-400' : isDark ? 'text-slate-500' : 'text-slate-400'}>
                                  {ass.erros} erro(s)
                                </span>
                                <span className="text-slate-500">•</span>
                                <span className="text-amber-500 font-bold">
                                  {ass.taxaAcerto}%
                                </span>
                              </div>

                              <div className="flex items-center gap-1.5 shrink-0">
                                {ass.status !== 'dominado' && onAbrirGerador && (
                                  <button
                                    type="button"
                                    onClick={() => onAbrirGerador(ass.disciplina, ass.assunto, 'padrao')}
                                    className="px-2 py-1 rounded bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-[10px] flex items-center gap-1 shadow-xs cursor-pointer active:scale-95 transition-all"
                                    title="Gerar questões inéditas da PMBA com a IA para este tópico"
                                  >
                                    <Sparkles className="w-3 h-3 text-amber-300" />
                                    <span>IA ({ass.faltamParaVisto > 0 ? `+${ass.faltamParaVisto}` : '15'})</span>
                                  </button>
                                )}
                                {onTreinarAssunto && (
                                  <button
                                    type="button"
                                    onClick={() => onTreinarAssunto(ass.disciplina, ass.assunto)}
                                    className="px-2 py-1 rounded bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-[10px] flex items-center gap-1 shadow-xs cursor-pointer active:scale-95 transition-all"
                                  >
                                    <Zap className="w-3 h-3" />
                                    <span>Praticar</span>
                                  </button>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
