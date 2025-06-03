import { View, ScrollView, ViewStyle, type ViewProps, type ScrollViewProps } from 'react-native';
import { Theme } from '@/hooks/useTheme';
import { useThemedStyles } from '@/hooks/useThemedStyles';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'centered' | 'card' | 'container';
};

export type ThemedScrollViewProps = ScrollViewProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'scrollable' | 'list';
};

export function ThemedView({ 
  style, 
  type = 'default',
  ...otherProps 
}: ThemedViewProps) {
  const styles = useThemedStyles(themedViewStyles);

  return (
    <View 
      style={[
        type === 'default' ? styles.default : undefined,
        type === 'centered' ? styles.centered : undefined,
        type === 'card' ? styles.card : undefined,
        type === 'container' ? styles.container : undefined,
        style,
      ]} 
      {...otherProps} 
    />
  );
}

export function ThemedScrollView({ 
  style, 
  type = 'scrollable',
  contentContainerStyle,
  ...otherProps 
}: ThemedScrollViewProps) {
  const styles = useThemedStyles(themedScrollViewStyles);

  return (
    <ScrollView 
      style={[
        type === 'scrollable' ? styles.scrollable : undefined,
        type === 'list' ? styles.list : undefined,
        style,
      ]} 
      contentContainerStyle={[
        type === 'scrollable' ? styles.scrollableContent : undefined,
        type === 'list' ? styles.listContent : undefined,
        contentContainerStyle,
      ]}
      {...otherProps} 
    />
  );
}

const themedViewStyles = (theme: Theme) => ({
  default: {
    backgroundColor: theme.colors.background,
  },
  centered: {
    backgroundColor: theme.colors.background,
    justifyContent: 'center' as ViewStyle['justifyContent'],
    alignItems: 'center' as ViewStyle['alignItems'],
    flex: 1,
  },
  card: {
    display: 'flex',
    gap: '15px',
    backgroundColor: '#fff',
    padding: theme.spacing.md,
    borderRadius: theme.spacing.sm,
    shadowColor: theme.colors.text,
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: theme.spacing.md,
  },
  container: {
    backgroundColor: theme.colors.containerBackground,
    flex: 1,
    padding: theme.spacing.lg,
  },
});

const themedScrollViewStyles = (theme: Theme) => ({
  scrollable: {
    backgroundColor: theme.colors.background,
  },
  list: {
    backgroundColor: theme.colors.background,
  },
  scrollableContent: {
    flexGrow: 1,
    padding: theme.spacing.md,
  },
  listContent: {
    padding: theme.spacing.md,
    gap: theme.spacing.sm,
  },
});
