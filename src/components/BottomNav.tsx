import React from 'react';
import { Home, CheckSquare, BookOpen, PenTool } from 'lucide-react';
import { motion } from 'motion/react';
import { useTheme } from '../context/ThemeContext';

export type ActiveTab = 'inicio' | 'questoes' | 'teoria' | 'redacao';

interface BottomNavProps {
  activeTab: ActiveTab;
  onTabChange: (tab: ActiveTab) => void;
  questoesCount?: number;
  questoesRespondidas?: number;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  activeTab,
  onTabChange,
  questoesCount = 24,
  questoesRespondidas = 0,
}) => {
  const { isDark } = useTheme();

  return (
    <nav
      id="bottom-nav-bar"
      aria-label="Navegação Principal"
      className={`fixed bottom-0 left-0 right-0 z-40 pb-[env(safe-area-inset-bottom,0px)] transition-colors duration-200 ${
        isDark
          ? 'bg-[#071326]/95 backdrop-blur-xl border-t border-slate-800/90 shadow-2xl'
          : 'bg-white/95 backdrop-blur-xl border-t border-slate-200 shadow-lg'
      }`}
    >
      <div className="max-w-md mx-auto grid grid-cols-4 px-2 py-1.5 gap-1.5">
        {/* Aba 1: Início / Painel */}
        <button
          id="tab-btn-inicio"
          type="button"
          onClick={() => onTabChange('inicio')}
          className={`relative flex flex-col items-center justify-center min-h-[50px] py-1 px-1 rounded-xl transition-all duration-200 cursor-pointer select-none active:scale-95 ${
            activeTab === 'inicio'
              ? isDark ? 'text-amber-400 font-bold' : 'text-blue-900 font-bold'
              : isDark ? 'text-slate-400 hover:text-slate-200 font-medium' : 'text-slate-500 hover:text-slate-800 font-medium'
          }`}
        >
          {activeTab === 'inicio' && (
            <motion.div
              layoutId="active-tab-glow"
              className={`absolute inset-0 rounded-xl ${
                isDark
                  ? 'bg-gradient-to-t from-blue-900/40 to-slate-800/70 border border-blue-600/40'
                  : 'bg-blue-50/90 border border-blue-200 shadow-xs'
              }`}
              transition={{ type: 'spring', stiffness: 350, damping: 30 }}
            />
          )}

          <div className="relative z-10 flex flex-col items-center">
            <Home
              className={`w-5 h-5 transition-transform ${
                activeTab === 'inicio'
                  ? `scale-110 ${isDark ? 'text-amber-400' : 'text-blue-700'}`
                  : isDark ? 'text-slate-400' : 'text-slate-500'
              }`}
            />
            <span className="text-[11px] mt-1 tracking-tight leading-none">
              Início
            </span>
          </div>
        </button>

        {/* Aba 2: Resolver Questões */}
        <button
          id="tab-btn-questoes"
          type="button"
          onClick={() => onTabChange('questoes')}
          className={`relative flex flex-col items-center justify-center min-h-[50px] py-1 px-1 rounded-xl transition-all duration-200 cursor-pointer select-none active:scale-95 ${
            activeTab === 'questoes'
              ? isDark ? 'text-amber-400 font-bold' : 'text-blue-900 font-bold'
              : isDark ? 'text-slate-400 hover:text-slate-200 font-medium' : 'text-slate-500 hover:text-slate-800 font-medium'
          }`}
        >
          {activeTab === 'questoes' && (
            <motion.div
              layoutId="active-tab-glow"
              className={`absolute inset-0 rounded-xl ${
                isDark
                  ? 'bg-gradient-to-t from-blue-900/40 to-slate-800/70 border border-blue-600/40'
                  : 'bg-blue-50/90 border border-blue-200 shadow-xs'
              }`}
              transition={{ type: 'spring', stiffness: 350, damping: 30 }}
            />
          )}

          <div className="relative z-10 flex flex-col items-center">
            <div className="relative">
              <CheckSquare
                className={`w-5 h-5 transition-transform ${
                  activeTab === 'questoes'
                    ? `scale-110 ${isDark ? 'text-amber-400' : 'text-blue-700'}`
                    : isDark ? 'text-slate-400' : 'text-slate-500'
                }`}
              />
              {questoesRespondidas > 0 && (
                <span className={`absolute -top-1 -right-2 px-1 py-0.2 text-white text-[9px] font-extrabold rounded-full min-w-[13px] text-center border ${
                  isDark ? 'bg-blue-600 border-slate-900' : 'bg-blue-700 border-white'
                }`}>
                  {questoesRespondidas}/{questoesCount}
                </span>
              )}
            </div>
            <span className="text-[11px] mt-1 tracking-tight leading-none">
              Questões
            </span>
          </div>
        </button>

        {/* Aba 3: Estudar Teoria */}
        <button
          id="tab-btn-teoria"
          type="button"
          onClick={() => onTabChange('teoria')}
          className={`relative flex flex-col items-center justify-center min-h-[50px] py-1 px-1 rounded-xl transition-all duration-200 cursor-pointer select-none active:scale-95 ${
            activeTab === 'teoria'
              ? isDark ? 'text-amber-400 font-bold' : 'text-blue-900 font-bold'
              : isDark ? 'text-slate-400 hover:text-slate-200 font-medium' : 'text-slate-500 hover:text-slate-800 font-medium'
          }`}
        >
          {activeTab === 'teoria' && (
            <motion.div
              layoutId="active-tab-glow"
              className={`absolute inset-0 rounded-xl ${
                isDark
                  ? 'bg-gradient-to-t from-blue-900/40 to-slate-800/70 border border-blue-600/40'
                  : 'bg-blue-50/90 border border-blue-200 shadow-xs'
              }`}
              transition={{ type: 'spring', stiffness: 350, damping: 30 }}
            />
          )}

          <div className="relative z-10 flex flex-col items-center">
            <BookOpen
              className={`w-5 h-5 transition-transform ${
                activeTab === 'teoria'
                  ? `scale-110 ${isDark ? 'text-amber-400' : 'text-blue-700'}`
                  : isDark ? 'text-slate-400' : 'text-slate-500'
              }`}
            />
            <span className="text-[11px] mt-1 tracking-tight leading-none">
              Teoria
            </span>
          </div>
        </button>

        {/* Aba 4: Redação */}
        <button
          id="tab-btn-redacao"
          type="button"
          onClick={() => onTabChange('redacao')}
          className={`relative flex flex-col items-center justify-center min-h-[50px] py-1 px-1 rounded-xl transition-all duration-200 cursor-pointer select-none active:scale-95 ${
            activeTab === 'redacao'
              ? isDark ? 'text-amber-400 font-bold' : 'text-blue-900 font-bold'
              : isDark ? 'text-slate-400 hover:text-slate-200 font-medium' : 'text-slate-500 hover:text-slate-800 font-medium'
          }`}
        >
          {activeTab === 'redacao' && (
            <motion.div
              layoutId="active-tab-glow"
              className={`absolute inset-0 rounded-xl ${
                isDark
                  ? 'bg-gradient-to-t from-blue-900/40 to-slate-800/70 border border-blue-600/40'
                  : 'bg-blue-50/90 border border-blue-200 shadow-xs'
              }`}
              transition={{ type: 'spring', stiffness: 350, damping: 30 }}
            />
          )}

          <div className="relative z-10 flex flex-col items-center">
            <PenTool
              className={`w-5 h-5 transition-transform ${
                activeTab === 'redacao'
                  ? `scale-110 ${isDark ? 'text-amber-400' : 'text-blue-700'}`
                  : isDark ? 'text-slate-400' : 'text-slate-500'
              }`}
            />
            <span className="text-[11px] mt-1 tracking-tight leading-none">
              Redação
            </span>
          </div>
        </button>
      </div>
    </nav>
  );
};

