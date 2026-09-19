import React from 'react';
import { Shield, Award, BarChart3, Smartphone, Monitor, Sun, Moon, Sparkles, Menu, MoreVertical } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface HeaderProps {
  acertos: number;
  totalRespondidas: number;
  onOpenStats: () => void;
  isMobileFrame: boolean;
  onToggleFrame: () => void;
  cloudSyncStatus?: 'synced' | 'syncing' | 'offline';
  onOpenGerador?: () => void;
  onOpenSidebar: () => void;
  onOpenThreeDots: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  acertos,
  totalRespondidas,
  onOpenStats,
  isMobileFrame,
  onToggleFrame,
  cloudSyncStatus = 'synced',
  onOpenGerador,
  onOpenSidebar,
  onOpenThreeDots,
}) => {
  const { theme, isDark, toggleTheme } = useTheme();
  const taxaAcerto = totalRespondidas > 0 ? Math.round((acertos / totalRespondidas) * 100) : 0;

  return (
    <header
      className={`sticky top-0 z-30 px-3 sm:px-4 py-2.5 transition-colors duration-200 ${
        isDark
          ? 'bg-[#071326]/95 backdrop-blur-md border-b border-slate-800/80 text-slate-100'
          : 'bg-gradient-to-r from-[#091f3d] via-[#0d2a52] to-[#081930] text-white border-b border-blue-950 shadow-md'
      }`}
    >
      <div className="flex items-center justify-between gap-2">
        {/* Left: Button to Open Sidebar with All Modes & Logo */}
        <div className="flex items-center gap-2">
          <button
            id="header-sidebar-toggle-btn"
            type="button"
            onClick={onOpenSidebar}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 active:scale-95 border border-amber-400/40 text-amber-300 text-xs font-bold transition-all cursor-pointer shadow-sm"
            title="Abrir Barra Lateral com Todos os Modos"
            aria-label="Abrir Modos de Estudo"
          >
            <Menu className="w-4 h-4 text-amber-400" />
            <span className="font-extrabold tracking-wide">Modos</span>
          </button>

          <div className="hidden xs:flex items-center gap-2">
            <div className="relative flex items-center justify-center w-7 h-7 rounded-lg bg-gradient-to-br from-blue-900 via-blue-950 to-slate-950 border border-amber-500/50 shadow-sm shrink-0">
              <Shield className="w-4 h-4 text-amber-400" />
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-400 font-sans">
                  PMBA 2026
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Performance Pill */}
          <button
            id="header-stats-btn"
            onClick={onOpenStats}
            className="flex items-center gap-1.5 px-2 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 active:scale-95 border border-white/15 text-white transition-all text-xs font-medium cursor-pointer"
            title="Ver Desempenho e Estatísticas"
          >
            <BarChart3 className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-semibold text-white">{totalRespondidas}</span>
            <span className="text-white/40">|</span>
            <span className={totalRespondidas > 0 ? (taxaAcerto >= 70 ? 'text-emerald-400 font-bold' : 'text-amber-400 font-bold') : 'text-white/60'}>
              {totalRespondidas > 0 ? `${taxaAcerto}%` : '0%'}
            </span>
          </button>

          {/* Device Frame Toggle (visible on wide screens for testing) */}
          <button
            id="header-toggle-frame-btn"
            onClick={onToggleFrame}
            className="hidden sm:flex items-center justify-center w-8 h-8 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-slate-200 transition-colors cursor-pointer"
            title={isMobileFrame ? "Visualizar em tela cheia" : "Visualizar em moldura de celular"}
          >
            {isMobileFrame ? (
              <Monitor className="w-4 h-4" />
            ) : (
              <Smartphone className="w-4 h-4 text-amber-400" />
            )}
          </button>

          {/* Three Dots ("...") Menu Button for Flashcards, Theory, and Other Tabs */}
          <button
            id="header-three-dots-btn"
            type="button"
            onClick={onOpenThreeDots}
            className="flex items-center justify-center w-8 h-8 rounded-xl bg-white/10 hover:bg-white/20 active:scale-95 border border-white/20 text-amber-300 transition-all cursor-pointer shadow-sm"
            title="Mais Opções (Flashcards, Teoria, Redação, etc.)"
            aria-label="Mais Opções"
          >
            <MoreVertical className="w-4 h-4 text-amber-300" />
          </button>
        </div>
      </div>
    </header>
  );
};


