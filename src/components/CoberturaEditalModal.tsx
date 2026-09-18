import React, { useState } from 'react';
import {
  X,
  Target,
  CheckCircle2,
  Clock,
  CircleDot,
  Sparkles,
  Zap,
  BookOpen,
  Search,
  Filter,
  Shield,
  Award,
  ChevronRight,
  TrendingUp,
  RefreshCw
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from '../context/ThemeContext';
import {
  calcularCoberturaEdital,
  EditalCoverageData,
  AssuntoEditalDetalhado
} from '../utils/editalCoverage';
import { Questao, RespostaUsuario } from '../types';

interface CoberturaEditalModalProps {
  isOpen: boolean;
  onClose: () => void;
  questoes: Questao[];
  historicoRespostas: Record<string, RespostaUsuario>;
  topicosLidos: Record<string, boolean>;
  onTreinarAssunto: (disciplina: string, assunto: string) => void;
  onEstudarTeoria?: (disciplina?: string) => void;
  onAbrirGerador?: (disciplina?: string, assunto?: string, modo?: any) => void;
}

export const CoberturaEditalModal: React.FC<CoberturaEditalModalProps> = ({
  isOpen,
  onClose,
  questoes,
  historicoRespostas,
  topicosLidos,
  onTreinarAssunto,
  onEstudarTeoria,
  onAbrirGerador
}) => {
  const { isDark } = useTheme();
  const [busca, setBusca] = useState('');
  const [materiaSelecionada, setMateriaSelecionada] = useState<string>('todas');
  const [statusFiltro, setStatusFiltro] = useState<'todos' | 'dominado' | 'em_progresso' | 'pendente'>('todos');

  if (!isOpen) return null;

  const coverageData: EditalCoverageData = calcularCoberturaEdital(
    questoes,
    historicoRespostas,
    topicosLidos
  );

  // Filtrar todos os assuntos
  const todosAssuntos: AssuntoEditalDetalhado[] = coverageData.disciplinas.flatMap((d) => d.assuntos);

  const assuntosFiltrados = todosAssuntos.filter((item) => {
    // Filtro por matéria
    if (materiaSelecionada !== 'todas' && item.disciplina !== materiaSelecionada) {
      return false;
    }
    // Filtro por status
    if (statusFiltro !== 'todos' && item.status !== statusFiltro) {
      return false;
    }
    // Filtro por texto
    if (busca.trim()) {
      const q = busca.toLowerCase();
      return (
        item.assunto.toLowerCase().includes(q) ||
        item.disciplina.toLowerCase().includes(q) ||
        item.motivo.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className={`w-full max-w-2xl max-h-[90vh] flex flex-col rounded-3xl shadow-2xl overflow-hidden border ${
            isDark ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
          }`}
        >
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-slate-800/40 dark:border-slate-800 bg-gradient-to-r from-blue-950 via-[#0c2242] to-slate-900 text-white flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center font-black shadow-lg shadow-amber-500/30">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-base sm:text-lg font-black tracking-tight text-white">
                    Matriz de Cobertura do Edital
                  </h2>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 font-extrabold border border-amber-500/40">
                    PMBA 2026
                  </span>
                </div>
                <p className="text-xs text-slate-300">
                  Acompanhe e bata cada tópico oficial com a meta de questões certas.
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Banner de Resumo da Cobertura Geral */}
          <div className="p-4 border-b border-slate-700/30 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 shrink-0 space-y-3">
            <div className="flex items-center justify-between gap-3">
              <div>
                <span className={`text-[10px] font-bold uppercase tracking-wider block ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  Nível de Conquista
                </span>
                <span className="text-sm font-extrabold text-amber-500 flex items-center gap-1.5">
                  <Award className="w-4 h-4" />
                  {coverageData.statusEdital}
                </span>
              </div>

              <div className="text-right">
                <span className="font-mono text-2xl font-black text-amber-500 leading-none">
                  {coverageData.porcentagemGeral}%
                </span>
                <span className={`text-[10px] block ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  {coverageData.assuntosDominados}/{coverageData.totalAssuntosEdital} batidos
                </span>
              </div>
            </div>

            {/* Barra de Progresso com Marcadores */}
            <div className="space-y-1">
              <div className="w-full h-3 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden p-0.5">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-emerald-400 transition-all duration-700"
                  style={{ width: `${coverageData.porcentagemGeral}%` }}
                />
              </div>
              <div className="flex justify-between text-[9px] font-mono text-slate-400">
                <span>0%</span>
                <span>25%</span>
                <span>50%</span>
                <span>75%</span>
                <span>100% 🎯</span>
              </div>
            </div>

            {/* Regra de Pontuação */}
            <div className="text-[11px] flex items-center gap-1.5 text-slate-600 dark:text-slate-300 bg-amber-500/10 dark:bg-amber-500/5 p-2 rounded-xl border border-amber-500/20">
              <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span>
                <strong>Regra PMBA:</strong> Para ser considerado <strong>"Visto e Batido"</strong>, cada tópico exige no mínimo <strong>15 questões corretas</strong>.
              </span>
            </div>
          </div>

          {/* Controles de Busca e Filtro */}
          <div className="p-3 border-b border-slate-700/20 dark:border-slate-800 space-y-2 shrink-0">
            {/* Input de Busca */}
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                placeholder="Buscar assunto ou lei no edital..."
                className={`w-full pl-9 pr-4 py-2 rounded-xl text-xs transition-colors border ${
                  isDark
                    ? 'bg-slate-950 border-slate-800 text-white placeholder:text-slate-500 focus:border-amber-500'
                    : 'bg-slate-100 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-blue-600'
                } focus:outline-none`}
              />
              {busca && (
                <button
                  onClick={() => setBusca('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Filtros em Linha: Matéria & Status */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
              <select
                value={materiaSelecionada}
                onChange={(e) => setMateriaSelecionada(e.target.value)}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold border transition-colors ${
                  isDark
                    ? 'bg-slate-950 border-slate-800 text-slate-200'
                    : 'bg-slate-100 border-slate-300 text-slate-800'
                } focus:outline-none`}
              >
                <option value="todas">Todas as Matérias</option>
                {coverageData.disciplinas.map((d) => (
                  <option key={d.disciplina} value={d.disciplina}>
                    {d.disciplina} ({d.assuntosDominados}/{d.totalAssuntos})
                  </option>
                ))}
              </select>

              {/* Status Chips */}
              <div className="flex items-center gap-1 shrink-0">
                <button
                  onClick={() => setStatusFiltro('todos')}
                  className={`px-2 py-1 rounded-lg text-[11px] font-bold transition-all ${
                    statusFiltro === 'todos'
                      ? 'bg-blue-600 text-white'
                      : isDark ? 'bg-slate-800 text-slate-400' : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  Todos ({todosAssuntos.length})
                </button>
                <button
                  onClick={() => setStatusFiltro('dominado')}
                  className={`px-2 py-1 rounded-lg text-[11px] font-bold transition-all ${
                    statusFiltro === 'dominado'
                      ? 'bg-emerald-600 text-white'
                      : isDark ? 'bg-slate-800 text-slate-400' : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  Batidos ({coverageData.assuntosDominados})
                </button>
                <button
                  onClick={() => setStatusFiltro('em_progresso')}
                  className={`px-2 py-1 rounded-lg text-[11px] font-bold transition-all ${
                    statusFiltro === 'em_progresso'
                      ? 'bg-amber-600 text-white'
                      : isDark ? 'bg-slate-800 text-slate-400' : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  Em Andamento ({coverageData.assuntosEmProgresso})
                </button>
                <button
                  onClick={() => setStatusFiltro('pendente')}
                  className={`px-2 py-1 rounded-lg text-[11px] font-bold transition-all ${
                    statusFiltro === 'pendente'
                      ? 'bg-slate-600 text-white'
                      : isDark ? 'bg-slate-800 text-slate-400' : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  Pendentes ({coverageData.assuntosPendentes})
                </button>
              </div>
            </div>
          </div>

          {/* Lista de Assuntos com Scroll */}
          <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-2.5">
            {assuntosFiltrados.length === 0 ? (
              <div className="py-12 text-center space-y-2">
                <CircleDot className="w-8 h-8 text-slate-500 mx-auto" />
                <p className="text-sm font-medium text-slate-400">
                  Nenhum assunto encontrado para os filtros selecionados.
                </p>
                <button
                  onClick={() => {
                    setBusca('');
                    setMateriaSelecionada('todas');
                    setStatusFiltro('todos');
                  }}
                  className="text-xs text-amber-500 font-bold hover:underline"
                >
                  Limpar filtros
                </button>
              </div>
            ) : (
              assuntosFiltrados.map((item) => (
                <div
                  key={item.id}
                  className={`p-3 rounded-2xl border transition-all ${
                    item.status === 'dominado'
                      ? isDark
                        ? 'bg-emerald-950/20 border-emerald-800/40'
                        : 'bg-emerald-50/70 border-emerald-200'
                      : item.status === 'em_progresso'
                      ? isDark
                        ? 'bg-amber-950/20 border-amber-800/40'
                        : 'bg-amber-50/70 border-amber-200'
                      : isDark
                      ? 'bg-slate-950/70 border-slate-800'
                      : 'bg-white border-slate-200'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="space-y-1 flex-1">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="text-[10px] px-2 py-0.5 rounded font-bold bg-blue-950/60 text-blue-300 border border-blue-800/40">
                          {item.disciplina}
                        </span>
                        {item.status === 'dominado' && (
                          <span className="text-[10px] px-2 py-0.5 rounded font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3" />
                            Batido no Edital
                          </span>
                        )}
                        {item.status === 'em_progresso' && (
                          <span className="text-[10px] px-2 py-0.5 rounded font-bold bg-amber-500/20 text-amber-400 border border-amber-500/40 flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            Em Andamento
                          </span>
                        )}
                        {item.status === 'pendente' && (
                          <span className="text-[10px] px-2 py-0.5 rounded font-medium bg-slate-500/10 text-slate-400 border border-slate-700/40 flex items-center gap-1">
                            <CircleDot className="w-3 h-3" />
                            Não Iniciado
                          </span>
                        )}
                      </div>

                      <h4 className={`text-xs sm:text-sm font-bold leading-snug ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
                        {item.assunto}
                      </h4>

                      <p className={`text-[11px] ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                        {item.motivo}
                      </p>

                      {/* Progresso de 15 Acertos */}
                      <div className="space-y-1 pt-1">
                        <div className="flex items-center justify-between text-[10px] text-slate-400">
                          <span>Progresso da meta (15 acertos)</span>
                          <span className="font-mono font-bold text-amber-500">
                            {item.acertos}/15 ({Math.min(100, Math.round((item.acertos / 15) * 100))}%)
                          </span>
                        </div>
                        <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-1.5 overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all duration-300 ${
                              item.acertos >= 15 ? 'bg-emerald-500' : 'bg-amber-500'
                            }`}
                            style={{ width: `${Math.min(100, Math.round((item.acertos / 15) * 100))}%` }}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-1.5 shrink-0">
                      {item.status !== 'dominado' && onAbrirGerador && (
                        <button
                          type="button"
                          onClick={() => {
                            onClose();
                            onAbrirGerador(item.disciplina, item.assunto, 'padrao');
                          }}
                          className="px-2.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs flex items-center gap-1 shadow-xs cursor-pointer active:scale-95 transition-all"
                          title="Gerar questões inéditas da PMBA com a IA para este tópico"
                        >
                          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                          <span>IA ({item.faltamParaVisto > 0 ? `+${item.faltamParaVisto}` : '15'})</span>
                        </button>
                      )}
                      <button
                        type="button"
                        onClick={() => {
                          onClose();
                          onTreinarAssunto(item.disciplina, item.assunto);
                        }}
                        className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-xs flex items-center gap-1 shadow-md shadow-amber-500/20 shrink-0 cursor-pointer active:scale-95 transition-all"
                      >
                        <Zap className="w-3.5 h-3.5 fill-slate-950" />
                        <span>Praticar</span>
                      </button>
                    </div>
                  </div>

                  {/* Detalhes de Desempenho do Aluno no Assunto */}
                  <div className="mt-2.5 pt-2 border-t border-slate-700/20 dark:border-slate-800 flex items-center justify-between text-[11px] font-mono">
                    <div className="flex items-center gap-2">
                      <span className={item.acertos > 0 ? 'text-emerald-500 font-bold' : isDark ? 'text-slate-500' : 'text-slate-400'}>
                        {item.acertos} acerto(s)
                      </span>
                      <span className="text-slate-500">•</span>
                      <span className={item.erros > 0 ? 'text-rose-400 font-medium' : isDark ? 'text-slate-500' : 'text-slate-400'}>
                        {item.erros} erro(s)
                      </span>
                      <span className="text-slate-500">•</span>
                      <span className="text-amber-500 font-bold">
                        {item.taxaAcerto}% acerto
                      </span>
                    </div>

                    <span className={`text-[10px] font-sans ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                      {item.totalQuestoesBanco} questão(ões) no banco
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer com CTA */}
          <div className="p-3 sm:p-4 border-t border-slate-700/30 dark:border-slate-800 bg-slate-100 dark:bg-slate-950 flex items-center justify-between gap-3 shrink-0">
            <span className={`text-[11px] ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Exibindo <strong>{assuntosFiltrados.length}</strong> de <strong>{todosAssuntos.length}</strong> tópicos do edital
            </span>

            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs cursor-pointer transition-colors"
            >
              Fechar
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
