import { TouchableOpacity, View, ViewStyle } from 'react-native';
import { useThemedStyles } from '@/hooks/useThemedStyles';
import { Theme } from '@/hooks/useTheme';
import { ThemedText, ThemedTextProps } from './typography/ThemedText';
import { IconTextView } from './views/IconTextView';
import { ReactNode } from 'react';
import { SvgIcon } from './SvgIcon';

export interface ClickableCardButtonProps {
  headerIcon: ReactNode;
  headerText: string;
  headerTextProps?: Omit<ThemedTextProps, 'children'>;
  subText?: string;
  subTextProps?: Omit<ThemedTextProps, 'children'>;
  onPress: () => void;
  style?: ViewStyle;
  disabled?: boolean;
  arrowColor?: string;
  headerBackgroundColor?: string;
}

export function ClickableCardButton({
  headerIcon,
  headerText,
  headerTextProps,
  subText,
  subTextProps,
  onPress,
  style,
  disabled = false,
  arrowColor,
  headerBackgroundColor,
}: ClickableCardButtonProps) {
  const styles = useThemedStyles((theme) => clickableCardButtonStyles(theme, headerBackgroundColor));

  return (
    <TouchableOpacity
      style={[styles.container, disabled && styles.disabled, style]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
    >
      <View style={styles.header}>
        <IconTextView
          icon={headerIcon}
          text={headerText}
          textProps={{
            type: 'default',
            style: styles.headerText,
            ...headerTextProps,
          }}
          spacing="sm"
          alignment="center"
        />
        <View style={styles.arrowContainer}>
          <ThemedText style={[styles.arrow, arrowColor && { color: arrowColor }]}>
            <SvgIcon
              name="angleRight"
              size={18}
              color={arrowColor || styles.arrow.color}
              />
          </ThemedText>
        </View>
      </View>
      
      {subText && (
        <View style={styles.content}>
          <ThemedText
            type="description"
            {...subTextProps}
            style={[styles.subText, subTextProps?.style]}
          >
            {subText}
          </ThemedText>
        </View>
      )}
    </TouchableOpacity>
  );
}

const clickableCardButtonStyles = (theme: Theme, headerBackgroundColor?: string) => ({
  container: {
    width: '100%',
    backgroundColor: theme.colors.cardBackground,
    borderRadius: theme.spacing.md,
    shadowColor: '#000',
    shadowOffset: {
      width: 3,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    overflow: 'hidden' as const,
  },
  disabled: {
    opacity: 0.5,
  },
  header: {
    backgroundColor: headerBackgroundColor || theme.colors.primaryColor1,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
    flexDirection: 'row' as const,
    alignItems: 'center' as const,
    justifyContent: 'space-between' as const,
  },
  headerText: {
    color: headerBackgroundColor ? theme.colors.text : '#FFFFFF',
    marginBottom: 0,
  },
  arrowContainer: {
    marginLeft: theme.spacing.sm,
  },
  arrow: {
    fontSize: 18,
    fontWeight: 'bold' as const,
    color: headerBackgroundColor ? theme.colors.text : '#FFFFFF',
  },
  content: {
    padding: theme.spacing.md,
  },
  subText: {
    textAlign: 'left' as const,
    paddingHorizontal: 0,
    marginBottom: 0,
  },
});