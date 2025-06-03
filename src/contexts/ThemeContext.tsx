import { createContext, useContext, useState, ReactNode } from 'react';
import { Colors } from '@/constants/Colors';
import { Typography, Spacing } from '@/constants/Typography';

export type ThemeName = keyof typeof Colors;

export interface Theme {
  colors: typeof Colors.default;
  typography: typeof Typography.default;
  spacing: typeof Spacing.dm;
  themeName: ThemeName;
}

interface ThemeContextType {
  theme: Theme;
  themeName: ThemeName;
  setTheme: (themeName: ThemeName) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
  initialTheme?: ThemeName;
}

export function ThemeProvider({ children, initialTheme }: ThemeProviderProps) {
  const [themeName, setThemeName] = useState<ThemeName>(() => {
    // Priority: initialTheme prop -> environment variable -> default
    return initialTheme || 
           (process.env.EXPO_PUBLIC_THEME as ThemeName) || 
           'default';
  });

  const theme: Theme = {
    themeName,
    colors: Colors[themeName],
    typography: Typography[themeName] || Typography.default,
    spacing: Spacing.dm,
  };

  const setTheme = (newThemeName: ThemeName) => {
    setThemeName(newThemeName);
  };

  const toggleTheme = () => {
    const availableThemes = Object.keys(Colors) as ThemeName[];
    const currentIndex = availableThemes.indexOf(themeName);
    const nextIndex = (currentIndex + 1) % availableThemes.length;
    setThemeName(availableThemes[nextIndex]);
  };

  const contextValue: ThemeContextType = {
    theme,
    themeName,
    setTheme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
}

export { ThemeContext };