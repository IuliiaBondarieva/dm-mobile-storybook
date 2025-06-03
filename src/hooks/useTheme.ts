import { Colors } from '@/constants/Colors';
import { Typography, Spacing } from '@/constants/Typography';

export type ThemeName = keyof typeof Colors;

export interface Theme {
  colors: typeof Colors.default;
  typography: typeof Typography.default;
  spacing: typeof Spacing.dm;
}

export function getTheme(): Theme & { themeName: ThemeName } {
  const themeName: ThemeName = (process.env.EXPO_PUBLIC_THEME as ThemeName) ?? 'default';
  
  return getThemeConstants(themeName);
}

const getThemeConstants = (themeName: ThemeName) => {
  return {
    themeName,
    colors: Colors[themeName],
    typography: Typography[themeName] || Typography.default,
    spacing: Spacing.dm,
  };
}