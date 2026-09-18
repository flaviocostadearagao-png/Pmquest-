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
          ? 'bg-tactical-900/95 backdrop-blur-md border-b border-tactical-700/50 text-slate-100'
          : 'bg-tactical-800 text-white border-b border-tactical-900 shadow-md'
      }`}
    >
      <div className="flex items-center justify-between gap-2">
        {/* Left: Button to Open Sidebar with All Modes & Logo */}
        <div className="flex items-center gap-2">
          <button
            id="header-sidebar-toggle-btn"
            type="button"
            onClick={onOpenSidebar}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-tactical-accent/20 hover:bg-tactical-accent/30 active:scale-95 border border-tactical-accent/40 text-tactical-accent text-xs font-bold transition-all cursor-pointer shadow-sm"
            title="Abrir Barra Lateral com Todos os Modos"
            aria-label="Abrir Modos de Estudo"
          >
            <Menu className="w-4 h-4 text-tactical-accent" />
            <span className="font-extrabold tracking-wide uppercase">Modos</span>
          </button>

          <div className="hidden xs:flex items-center gap-2">
            <div className="relative flex items-center justify-center w-7 h-7 rounded-lg bg-gradient-to-br from-tactical-800 via-tactical-900 to-tactical-950 border border-tactical-accent/50 shadow-sm shrink-0">
              <Shield className="w-4 h-4 text-tactical-accent" />
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-tactical-accent/80 font-sans">
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
            className="flex items-center gap-1.5 px-2 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 active:scale-95 border border-white/10 text-white transition-all text-xs font-medium cursor-pointer"
            title="Ver Desempenho e Estatísticas"
          >
            <BarChart3 className="w-3.5 h-3.5 text-tactical-accent" />
            <span className="font-semibold text-white">{totalRespondidas}</span>
            <span className="text-white/20">|</span>
            <span className={totalRespondidas > 0 ? (taxaAcerto >= 70 ? 'text-emerald-500/90 font-bold' : 'text-tactical-accent font-bold') : 'text-white/40'}>
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
            className="flex items-center justify-center w-8 h-8 rounded-xl bg-white/5 hover:bg-white/10 active:scale-95 border border-white/10 text-tactical-accent transition-all cursor-pointer shadow-sm"
            title="Mais Opções (Flashcards, Teoria, Redação, etc.)"
            aria-label="Mais Opções"
          >
            <MoreVertical className="w-4 h-4 text-tactical-accent" />
          </button>
        </div>
      </div>
    </header>
  );
};


