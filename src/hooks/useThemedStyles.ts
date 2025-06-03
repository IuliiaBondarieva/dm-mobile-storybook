// hooks/useThemedStyles.ts (or utils/useThemedStyles.ts)
import { useMemo } from 'react';
import { StyleSheet, TextStyle, ViewStyle, ImageStyle } from 'react-native';
import { getTheme, Theme } from './useTheme';


// Type for the style object returned by the function
export type NamedStyles<T> = {
  [K in keyof T]:
    | ViewStyle
    | TextStyle
    | ImageStyle
    | NamedStyles<any>; // Allow for nested style objects (if StyleSheet.create allows flattening)
};

export function useThemedStyles<T extends NamedStyles<T>>(
  // This hook expects a *function* that takes the theme and returns the style definitions
  styleDefinition: (theme: Theme) => T
) {
  const theme = getTheme(); // Get the current theme from context

  // Memoize the styles to ensure they are only re-created when the theme changes
  const styles = useMemo(() => {
    if (!theme) {
      // Handle case where theme might not be available (e.g., component rendered outside ThemeProvider)
      console.warn("useThemedStyles: Theme context is null. Styles might be undefined.");
      return {} as T; // Return an empty object or throw an error based on your needs
    }
    return StyleSheet.create(styleDefinition(theme));
  }, [theme, styleDefinition]); // styleDefinition can also be a dependency if it's dynamic

  return styles;
}