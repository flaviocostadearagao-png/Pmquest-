import React, { useState } from 'react';
import {
  Zap,
  Target,
  Flame,
  Clock,
  TrendingUp,
  BrainCircuit,
  Award,
  Sparkles,
  RotateCcw,
  CheckCircle2,
  XCircle,
  Keyboard,
  Layers,
  ChevronRight,
  ShieldAlert,
  Sliders,
  Check
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Questao, RespostaUsuario, MetaEstudo, ConfigAltaPerformance } from '../types';
import { useTheme } from '../context/ThemeContext';

interface PainelAltaPerformanceProps {
  todasQuestoes: Questao[];
  historicoRespostas: Record<string, RespostaUsuario>;
  metaEstudo: MetaEstudo;
  onAtualizarMeta: (novaMeta: Partial<MetaEstudo>) => void;
  configAltaPerformance: ConfigAltaPerformance;
  onAtualizarConfig: (novaConfig: Partial<ConfigAltaPerformance>) => void;
  onIniciarTreinoCirurgico: () => void;
  onIniciarSimuladoOficial: () => void;
  onAbrirCadernoErros: () => void;
  isGerandoCirurgico: boolean;
}

export const PainelAltaPerformance: React.FC<PainelAltaPerformanceProps> = ({
  todasQuestoes,
  historicoRespostas,
  metaEstudo,
  onAtualizarMeta,
  configAltaPerformance,
  onAtualizarConfig,
  onIniciarTreinoCirurgico,
  onIniciarSimuladoOficial,
  onAbrirCadernoErros,
  isGerandoCirurgico,
}) => {
  const { isDark } = useTheme();
  const [showConfigModal, setShowConfigModal] = useState(false);

  // Calculate metrics
  const totalRespondidas = Object.keys(historicoRespostas).length;
  const acertos = (Object.values(historicoRespostas) as RespostaUsuario[]).filter((r) => r.acertou).length;
  const erros = totalRespondidas - acertos;
  const taxaGeral = totalRespondidas > 0 ? Math.round((acertos / totalRespondidas) * 100) : 0;

  // Calculate today's resolutions
  const hojeStr = new Date().toISOString().slice(0, 10);
  const respondidasHoje = (Object.values(historicoRespostas) as RespostaUsuario[]).filter((r) =>
    r.data ? r.data.startsWith(hojeStr) : false
  ).length;

  // Calculate top weak areas (subjects with highest error counts)
  const mapaErros: Record<string, { disciplina: string; assunto: string; erros: number; total: number }> = {};
  todasQuestoes.forEach((q) => {
    const resp = historicoRespostas[q.id];
    if (resp) {
      const chave = `${q.disciplina}::${q.assunto}`;
      if (!mapaErros[chave]) {
        mapaErros[chave] = { disciplina: q.disciplina, assunto: q.assunto, erros: 0, total: 0 };
      }
      mapaErros[chave].total += 1;
      if (!resp.acertou) {
        mapaErros[chave].erros += 1;
      }
    }
  });

  const pontosFracos = Object.values(mapaErros)
    .filter((item) => item.erros > 0)
    .sort((a, b) => b.erros - a.erros || (b.erros / b.total) - (a.erros / a.total))
    .slice(0, 3);

  // Goal calculations
  const metaMensal = metaEstudo.metaMensalQuestoes || 1000;
  const progressoMeta = Math.min(100, Math.round((totalRespondidas / metaMensal) * 100));

  return (
    <section
      id="painel-alta-performance"
      className={`rounded-3xl border p-4 sm:p-5 transition-all shadow-lg space-y-4 ${
        isDark
          ? 'bg-gradient-to-br from-[#0a182d] via-slate-900 to-[#071324] border-blue-900/40 text-slate-100'
          : 'bg-gradient-to-br from-blue-50/70 via-white to-indigo-50/40 border-blue-100 text-slate-800'
      }`}
    >
      {/* Top Header */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-500 flex items-center justify-center border border-amber-500/30">
            <BrainCircuit className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h3 className="text-sm font-extrabold tracking-tight">Gestor IA de Alto Rendimento</h3>
              <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-blue-600 text-white shadow-sm">
                TURBO
              </span>
            </div>
            <p className={`text-[11px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Otimizado para maratonas de milhares de questões/mês
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setShowConfigModal(!showConfigModal)}
          className={`p-2 rounded-xl border text-xs font-semibold flex items-center gap-1 cursor-pointer transition-colors ${
            isDark
              ? 'bg-slate-800/80 border-slate-700 text-slate-300 hover:bg-slate-700'
              : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
          }`}
          title="Ajustar Metas e Configurações de Desempenho"
        >
          <Sliders className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Ajustes</span>
        </button>
      </div>

      {/* Monthly Goal & Rhythm Bar */}
      <div
        className={`p-3.5 rounded-2xl border space-y-2.5 ${
          isDark ? 'bg-slate-950/60 border-slate-800/80' : 'bg-white/80 border-blue-100 shadow-sm'
        }`}
      >
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-1.5">
            <Target className="w-3.5 h-3.5 text-blue-500" />
            <span className="font-bold">Meta Mensal: {metaMensal.toLocaleString('pt-BR')} questões</span>
          </div>
          <span className="font-extrabold text-amber-500 font-mono">{progressoMeta}%</span>
        </div>

        {/* Progress bar */}
        <div className="w-full h-2.5 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden relative">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-blue-600 via-indigo-500 to-amber-500"
            initial={{ width: 0 }}
            animate={{ width: `${progressoMeta}%` }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />
        </div>

        {/* Rapid Stats Grid */}
        <div className="grid grid-cols-3 gap-2 pt-1 text-center">
          <div className={`p-2 rounded-xl border ${isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
            <span className={`text-[10px] block font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Hoje</span>
            <span className="text-xs sm:text-sm font-black text-blue-500 font-mono">
              {respondidasHoje} <span className="text-[10px] font-normal text-slate-400">q</span>
            </span>
          </div>

          <div className={`p-2 rounded-xl border ${isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
            <span className={`text-[10px] block font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Aproveitamento</span>
            <span className="text-xs sm:text-sm font-black text-emerald-500 font-mono">
              {taxaGeral}%
            </span>
          </div>

          <div className={`p-2 rounded-xl border ${isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
            <span className={`text-[10px] block font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Erros P/ Zerar</span>
            <span className="text-xs sm:text-sm font-black text-rose-500 font-mono">
              {erros}
            </span>
          </div>
        </div>
      </div>

      {/* Weak Points Diagnostic Banner if user has errors */}
      {pontosFracos.length > 0 && (
        <div
          className={`p-3 rounded-2xl border space-y-2 ${
            isDark ? 'bg-rose-950/20 border-rose-900/40 text-rose-200' : 'bg-rose-50/80 border-rose-200 text-rose-900'
          }`}
        >
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-1.5 font-bold">
              <ShieldAlert className="w-3.5 h-3.5 text-rose-500" />
              <span>Diagnóstico de Vulnerabilidades da IA:</span>
            </div>
            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-400">
              Prioridade Alta
            </span>
          </div>

          <div className="space-y-1 text-[11px]">
            {pontosFracos.map((pf, idx) => (
              <div key={idx} className="flex items-center justify-between gap-2">
                <span className="truncate font-medium">
                  {pf.disciplina}: <span className="opacity-80">{pf.assunto}</span>
                </span>
                <span className="font-mono font-bold text-rose-500 shrink-0">
                  {pf.erros} erro{pf.erros > 1 ? 's' : ''}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Main High-Performance AI Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
        {/* Surgical Training CTA */}
        <button
          id="btn-treino-cirurgico-ia"
          type="button"
          onClick={onIniciarTreinoCirurgico}
          disabled={isGerandoCirurgico}
          className="relative overflow-hidden group py-3 px-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-xs flex items-center justify-between shadow-md shadow-amber-900/20 transition-all cursor-pointer disabled:opacity-50"
        >
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-xl bg-black/15 flex items-center justify-center">
              <Zap className="w-4 h-4 fill-slate-950" />
            </div>
            <div className="text-left">
              <span className="block leading-tight font-black">
                {isGerandoCirurgico ? 'Gerando Treino...' : 'Treino Cirúrgico IA'}
              </span>
              <span className="text-[10px] opacity-85 block font-medium">Foco nos seus pontos fracos</span>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 opacity-75 group-hover:translate-x-0.5 transition-transform" />
        </button>

        {/* Full Mock Simulation */}
        <button
          id="btn-simulado-oficial-pmba"
          type="button"
          onClick={onIniciarSimuladoOficial}
          className="relative overflow-hidden group py-3 px-3.5 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-extrabold text-xs flex items-center justify-between shadow-md shadow-blue-900/30 transition-all cursor-pointer"
        >
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-xl bg-white/20 flex items-center justify-center">
              <Award className="w-4 h-4" />
            </div>
            <div className="text-left">
              <span className="block leading-tight font-black">Simulado PMBA Oficial</span>
              <span className="text-[10px] text-blue-100 block font-medium">Equilibrado pelo edital</span>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 opacity-75 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      {/* Caderno de Erros Quick Button if errors exist */}
      {erros > 0 && (
        <button
          id="btn-caderno-erros-rapido"
          type="button"
          onClick={onAbrirCadernoErros}
          className={`w-full py-2.5 px-3 rounded-2xl border text-xs font-bold flex items-center justify-center gap-2 cursor-pointer transition-colors ${
            isDark
              ? 'bg-rose-950/40 border-rose-900/50 hover:bg-rose-900/40 text-rose-300'
              : 'bg-rose-50 border-rose-200 hover:bg-rose-100 text-rose-700'
          }`}
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Caderno de Erros: Refazer {erros} Questão{erros > 1 ? 'ões' : ''} Pendente{erros > 1 ? 's' : ''}</span>
        </button>
      )}

      {/* Modal / Panel of Settings */}
      <AnimatePresence>
        {showConfigModal && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`pt-3 border-t space-y-3 ${isDark ? 'border-slate-800' : 'border-slate-200'}`}
          >
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Personalização de Alta Performance
            </h4>

            {/* Target Select */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-semibold block text-slate-400">
                Sua Meta de Resoluções por Mês:
              </label>
              <div className="grid grid-cols-4 gap-1.5 text-xs font-bold font-mono">
                {[500, 1000, 2000, 3000].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => onAtualizarMeta({ metaMensalQuestoes: num })}
                    className={`py-1.5 rounded-xl border text-center transition-all cursor-pointer ${
                      metaMensal === num
                        ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-sm'
                        : isDark
                        ? 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800'
                        : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {num} q
                  </button>
                ))}
              </div>
            </div>

            {/* Toggles */}
            <div className="space-y-2 pt-1 text-xs">
              <label className="flex items-center justify-between p-2 rounded-xl border cursor-pointer select-none bg-slate-900/30 border-slate-800">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <div>
                    <span className="font-semibold block">Pré-carregamento IA em Segundo Plano</span>
                    <span className={`text-[10px] block ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                      Gera o próximo lote antes que você termine a fila atual (Zero Espera).
                    </span>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={configAltaPerformance.autoPrefetch}
                  onChange={(e) => onAtualizarConfig({ autoPrefetch: e.target.checked })}
                  className="w-4 h-4 rounded text-blue-600 focus:ring-0 cursor-pointer"
                />
              </label>

              <label className="flex items-center justify-between p-2 rounded-xl border cursor-pointer select-none bg-slate-900/30 border-slate-800">
                <div className="flex items-center gap-2">
                  <Keyboard className="w-3.5 h-3.5 text-blue-400" />
                  <div>
                    <span className="font-semibold block">Atalhos Rápidos de Teclado</span>
                    <span className={`text-[10px] block ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                      Pressione <kbd className="px-1 py-0.5 rounded bg-slate-800 border text-[9px]">A-E</kbd> para marcar, <kbd className="px-1 py-0.5 rounded bg-slate-800 border text-[9px]">Enter</kbd> para confirmar e <kbd className="px-1 py-0.5 rounded bg-slate-800 border text-[9px]">Espaço</kbd> para o Bizu.
                    </span>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={configAltaPerformance.atalhosTeclado}
                  onChange={(e) => onAtualizarConfig({ atalhosTeclado: e.target.checked })}
                  className="w-4 h-4 rounded text-blue-600 focus:ring-0 cursor-pointer"
                />
              </label>

              <label className="flex items-center justify-between p-2 rounded-xl border cursor-pointer select-none bg-slate-900/30 border-slate-800">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-emerald-400" />
                  <div>
                    <span className="font-semibold block">Cronômetro de Ritmo de Prova</span>
                    <span className={`text-[10px] block ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                      Exibe o tempo em cada questão com meta de até 3 minutos por questão.
                    </span>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={configAltaPerformance.cronometroRitmoAtivo}
                  onChange={(e) => onAtualizarConfig({ cronometroRitmoAtivo: e.target.checked })}
                  className="w-4 h-4 rounded text-blue-600 focus:ring-0 cursor-pointer"
                />
              </label>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
