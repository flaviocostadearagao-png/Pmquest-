import React from 'react';
import { Award, CheckCircle2, XCircle, RotateCcw, Target, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { RespostaUsuario, Questao } from '../types';

interface StatsModalProps {
  isOpen: boolean;
  onClose: () => void;
  historicoRespostas: Record<string, RespostaUsuario>;
  todasQuestoes: Questao[];
  onResetarTudo: () => void;
}

export const StatsModal: React.FC<StatsModalProps> = ({
  isOpen,
  onClose,
  historicoRespostas,
  todasQuestoes,
  onResetarTudo
}) => {
  if (!isOpen) return null;

  const totalRespondidas = Object.keys(historicoRespostas).length;
  const acertos = (Object.values(historicoRespostas) as RespostaUsuario[]).filter((r) => r.acertou).length;
  const erros = totalRespondidas - acertos;
  const taxaAcerto = totalRespondidas > 0 ? Math.round((acertos / totalRespondidas) * 100) : 0;

  // Por disciplina
  const questoesPorDisciplina: Record<string, { total: number; acertos: number }> = {};
  todasQuestoes.forEach((q) => {
    if (!questoesPorDisciplina[q.disciplina]) {
      questoesPorDisciplina[q.disciplina] = { total: 0, acertos: 0 };
    }
    const resp = historicoRespostas[q.id];
    if (resp) {
      questoesPorDisciplina[q.disciplina].total += 1;
      if (resp.acertou) {
        questoesPorDisciplina[q.disciplina].acertos += 1;
      }
    }
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-sm overflow-hidden shadow-2xl space-y-4 p-5 text-slate-100"
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-950 border border-blue-800 flex items-center justify-center text-amber-400">
              <Award className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold leading-tight">Desempenho no Simulado</h3>
              <p className="text-[10px] text-slate-400">Soldado PMBA 2026</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-slate-800 text-slate-400 hover:text-slate-200 flex items-center justify-center text-xs cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Big Percentage Badge */}
        <div className="bg-gradient-to-b from-[#081b36] to-slate-950 p-4 rounded-2xl border border-slate-800 text-center space-y-1">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
            Aproveitamento Geral
          </span>
          <div className="text-4xl font-black text-amber-400 font-mono tracking-tight">
            {totalRespondidas > 0 ? `${taxaAcerto}%` : '0%'}
          </div>
          <p className="text-xs text-slate-300">
            {taxaAcerto >= 70
              ? '🎯 Nível de Aprovação! Mantenha o ritmo.'
              : totalRespondidas > 0
              ? '📖 Revise a teoria dos pontos com erro.'
              : 'Comece a resolver para registrar seu aproveitamento.'}
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-3 gap-2 text-center text-xs">
          <div className="bg-slate-950/60 p-2.5 rounded-xl border border-slate-800">
            <span className="text-[10px] text-slate-400 block mb-0.5">Respondidas</span>
            <span className="text-base font-bold text-slate-200">{totalRespondidas}</span>
          </div>
          <div className="bg-emerald-950/40 p-2.5 rounded-xl border border-emerald-800/40">
            <span className="text-[10px] text-emerald-400 block mb-0.5">Acertos</span>
            <span className="text-base font-bold text-emerald-300">{acertos}</span>
          </div>
          <div className="bg-rose-950/40 p-2.5 rounded-xl border border-rose-800/40">
            <span className="text-[10px] text-rose-400 block mb-0.5">Erros</span>
            <span className="text-base font-bold text-rose-300">{erros}</span>
          </div>
        </div>

        {/* Disciplinas breakdown */}
        <div className="space-y-2 pt-1">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
            Por Disciplina Respondida:
          </span>
          <div className="max-h-36 overflow-y-auto space-y-1.5 pr-1">
            {Object.entries(questoesPorDisciplina).filter(([_, d]) => d.total > 0).length === 0 ? (
              <p className="text-[11px] text-slate-500 italic text-center py-2">
                Nenhuma questão respondida ainda.
              </p>
            ) : (
              Object.entries(questoesPorDisciplina)
                .filter(([_, d]) => d.total > 0)
                .map(([nome, data]) => {
                  const perc = Math.round((data.acertos / data.total) * 100);
                  return (
                    <div
                      key={nome}
                      className="p-2 rounded-lg bg-slate-950/40 border border-slate-800 flex items-center justify-between text-[11px]"
                    >
                      <span className="truncate pr-2 text-slate-300">{nome}</span>
                      <span className="font-mono font-bold text-amber-400 shrink-0">
                        {data.acertos}/{data.total} ({perc}%)
                      </span>
                    </div>
                  );
                })
            )}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-2 border-t border-slate-800 flex gap-2">
          <button
            onClick={() => {
              if (window.confirm('Deseja reiniciar todas as respostas do simulado?')) {
                onResetarTudo();
                onClose();
              }
            }}
            className="flex-1 py-2.5 px-3 rounded-xl border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer"
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
