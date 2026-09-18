import React, { useRef, useEffect } from 'react';
import {
  Zap,
  BookOpen,
  PenTool,
  BarChart3,
  Target,
  Sparkles,
  Sun,
  Moon,
  RotateCcw,
  Sliders,
  CheckCircle2,
  HelpCircle,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from '../context/ThemeContext';

export interface ThreeDotsMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectAction: (actionId: string) => void;
}

export const ThreeDotsMenu: React.FC<ThreeDotsMenuProps> = ({
  isOpen,
  onClose,
  onSelectAction,
}) => {
  const { isDark, toggleTheme } = useTheme();
  const menuRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen, onClose]);

  const handleAction = (actionId: string) => {
    onSelectAction(actionId);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-end p-3 sm:p-4 bg-black/50 backdrop-blur-xs">
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.15 }}
            className={`w-full max-w-[280px] rounded-2xl border shadow-2xl overflow-hidden mt-12 sm:mt-14 ${
              isDark
                ? 'bg-[#08172c] border-slate-700 text-slate-100'
                : 'bg-white border-slate-200 text-slate-900'
            }`}
          >
            {/* Header do Menu */}
            <div
              className={`px-3.5 py-2.5 border-b flex items-center justify-between ${
                isDark ? 'bg-[#0b1e38] border-slate-700/80' : 'bg-slate-50 border-slate-200'
              }`}
            >
              <span className="text-xs font-black uppercase tracking-wider text-amber-500">
                Menu de Opções
              </span>
              <button
                type="button"
                onClick={onClose}
                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold cursor-pointer ${
                  isDark ? 'hover:bg-slate-800 text-slate-400' : 'hover:bg-slate-200 text-slate-600'
                }`}
              >
                ✕
              </button>
            </div>

            {/* Menu Items */}
            <div className="p-1.5 space-y-0.5 text-xs">
              {/* Item: Cobertura do Edital */}
              <button
                id="menu-opt-cobertura"
                type="button"
                onClick={() => handleAction('cobertura_edital')}
                className={`w-full px-3 py-2 rounded-xl flex items-center gap-2.5 font-bold transition-colors cursor-pointer text-left ${
                  isDark ? 'hover:bg-slate-800 text-amber-400' : 'hover:bg-amber-50 text-amber-900'
                }`}
              >
                <div className="w-6 h-6 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-500 shrink-0">
                  <Target className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="block leading-tight">Cobertura do Edital</span>
                    <span className="text-[9px] px-1 py-0.2 rounded bg-amber-500/20 text-amber-400 font-extrabold">
                      Meta
                    </span>
                  </div>
                  <span className={`text-[10px] font-normal block ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    Matriz de tópicos e metas
                  </span>
                </div>
              </button>

              {/* Item: Flashcards de Bizus Rápidos */}
              <button
                id="menu-opt-flashcards"
                type="button"
                onClick={() => handleAction('flashcards')}
                className={`w-full px-3 py-2 rounded-xl flex items-center gap-2.5 font-bold transition-colors cursor-pointer text-left ${
                  isDark ? 'hover:bg-slate-800 text-amber-400' : 'hover:bg-amber-50 text-amber-900'
                }`}
              >
                <div className="w-6 h-6 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-500 shrink-0">
                  <Zap className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="block leading-tight">Flashcards de Bizus</span>
                  <span className={`text-[10px] font-normal block ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    Mnemônicos e fixação ativa
                  </span>
                </div>
              </button>

              {/* Item: Aba da Teoria & Resumos */}
              <button
                id="menu-opt-teoria"
                type="button"
                onClick={() => handleAction('teoria')}
                className={`w-full px-3 py-2 rounded-xl flex items-center gap-2.5 font-semibold transition-colors cursor-pointer text-left ${
                  isDark ? 'hover:bg-slate-800 text-slate-200' : 'hover:bg-slate-100 text-slate-800'
                }`}
              >
                <div className="w-6 h-6 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  <BookOpen className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="block leading-tight">Teoria & Resumos</span>
                  <span className={`text-[10px] font-normal block ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    Conteúdo completo do edital
                  </span>
                </div>
              </button>

              {/* Item: Redação Discursiva */}
              <button
                id="menu-opt-redacao"
                type="button"
                onClick={() => handleAction('redacao')}
                className={`w-full px-3 py-2 rounded-xl flex items-center gap-2.5 font-semibold transition-colors cursor-pointer text-left ${
                  isDark ? 'hover:bg-slate-800 text-slate-200' : 'hover:bg-slate-100 text-slate-800'
                }`}
              >
                <div className="w-6 h-6 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                  <PenTool className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="block leading-tight">Oficina de Redação</span>
                  <span className={`text-[10px] font-normal block ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    Temas e modelo dissertativo
                  </span>
                </div>
              </button>

              {/* Item: Estatísticas & Gráficos */}
              <button
                id="menu-opt-stats"
                type="button"
                onClick={() => handleAction('estatisticas')}
                className={`w-full px-3 py-2 rounded-xl flex items-center gap-2.5 font-semibold transition-colors cursor-pointer text-left ${
                  isDark ? 'hover:bg-slate-800 text-slate-200' : 'hover:bg-slate-100 text-slate-800'
                }`}
              >
                <div className="w-6 h-6 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                  <BarChart3 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="block leading-tight">Desempenho por Matéria</span>
                  <span className={`text-[10px] font-normal block ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    Gráficos e notas de corte
                  </span>
                </div>
              </button>

              {/* Item: Gerador de Questões IA */}
              <button
                id="menu-opt-gerador"
                type="button"
                onClick={() => handleAction('gerador_ia')}
                className={`w-full px-3 py-2 rounded-xl flex items-center gap-2.5 font-bold transition-colors cursor-pointer text-left ${
                  isDark ? 'hover:bg-slate-800 text-amber-400' : 'hover:bg-amber-50 text-amber-900'
                }`}
              >
                <div className="w-6 h-6 rounded-lg bg-amber-500 flex items-center justify-center text-slate-950 shrink-0 font-bold">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="block leading-tight">Gerador de Questões com IA</span>
                  <span className={`text-[10px] font-normal block ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    Criar questões inéditas
                  </span>
                </div>
              </button>

              <div className="my-1 border-t border-slate-700/50" />

              {/* Alternar Tema */}
              <button
                type="button"
                onClick={() => {
                  toggleTheme();
                  onClose();
                }}
                className={`w-full px-3 py-2 rounded-xl flex items-center gap-2.5 font-medium transition-colors cursor-pointer text-left ${
                  isDark ? 'hover:bg-slate-800 text-slate-300' : 'hover:bg-slate-100 text-slate-700'
                }`}
              >
                <div className="w-6 h-6 rounded-lg bg-slate-700/40 flex items-center justify-center text-amber-400 shrink-0">
                  {isDark ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
                </div>
                <span>{isDark ? 'Tema Claro' : 'Tema Escuro (Tático)'}</span>
              </button>

              {/* Resetar Progresso */}
              <button
                id="menu-opt-reset"
                type="button"
                onClick={() => handleAction('resetar_simulado')}
                className="w-full px-3 py-2 rounded-xl flex items-center gap-2.5 font-medium transition-colors cursor-pointer text-left text-red-400 hover:bg-red-500/10"
              >
                <div className="w-6 h-6 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400 shrink-0">
                  <RotateCcw className="w-3.5 h-3.5" />
                </div>
                <span>Resetar Histórico / Simulado</span>
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
