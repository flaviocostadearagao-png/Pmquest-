import React from 'react';
import { Shield, Award, BarChart3, Smartphone, Monitor, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface HeaderProps {
  acertos: number;
  totalRespondidas: number;
  onOpenStats: () => void;
  isMobileFrame: boolean;
  onToggleFrame: () => void;
  cloudSyncStatus?: 'synced' | 'syncing' | 'offline';
}

export const Header: React.FC<HeaderProps> = ({
  acertos,
  totalRespondidas,
  onOpenStats,
  isMobileFrame,
  onToggleFrame,
  cloudSyncStatus = 'synced'
}) => {
  const { theme, isDark, toggleTheme } = useTheme();
  const taxaAcerto = totalRespondidas > 0 ? Math.round((acertos / totalRespondidas) * 100) : 0;

  return (
    <header
      className={`sticky top-0 z-30 px-4 py-3 transition-colors duration-200 ${
        isDark
          ? 'bg-[#071326]/95 backdrop-blur-md border-b border-slate-800/80 text-slate-100'
          : 'bg-gradient-to-r from-[#091f3d] via-[#0d2a52] to-[#081930] text-white border-b border-blue-950 shadow-md'
      }`}
    >
      <div className="flex items-center justify-between gap-2.5">
        {/* Logo & Identity */}
        <div className="flex items-center gap-2.5">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-900 via-blue-950 to-slate-950 border border-amber-500/50 shadow-sm shadow-amber-500/20 shrink-0">
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
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-950/80 text-blue-200 font-semibold border border-blue-800/60">
                Soldado
              </span>
            </div>
            <h1 className="text-sm font-bold tracking-tight leading-none mt-0.5 text-white">
              Simulado & Teoria Mobile
            </h1>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Cloud Sync Status indicator */}
          <div
            className="flex items-center gap-1 text-[10px] px-2 py-1 rounded-lg bg-black/30 border border-white/10 text-slate-300"
            title={
              cloudSyncStatus === 'synced'
                ? 'Firebase: Dados sincronizados em segundo plano'
                : cloudSyncStatus === 'syncing'
                ? 'Firebase: Gravando na nuvem...'
                : 'Conectando ao Firebase...'
            }
          >
            <span
              className={`w-2 h-2 rounded-full ${
                cloudSyncStatus === 'synced'
                  ? 'bg-emerald-400'
                  : cloudSyncStatus === 'syncing'
                  ? 'bg-amber-400 animate-pulse'
                  : 'bg-slate-400'
              }`}
            />
            <span className="hidden xs:inline text-[10px] font-medium">
              {cloudSyncStatus === 'synced' ? 'Nuvem' : cloudSyncStatus === 'syncing' ? 'Gravando' : 'Nuvem'}
            </span>
          </div>

          {/* Theme Selector Toggle */}
          <button
            id="header-theme-toggle"
            onClick={toggleTheme}
            className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 active:scale-95 border border-white/15 text-amber-300 transition-all cursor-pointer"
            title={isDark ? 'Mudar para Tema Claro' : 'Mudar para Tema Escuro (Tático)'}
            aria-label="Alternar tema claro e escuro"
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-amber-300" />
            )}
          </button>

          {/* Performance Pill */}
          <button
            id="header-stats-btn"
            onClick={onOpenStats}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 active:scale-95 border border-white/15 text-white transition-all text-xs font-medium cursor-pointer"
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
            className="hidden sm:flex items-center justify-center w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 border border-white/15 text-slate-200 transition-colors cursor-pointer"
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
