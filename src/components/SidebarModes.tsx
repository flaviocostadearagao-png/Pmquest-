import React from 'react';
import {
  X,
  Dices,
  Target,
  Flame,
  Shield,
  BookMarked,
  BookOpen,
  PenTool,
  Zap,
  Sparkles,
  BarChart3,
  CheckCircle2,
  Layers,
  ChevronRight,
  Compass
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from '../context/ThemeContext';
import { MateriaEdital } from '../types';

export interface SidebarModesProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectModo: (modoId: string, extraParam?: string) => void;
  totalRespondidas: number;
  taxaAcerto: number;
  materias: MateriaEdital[];
  errosCount: number;
}

export const SidebarModes: React.FC<SidebarModesProps> = ({
  isOpen,
  onClose,
  onSelectModo,
  totalRespondidas,
  taxaAcerto,
  materias,
  errosCount,
}) => {
  const { isDark } = useTheme();

  const handleAction = (modoId: string, extraParam?: string) => {
    onSelectModo(modoId, extraParam);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-xs cursor-pointer"
          />

          {/* Drawer Sidebar */}
          <motion.aside
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 26, stiffness: 240 }}
            className={`relative w-[320px] max-w-[85vw] h-full flex flex-col z-10 shadow-2xl overflow-hidden border-r ${
              isDark
                ? 'bg-slate-950 border-slate-800 text-slate-100'
                : 'bg-white border-slate-200 text-slate-900'
            }`}
          >
            {/* Header da Barra Lateral */}
            <div
              className={`p-4 border-b flex items-center justify-between shrink-0 ${
                isDark ? 'bg-slate-900 border-slate-800/80' : 'bg-blue-900 text-white'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-400 font-bold">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-sm font-black tracking-tight leading-tight">
                    Todos os Modos PMBA
                  </h2>
                  <p className={`text-[10px] ${isDark ? 'text-slate-400' : 'text-blue-200'}`}>
                    Navegação tática de estudos
                  </p>
                </div>
              </div>

              <button
                id="sidebar-close-btn"
                onClick={onClose}
                className={`w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-colors ${
                  isDark
                    ? 'bg-slate-800/80 hover:bg-slate-700 text-slate-300'
                    : 'bg-white/20 hover:bg-white/30 text-white'
                }`}
                title="Fechar Menu Lateral"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* User Mini Performance Summary */}
            <div
              className={`px-4 py-2.5 border-b text-xs flex items-center justify-between ${
                isDark ? 'bg-slate-950/60 border-slate-800/80' : 'bg-slate-50 border-slate-200'
              }`}
            >
              <div className="flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-amber-500" />
                <span className="font-semibold text-[11px]">Soldado PMBA</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] font-mono">
                <span>{totalRespondidas} resolvidas</span>
                <span className="text-slate-500">•</span>
                <span className={taxaAcerto >= 70 ? 'text-emerald-500 font-bold' : 'text-amber-500 font-bold'}>
                  {taxaAcerto}% acertos
                </span>
              </div>
            </div>

            {/* List of Modes (Scrollable) */}
            <div className="flex-1 overflow-y-auto p-3 space-y-3.5 text-xs">
              {/* Seção 1: Modos de Simulado e Questões */}
              <div className="space-y-1.5">
                <span className={`text-[10px] font-black uppercase tracking-wider px-2 block ${
                  isDark ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  Modos de Simulado & Questões
                </span>

                {/* Modo 1: Simulado Geral Misto */}
                <button
                  id="sidebar-mode-misto"
                  type="button"
                  onClick={() => handleAction('simulado_misto')}
                  className={`w-full p-2.5 rounded-xl border flex items-center justify-between text-left transition-all cursor-pointer group ${
                    isDark
                      ? 'bg-slate-900/90 border-slate-800 hover:border-amber-500/50 hover:bg-slate-850'
                      : 'bg-white border-slate-200 hover:border-blue-400 hover:bg-blue-50/50 shadow-2xs'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 border border-purple-500/30 flex items-center justify-center shrink-0">
                      <Dices className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold text-xs">Simulado Geral Misto</span>
                        <span className="text-[9px] px-1 rounded bg-purple-500/20 text-purple-400 font-extrabold">
                          PMBA
                        </span>
                      </div>
                      <p className={`text-[10px] leading-tight ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                        Todas as matérias misturadas aleatoriamente
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-amber-500 transition-colors shrink-0" />
                </button>

                {/* Modo 2: Treino Cirúrgico (Pontos Fracos) */}
                <button
                  id="sidebar-mode-cirurgico"
                  type="button"
                  onClick={() => handleAction('treino_cirurgico')}
                  className={`w-full p-2.5 rounded-xl border flex items-center justify-between text-left transition-all cursor-pointer group ${
                    isDark
                      ? 'bg-slate-900/90 border-slate-800 hover:border-amber-500/50 hover:bg-slate-850'
                      : 'bg-white border-slate-200 hover:border-blue-400 hover:bg-blue-50/50 shadow-2xs'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-red-500/20 text-red-400 border border-red-500/30 flex items-center justify-center shrink-0">
                      <Target className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold text-xs">Treino Cirúrgico</span>
                      <p className={`text-[10px] leading-tight ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                        Foco nas matérias com mais erros
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-amber-500 transition-colors shrink-0" />
                </button>

                {/* Modo 3: Maratona Turbo */}
                <button
                  id="sidebar-mode-maratona"
                  type="button"
                  onClick={() => handleAction('maratona_turbo')}
                  className={`w-full p-2.5 rounded-xl border flex items-center justify-between text-left transition-all cursor-pointer group ${
                    isDark
                      ? 'bg-slate-900/90 border-slate-800 hover:border-amber-500/50 hover:bg-slate-850'
                      : 'bg-white border-slate-200 hover:border-blue-400 hover:bg-blue-50/50 shadow-2xs'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center shrink-0">
                      <Flame className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold text-xs">Maratona Turbo</span>
                      <p className={`text-[10px] leading-tight ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                        Questões em sequência rápida para ritmo
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-amber-500 transition-colors shrink-0" />
                </button>

                {/* Modo 4: Simulado Oficial PMBA */}
                <button
                  id="sidebar-mode-oficial"
                  type="button"
                  onClick={() => handleAction('simulado_oficial')}
                  className={`w-full p-2.5 rounded-xl border flex items-center justify-between text-left transition-all cursor-pointer group ${
                    isDark
                      ? 'bg-slate-900/90 border-slate-800 hover:border-amber-500/50 hover:bg-slate-850'
                      : 'bg-white border-slate-200 hover:border-blue-400 hover:bg-blue-50/50 shadow-2xs'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 border border-blue-500/30 flex items-center justify-center shrink-0">
                      <Shield className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold text-xs">Simulado Oficial PMBA</span>
                      <p className={`text-[10px] leading-tight ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                        Padrão oficial da banca FCC / IBFC
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-amber-500 transition-colors shrink-0" />
                </button>

                {/* Modo 5: Caderno de Erros */}
                <button
                  id="sidebar-mode-caderno-erros"
                  type="button"
                  onClick={() => handleAction('caderno_erros')}
                  className={`w-full p-2.5 rounded-xl border flex items-center justify-between text-left transition-all cursor-pointer group ${
                    isDark
                      ? 'bg-slate-900/90 border-slate-800 hover:border-amber-500/50 hover:bg-slate-850'
                      : 'bg-white border-slate-200 hover:border-blue-400 hover:bg-blue-50/50 shadow-2xs'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-rose-500/20 text-rose-400 border border-rose-500/30 flex items-center justify-center shrink-0">
                      <BookMarked className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold text-xs">Caderno de Erros</span>
                        {errosCount > 0 && (
                          <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-rose-500 text-white font-bold">
                            {errosCount}
                          </span>
                        )}
                      </div>
                      <p className={`text-[10px] leading-tight ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                        Revisar apenas as que você errou
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-amber-500 transition-colors shrink-0" />
                </button>
              </div>

              {/* Seção 2: Ferramentas & Aprendizagem */}
              <div className="space-y-1.5 pt-2 border-t border-slate-800/40">
                <span className={`text-[10px] font-black uppercase tracking-wider px-2 block ${
                  isDark ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  Fixação & Ferramentas
                </span>

                {/* Cobertura do Edital (Bater o Edital) */}
                <button
                  id="sidebar-mode-cobertura"
                  type="button"
                  onClick={() => handleAction('cobertura_edital')}
                  className={`w-full p-2.5 rounded-xl border flex items-center justify-between text-left transition-all cursor-pointer group ${
                    isDark
                      ? 'bg-slate-900/90 border-slate-800 hover:border-amber-500/50 hover:bg-slate-850'
                      : 'bg-white border-slate-200 hover:border-blue-400 hover:bg-blue-50/50 shadow-2xs'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center shrink-0">
                      <Target className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold text-xs">Cobertura do Edital</span>
                        <span className="text-[9px] px-1 rounded bg-amber-500/20 text-amber-400 font-extrabold">
                          Novo
                        </span>
                      </div>
                      <p className={`text-[10px] leading-tight ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                        Metas de questões certas por assunto
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-amber-500 transition-colors shrink-0" />
                </button>

                {/* Flashcards de Bizus Rápidos */}
                <button
                  id="sidebar-mode-flashcards"
                  type="button"
                  onClick={() => handleAction('flashcards')}
                  className={`w-full p-2.5 rounded-xl border flex items-center justify-between text-left transition-all cursor-pointer group ${
                    isDark
                      ? 'bg-slate-900/90 border-slate-800 hover:border-amber-500/50 hover:bg-slate-850'
                      : 'bg-white border-slate-200 hover:border-blue-400 hover:bg-blue-50/50 shadow-2xs'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center shrink-0">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold text-xs">Flashcards de Bizus</span>
                      <p className={`text-[10px] leading-tight ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                        Mnemônicos e pegadinhas de prova
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-amber-500 transition-colors shrink-0" />
                </button>

                {/* Teoria & Resumos */}
                <button
                  id="sidebar-mode-teoria"
                  type="button"
                  onClick={() => handleAction('teoria')}
                  className={`w-full p-2.5 rounded-xl border flex items-center justify-between text-left transition-all cursor-pointer group ${
                    isDark
                      ? 'bg-slate-900/90 border-slate-800 hover:border-amber-500/50 hover:bg-slate-850'
                      : 'bg-white border-slate-200 hover:border-blue-400 hover:bg-blue-50/50 shadow-2xs'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center shrink-0">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold text-xs">Teoria & Resumos</span>
                      <p className={`text-[10px] leading-tight ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                        Resumos dos tópicos do edital PMBA
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-amber-500 transition-colors shrink-0" />
                </button>

                {/* Oficina de Redação */}
                <button
                  id="sidebar-mode-redacao"
                  type="button"
                  onClick={() => handleAction('redacao')}
                  className={`w-full p-2.5 rounded-xl border flex items-center justify-between text-left transition-all cursor-pointer group ${
                    isDark
                      ? 'bg-slate-900/90 border-slate-800 hover:border-amber-500/50 hover:bg-slate-850'
                      : 'bg-white border-slate-200 hover:border-blue-400 hover:bg-blue-50/50 shadow-2xs'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center shrink-0">
                      <PenTool className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold text-xs">Oficina de Redação</span>
                      <p className={`text-[10px] leading-tight ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                        Temas e estrutura nota 100
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-amber-500 transition-colors shrink-0" />
                </button>

                {/* Gerador com IA */}
                <button
                  id="sidebar-mode-gerador-ia"
                  type="button"
                  onClick={() => handleAction('gerador_ia')}
                  className={`w-full p-2.5 rounded-xl border flex items-center justify-between text-left transition-all cursor-pointer group ${
                    isDark
                      ? 'bg-gradient-to-r from-blue-950/60 to-slate-900 border-blue-800/40 hover:border-amber-500/50'
                      : 'bg-gradient-to-r from-blue-50 to-white border-blue-200 hover:border-blue-400'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-amber-500 text-slate-950 font-black flex items-center justify-center shrink-0">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold text-xs text-amber-500">Gerador Inédito com IA</span>
                      <p className={`text-[10px] leading-tight ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                        Criar novas questões de qualquer matéria
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-amber-500 shrink-0" />
                </button>
              </div>

              {/* Seção 3: Disciplinas Diretas */}
              <div className="space-y-1.5 pt-2 border-t border-slate-800/40">
                <span className={`text-[10px] font-black uppercase tracking-wider px-2 block ${
                  isDark ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  Treinar por Matéria Específica
                </span>

                <div className="grid grid-cols-1 gap-1">
                  {materias.map((m) => (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => handleAction('materia_especifica', m.nome)}
                      className={`w-full px-2.5 py-2 rounded-lg text-left text-[11px] font-semibold flex items-center justify-between transition-colors cursor-pointer ${
                        isDark
                          ? 'hover:bg-slate-800 text-slate-300 hover:text-white'
                          : 'hover:bg-slate-100 text-slate-700 hover:text-slate-900'
                      }`}
                    >
                      <span className="truncate">{m.nome}</span>
                      <span className={`text-[10px] ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                        {m.totalQuestoesEdital}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer com versão e atalho de estatísticas */}
            <div
              className={`p-3 border-t flex items-center justify-between ${
                isDark ? 'bg-slate-950 border-slate-800/60' : 'bg-slate-50 border-slate-200'
              }`}
            >
              <button
                type="button"
                onClick={() => handleAction('estatisticas')}
                className="flex items-center gap-1.5 text-xs font-bold text-amber-500 hover:text-amber-400 cursor-pointer"
              >
                <BarChart3 className="w-4 h-4" />
                <span>Ver Estatísticas Completas</span>
              </button>
              <span className={`text-[10px] font-mono ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                v2.6
              </span>
            </div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
};
