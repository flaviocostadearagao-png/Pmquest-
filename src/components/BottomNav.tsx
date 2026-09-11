import React from 'react';
import { CheckSquare, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';

export type ActiveTab = 'questoes' | 'teoria';

interface BottomNavProps {
  activeTab: ActiveTab;
  onTabChange: (tab: ActiveTab) => void;
  questoesCount?: number;
  questoesRespondidas?: number;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  activeTab,
  onTabChange,
  questoesCount = 6,
  questoesRespondidas = 0,
}) => {
  return (
    <nav
      id="bottom-nav-bar"
      aria-label="Navegação Principal"
      className="fixed bottom-0 left-0 right-0 z-40 bg-[#071326]/95 backdrop-blur-xl border-t border-slate-800/90 pb-[env(safe-area-inset-bottom,0px)] shadow-2xl"
    >
      <div className="max-w-md mx-auto grid grid-cols-2 px-3 py-1.5 gap-2">
        {/* Aba 1: Resolver Questões */}
        <button
          id="tab-btn-questoes"
          type="button"
          onClick={() => onTabChange('questoes')}
          className={`relative flex flex-col items-center justify-center min-h-[52px] py-1.5 px-2 rounded-xl transition-all duration-200 cursor-pointer select-none active:scale-95 ${
            activeTab === 'questoes'
              ? 'text-amber-400 font-bold'
              : 'text-slate-400 hover:text-slate-200 font-medium'
          }`}
        >
          {activeTab === 'questoes' && (
            <motion.div
              layoutId="active-tab-glow"
              className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-slate-800/60 rounded-xl border border-blue-700/40"
              transition={{ type: 'spring', stiffness: 350, damping: 30 }}
            />
          )}

          <div className="relative z-10 flex flex-col items-center">
            <div className="relative">
              <CheckSquare
                className={`w-5 h-5 transition-transform ${
                  activeTab === 'questoes' ? 'scale-110 text-amber-400' : 'text-slate-400'
                }`}
              />
              {questoesRespondidas > 0 && (
                <span className="absolute -top-1 -right-2 px-1 py-0.2 bg-blue-600 text-white text-[9px] font-extrabold rounded-full min-w-[14px] text-center border border-slate-900">
                  {questoesRespondidas}/{questoesCount}
                </span>
              )}
            </div>
            <span className="text-[11px] mt-1 tracking-tight leading-none">
              Resolver Questões
            </span>
          </div>
        </button>

        {/* Aba 2: Estudar Teoria */}
        <button
          id="tab-btn-teoria"
          type="button"
          onClick={() => onTabChange('teoria')}
          className={`relative flex flex-col items-center justify-center min-h-[52px] py-1.5 px-2 rounded-xl transition-all duration-200 cursor-pointer select-none active:scale-95 ${
            activeTab === 'teoria'
              ? 'text-amber-400 font-bold'
              : 'text-slate-400 hover:text-slate-200 font-medium'
          }`}
        >
          {activeTab === 'teoria' && (
            <motion.div
              layoutId="active-tab-glow"
              className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-slate-800/60 rounded-xl border border-blue-700/40"
              transition={{ type: 'spring', stiffness: 350, damping: 30 }}
            />
          )}

          <div className="relative z-10 flex flex-col items-center">
            <BookOpen
              className={`w-5 h-5 transition-transform ${
                activeTab === 'teoria' ? 'scale-110 text-amber-400' : 'text-slate-400'
              }`}
            />
            <span className="text-[11px] mt-1 tracking-tight leading-none">
              Estudar Teoria
            </span>
          </div>
        </button>
      </div>
    </nav>
  );
};
