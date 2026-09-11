import React, { createContext, useContext, useState, useEffect } from 'react';
import { TemaApp } from '../types';

interface ThemeContextType {
  theme: TemaApp;
  isDark: boolean;
  toggleTheme: () => void;
  setTheme: (theme: TemaApp) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark',
  isDark: true,
  toggleTheme: () => {},
  setTheme: () => {},
});

const THEME_STORAGE_KEY = 'pmba_theme_preference';

export const ThemeProvider: React.FC<{ children: React.ReactNode; initialTheme?: TemaApp; onThemeChange?: (t: TemaApp) => void }> = ({
  children,
  initialTheme,
  onThemeChange,
}) => {
  const [theme, setThemeState] = useState<TemaApp>(() => {
    if (initialTheme) return initialTheme;
    try {
      const saved = localStorage.getItem(THEME_STORAGE_KEY);
      if (saved === 'light' || saved === 'dark') return saved;
    } catch {
      // ignore
    }
    return 'dark'; // PMBA default tactical theme
  });

  useEffect(() => {
    if (initialTheme && initialTheme !== theme) {
      setThemeState(initialTheme);
    }
  }, [initialTheme]);

  useEffect(() => {
    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch (err) {
      console.warn('Erro ao salvar tema:', err);
    }

    // Apply or remove 'dark' class on HTML document root for CSS/Tailwind support
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }

    if (onThemeChange) {
      onThemeChange(theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setThemeState((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const setTheme = (newTheme: TemaApp) => {
    setThemeState(newTheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        isDark: theme === 'dark',
        toggleTheme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
