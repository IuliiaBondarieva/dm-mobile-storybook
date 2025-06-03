import { Text, TextStyle, type TextProps } from 'react-native';

import { Theme } from '@/hooks/useTheme';
import { useThemedStyles } from '@/hooks/useThemedStyles';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'subtitle' | 'link' | 'description';
};

export function ThemedText({
  style,
  type = 'default',
  ...rest
}: ThemedTextProps) {
  const styles = useThemedStyles(themedStyles);

  return (
    <Text
      style={[
        type === 'default' ? styles.default : undefined,
        type === 'title' ? styles.title : undefined,
        type === 'subtitle' ? styles.subtitle : undefined,
        type === 'description' ? styles.description : undefined,
        type === 'link' ? styles.link : undefined,
        styles.global,
        style,
      ]}
      {...rest}
    />
  );
}

const themedStyles = (theme: Theme) => ({
    global: {
      fontFamily: theme.typography.families.primary,
    },
    default: {
      fontSize: theme.typography.sizes.md,
      // lineHeight: theme.typography.lineHeights.normal,
      marginBottom: theme.spacing.md,
    },
    title: {
      fontSize: theme.typography.sizes.xl,
      fontWeight: theme.typography.weights.bold as TextStyle['fontWeight'],
      textAlign: 'left' as TextStyle['textAlign'],
      color: theme.colors.title,
      marginBottom: theme.spacing.md,
    },
    subtitle: {
      fontSize: theme.typography.sizes.md,
      fontWeight: theme.typography.weights.bold as TextStyle['fontWeight'],
    },
    link: {
      // lineHeight: theme.typography.lineHeights.normal,
      fontSize: theme.typography.sizes.md,
      color: theme.colors.text,
    },
    description: {
      fontSize: theme.typography.sizes.sm,
      color: theme.colors.text,
      textAlign: 'left'  as TextStyle['textAlign']
    },
});