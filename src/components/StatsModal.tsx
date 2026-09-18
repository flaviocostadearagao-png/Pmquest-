import React, { useState } from 'react';
import { Award, CheckCircle2, XCircle, RotateCcw, Target, ShieldCheck, BarChart2, PieChart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { RespostaUsuario, Questao } from '../types';
import { useTheme } from '../context/ThemeContext';
import { GraficoDesempenhoDisciplinas } from './GraficoDesempenhoDisciplinas';

interface StatsModalProps {
  isOpen: boolean;
  onClose: () => void;
  historicoRespostas: Record<string, RespostaUsuario>;
  todasQuestoes: Questao[];
  onResetarTudo: () => void;
  onIrParaMateria?: (disciplinaNome: string) => void;
}

export const StatsModal: React.FC<StatsModalProps> = ({
  isOpen,
  onClose,
  historicoRespostas,
  todasQuestoes,
  onResetarTudo,
  onIrParaMateria,
}) => {
  const { isDark } = useTheme();
  const [tabAtiva, setTabAtiva] = useState<'grafico' | 'resumo'>('grafico');

  if (!isOpen) return null;

  const totalRespondidas = Object.keys(historicoRespostas).length;
  const acertos = (Object.values(historicoRespostas) as RespostaUsuario[]).filter((r) => r.acertou).length;
  const erros = totalRespondidas - acertos;
  const taxaAcerto = totalRespondidas > 0 ? Math.round((acertos / totalRespondidas) * 100) : 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className={`border rounded-3xl w-full max-w-md max-h-[92vh] flex flex-col overflow-hidden shadow-2xl transition-colors ${
          isDark
            ? 'bg-slate-900 border-slate-800 text-slate-100'
            : 'bg-white border-slate-200 text-slate-800'
        }`}
      >
        {/* Header */}
        <div className={`p-4 border-b flex items-center justify-between shrink-0 ${
          isDark ? 'bg-[#08172c] border-slate-800' : 'bg-slate-50 border-slate-200'
        }`}>
          <div className="flex items-center gap-2.5">
            <div className={`w-8 h-8 rounded-xl border flex items-center justify-center text-amber-500 shrink-0 ${
              isDark ? 'bg-blue-950 border-blue-800' : 'bg-blue-50 border-blue-200'
            }`}>
              <Award className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold leading-tight">Painel de Estatísticas</h3>
              <p className={`text-[10px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Simulado Soldado PMBA 2026</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold cursor-pointer ${
              isDark ? 'bg-slate-800 text-slate-400 hover:text-slate-200' : 'bg-slate-200 text-slate-600 hover:text-slate-800'
            }`}
          >
            ✕
          </button>
        </div>

        {/* Tab Switcher (Gráfico por Disciplina vs Resumo Geral) */}
        <div className={`p-2 border-b flex gap-1 shrink-0 ${
          isDark ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-100 border-slate-200'
        }`}>
          <button
            type="button"
            onClick={() => setTabAtiva('grafico')}
            className={`flex-1 py-1.5 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
              tabAtiva === 'grafico'
                ? isDark
                  ? 'bg-amber-500 text-slate-950 shadow-sm font-black'
                  : 'bg-white text-blue-900 shadow-sm border border-slate-200'
                : isDark
                ? 'text-slate-400 hover:text-slate-200'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <BarChart2 className="w-3.5 h-3.5" />
            <span>Gráfico por Matéria</span>
          </button>

          <button
            type="button"
            onClick={() => setTabAtiva('resumo')}
            className={`flex-1 py-1.5 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
              tabAtiva === 'resumo'
                ? isDark
                  ? 'bg-amber-500 text-slate-950 shadow-sm font-black'
                  : 'bg-white text-blue-900 shadow-sm border border-slate-200'
                : isDark
                ? 'text-slate-400 hover:text-slate-200'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <PieChart className="w-3.5 h-3.5" />
            <span>Resumo Geral</span>
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-4 overflow-y-auto space-y-4 flex-1">
          {tabAtiva === 'grafico' ? (
            <GraficoDesempenhoDisciplinas
              historicoRespostas={historicoRespostas}
              todasQuestoes={todasQuestoes}
              onIrParaMateria={(disc) => {
                onClose();
                if (onIrParaMateria) onIrParaMateria(disc);
              }}
            />
          ) : (
            <div className="space-y-4">
              {/* Big Percentage Badge */}
              <div className={`p-4 rounded-2xl border text-center space-y-1 ${
                isDark
                  ? 'bg-gradient-to-b from-[#081b36] to-slate-950 border-slate-800'
                  : 'bg-gradient-to-b from-blue-50 to-slate-50 border-blue-100'
              }`}>
                <span className={`text-[11px] font-bold uppercase tracking-wider block ${
                  isDark ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  Aproveitamento Geral
                </span>
                <div className="text-4xl font-black text-amber-500 font-mono tracking-tight">
                  {totalRespondidas > 0 ? `${taxaAcerto}%` : '0%'}
                </div>
                <p className={`text-xs ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  {taxaAcerto >= 70
                    ? '🎯 Nível de Aprovação! Mantenha o ritmo.'
                    : totalRespondidas > 0
                    ? '📖 Revise a teoria dos pontos com erro.'
                    : 'Comece a resolver para registrar seu aproveitamento.'}
                </p>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div className={`p-2.5 rounded-xl border ${
                  isDark ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <span className={`text-[10px] block mb-0.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Respondidas</span>
                  <span className={`text-base font-bold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>{totalRespondidas}</span>
                </div>
                <div className={`p-2.5 rounded-xl border ${
                  isDark ? 'bg-emerald-950/40 border-emerald-800/40' : 'bg-emerald-50 border-emerald-200'
                }`}>
                  <span className="text-[10px] text-emerald-600 block mb-0.5 font-medium">Acertos</span>
                  <span className="text-base font-bold text-emerald-600">{acertos}</span>
                </div>
                <div className={`p-2.5 rounded-xl border ${
                  isDark ? 'bg-rose-950/40 border-rose-800/40' : 'bg-rose-50 border-rose-200'
                }`}>
                  <span className="text-[10px] text-rose-600 block mb-0.5 font-medium">Erros</span>
                  <span className="text-base font-bold text-rose-600">{erros}</span>
                </div>
              </div>

              {/* Dica Pedagógica */}
              <div className={`p-3 rounded-xl border text-xs space-y-1 ${
                isDark ? 'bg-blue-950/30 border-blue-900/40 text-blue-200' : 'bg-blue-50 border-blue-200 text-blue-900'
              }`}>
                <div className="flex items-center gap-1.5 font-bold">
                  <Target className="w-3.5 h-3.5 text-amber-500" />
                  <span>Dica de Estudo Estratégico</span>
                </div>
                <p className="text-[11px] leading-relaxed opacity-90">
                  Foque primeiro nas matérias com menos de 70% de acertos para garantir a pontuação mínima exigida pela banca examinadora da PMBA.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className={`p-3 border-t flex gap-2 shrink-0 ${isDark ? 'border-slate-800 bg-[#08172c]' : 'border-slate-200 bg-slate-50'}`}>
          <button
            onClick={() => {
              if (window.confirm('Deseja reiniciar todas as respostas do simulado?')) {
                onResetarTudo();
                onClose();
              }
            }}
            className={`flex-1 py-2.5 px-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer ${
              isDark
                ? 'border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-300'
                : 'border-slate-300 bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Zerar Simulado</span>
          </button>

          <button
            onClick={onClose}
            className="flex-1 py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold flex items-center justify-center cursor-pointer shadow-md shadow-blue-900/30"
          >
            Fechar
          </button>
        </div>
      </motion.div>
    </div>
  );
};


