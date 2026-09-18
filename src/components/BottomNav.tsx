import React from 'react';
import { Home, CheckSquare, BookOpen, PenTool, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { useTheme } from '../context/ThemeContext';

export type ActiveTab = 'inicio' | 'questoes' | 'teoria' | 'redacao' | 'caderno_ia';

interface BottomNavProps {
  activeTab: ActiveTab;
  onTabChange: (tab: ActiveTab) => void;
  questoesCount?: number;
  questoesRespondidas?: number;
  questoesAICount?: number;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  activeTab,
  onTabChange,
  questoesCount = 24,
  questoesRespondidas = 0,
  questoesAICount = 0,
}) => {
  const { isDark } = useTheme();

  return (
    <nav
      id="bottom-nav-bar"
      aria-label="Navegação Principal"
      className={`fixed bottom-0 left-0 right-0 z-40 pb-[env(safe-area-inset-bottom,0px)] transition-colors duration-200 ${
        isDark
          ? 'bg-tactical-900/95 backdrop-blur-xl border-t border-tactical-700/50 shadow-2xl'
          : 'bg-white/95 backdrop-blur-xl border-t border-slate-200 shadow-lg'
      }`}
    >
      <div className="max-w-xl mx-auto grid grid-cols-5 px-1 py-1.5 gap-1">
        {/* Aba 1: Início / Painel */}
        <button
          id="tab-btn-inicio"
          type="button"
          onClick={() => onTabChange('inicio')}
          className={`relative flex flex-col items-center justify-center min-h-[50px] py-1 px-1 rounded-xl transition-all duration-200 cursor-pointer select-none active:scale-95 ${
            activeTab === 'inicio'
              ? isDark ? 'text-tactical-accent font-bold' : 'text-tactical-700 font-bold'
              : isDark ? 'text-slate-500 hover:text-slate-300 font-medium' : 'text-slate-500 hover:text-slate-800 font-medium'
          }`}
        >
          {activeTab === 'inicio' && (
            <motion.div
              layoutId="active-tab-glow"
              className={`absolute inset-0 rounded-xl ${
                isDark
                  ? 'bg-gradient-to-t from-tactical-700/40 to-tactical-800/70 border border-tactical-accent/40'
                  : 'bg-tactical-50 border border-tactical-200 shadow-xs'
              }`}
              transition={{ type: 'spring', stiffness: 350, damping: 30 }}
            />
          )}

          <div className="relative z-10 flex flex-col items-center">
            <Home
              className={`w-5 h-5 transition-transform ${
                activeTab === 'inicio'
                  ? `scale-110 ${isDark ? 'text-tactical-accent' : 'text-tactical-700'}`
                  : isDark ? 'text-slate-500' : 'text-slate-500'
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
              ? isDark ? 'text-tactical-accent font-bold' : 'text-tactical-700 font-bold'
              : isDark ? 'text-slate-500 hover:text-slate-300 font-medium' : 'text-slate-500 hover:text-slate-800 font-medium'
          }`}
        >
          {activeTab === 'questoes' && (
            <motion.div
              layoutId="active-tab-glow"
              className={`absolute inset-0 rounded-xl ${
                isDark
                  ? 'bg-gradient-to-t from-tactical-700/40 to-tactical-800/70 border border-tactical-accent/40'
                  : 'bg-tactical-50 border border-tactical-200 shadow-xs'
              }`}
              transition={{ type: 'spring', stiffness: 350, damping: 30 }}
            />
          )}

          <div className="relative z-10 flex flex-col items-center">
            <div className="relative">
              <CheckSquare
                className={`w-5 h-5 transition-transform ${
                  activeTab === 'questoes'
                    ? `scale-110 ${isDark ? 'text-tactical-accent' : 'text-tactical-700'}`
                    : isDark ? 'text-slate-500' : 'text-slate-500'
                }`}
              />
              {questoesRespondidas > 0 && (
                <span className={`absolute -top-1 -right-2 px-1 py-0.2 text-white text-[9px] font-extrabold rounded-full min-w-[13px] text-center border ${
                  isDark ? 'bg-tactical-600 border-tactical-950' : 'bg-tactical-700 border-white'
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
              ? isDark ? 'text-tactical-accent font-bold' : 'text-tactical-700 font-bold'
              : isDark ? 'text-slate-500 hover:text-slate-300 font-medium' : 'text-slate-500 hover:text-slate-800 font-medium'
          }`}
        >
          {activeTab === 'teoria' && (
            <motion.div
              layoutId="active-tab-glow"
              className={`absolute inset-0 rounded-xl ${
                isDark
                  ? 'bg-gradient-to-t from-tactical-700/40 to-tactical-800/70 border border-tactical-accent/40'
                  : 'bg-tactical-50 border border-tactical-200 shadow-xs'
              }`}
              transition={{ type: 'spring', stiffness: 350, damping: 30 }}
            />
          )}

          <div className="relative z-10 flex flex-col items-center">
            <BookOpen
              className={`w-5 h-5 transition-transform ${
                activeTab === 'teoria'
                  ? `scale-110 ${isDark ? 'text-tactical-accent' : 'text-tactical-700'}`
                  : isDark ? 'text-slate-500' : 'text-slate-500'
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
              ? isDark ? 'text-tactical-accent font-bold' : 'text-tactical-700 font-bold'
              : isDark ? 'text-slate-500 hover:text-slate-300 font-medium' : 'text-slate-500 hover:text-slate-800 font-medium'
          }`}
        >
          {activeTab === 'redacao' && (
            <motion.div
              layoutId="active-tab-glow"
              className={`absolute inset-0 rounded-xl ${
                isDark
                  ? 'bg-gradient-to-t from-tactical-700/40 to-tactical-800/70 border border-tactical-accent/40'
                  : 'bg-tactical-50 border border-tactical-200 shadow-xs'
              }`}
              transition={{ type: 'spring', stiffness: 350, damping: 30 }}
            />
          )}

          <div className="relative z-10 flex flex-col items-center">
            <PenTool
              className={`w-5 h-5 transition-transform ${
                activeTab === 'redacao'
                  ? `scale-110 ${isDark ? 'text-tactical-accent' : 'text-tactical-700'}`
                  : isDark ? 'text-slate-500' : 'text-slate-500'
              }`}
            />
            <span className="text-[11px] mt-1 tracking-tight leading-none">
              Redação
            </span>
          </div>
        </button>

        {/* Aba 5: Caderno IA Inéditas */}
        <button
          id="tab-btn-caderno-ia"
          type="button"
          onClick={() => onTabChange('caderno_ia')}
          className={`relative flex flex-col items-center justify-center min-h-[50px] py-1 px-1 rounded-xl transition-all duration-200 cursor-pointer select-none active:scale-95 ${
            activeTab === 'caderno_ia'
              ? isDark ? 'text-tactical-accent font-bold' : 'text-tactical-700 font-bold'
              : isDark ? 'text-slate-500 hover:text-slate-300 font-medium' : 'text-slate-500 hover:text-slate-800 font-medium'
          }`}
        >
          {activeTab === 'caderno_ia' && (
            <motion.div
              layoutId="active-tab-glow"
              className={`absolute inset-0 rounded-xl ${
                isDark
                  ? 'bg-gradient-to-t from-tactical-700/40 to-tactical-800/70 border border-tactical-accent/40'
                  : 'bg-tactical-50 border border-tactical-200 shadow-xs'
              }`}
              transition={{ type: 'spring', stiffness: 350, damping: 30 }}
            />
          )}

          <div className="relative z-10 flex flex-col items-center">
            <div className="relative">
              <Sparkles
                className={`w-5 h-5 transition-transform ${
                  activeTab === 'caderno_ia'
                    ? `scale-110 ${isDark ? 'text-tactical-accent' : 'text-tactical-700'}`
                    : isDark ? 'text-slate-500' : 'text-slate-500'
                }`}
              />
              {questoesAICount > 0 && (
                <span className="absolute -top-1.5 -right-2.5 bg-tactical-accent text-slate-950 font-black text-[9px] px-1.5 py-0.2 rounded-full shadow-xs">
                  {questoesAICount}
                </span>
              )}
            </div>
            <span className="text-[11px] mt-1 tracking-tight leading-none">
              IA Inéditas
            </span>
          </div>
        </button>
      </div>
    </nav>
  );
};

