import React from 'react';
import { Shield, Award, BarChart3, Smartphone, Monitor } from 'lucide-react';

interface HeaderProps {
  acertos: number;
  totalRespondidas: number;
  onOpenStats: () => void;
  isMobileFrame: boolean;
  onToggleFrame: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  acertos,
  totalRespondidas,
  onOpenStats,
  isMobileFrame,
  onToggleFrame
}) => {
  const taxaAcerto = totalRespondidas > 0 ? Math.round((acertos / totalRespondidas) * 100) : 0;

  return (
    <header className="sticky top-0 z-30 bg-[#071326]/95 backdrop-blur-md border-b border-slate-800/80 px-4 py-3">
      <div className="flex items-center justify-between gap-3">
        {/* Logo & Identity */}
        <div className="flex items-center gap-2.5">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-900 via-blue-950 to-slate-950 border border-amber-500/40 shadow-sm shadow-amber-500/10">
            <Shield className="w-5 h-5 text-amber-400" />
            <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-red-600 rounded-full border-2 border-[#071326] flex items-center justify-center text-[8px] font-bold text-white">
              ★
            </span>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-extrabold uppercase tracking-wider text-amber-400 font-sans">
                PMBA 2026
              </span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-950 text-blue-300 font-semibold border border-blue-800/60">
                Soldado
              </span>
            </div>
            <h1 className="text-sm font-bold text-slate-100 tracking-tight leading-none mt-0.5">
              Simulado & Teoria Mobile
            </h1>
          </div>
        </div>

        {/* Stats Pill & Controls */}
        <div className="flex items-center gap-2">
          {/* Performance Pill */}
          <button
            id="header-stats-btn"
            onClick={onOpenStats}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-800/90 hover:bg-slate-700/90 active:scale-95 border border-slate-700/70 text-slate-200 transition-all text-xs font-medium cursor-pointer"
            title="Ver Desempenho"
          >
            <BarChart3 className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-semibold text-slate-200">{totalRespondidas}</span>
            <span className="text-slate-500">|</span>
            <span className={totalRespondidas > 0 ? (taxaAcerto >= 70 ? 'text-emerald-400 font-bold' : 'text-amber-400 font-bold') : 'text-slate-400'}>
              {totalRespondidas > 0 ? `${taxaAcerto}%` : '0%'}
            </span>
          </button>

          {/* Device Frame Toggle (visible on wide screens for testing) */}
          <button
            id="header-toggle-frame-btn"
            onClick={onToggleFrame}
            className="hidden sm:flex items-center justify-center w-8 h-8 rounded-lg bg-slate-800/80 hover:bg-slate-700 border border-slate-700 text-slate-400 hover:text-slate-200 transition-colors"
            title={isMobileFrame ? "Visualizar em tela cheia" : "Visualizar em moldura de celular"}
          >
            {isMobileFrame ? (
              <Monitor className="w-4 h-4" />
            ) : (
              <Smartphone className="w-4 h-4 text-amber-400" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
