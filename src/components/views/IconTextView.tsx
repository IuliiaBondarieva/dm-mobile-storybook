import React, { ReactNode } from 'react';
import { View, ViewStyle } from 'react-native';
import { useThemedStyles } from '@/hooks/useThemedStyles';
import { Theme } from '@/hooks/useTheme';
import { SvgIcon, SvgIconProps } from '../SvgIcon';
import { ThemedText, ThemedTextProps } from '../typography/ThemedText';

export interface IconTextViewProps {
  icon?: ReactNode;
  iconProps?: SvgIconProps;
  text: string;
  textProps?: Omit<ThemedTextProps, 'children'>;
  spacing?: 'xs' | 'sm' | 'md' | 'lg';
  alignment?: 'top' | 'center' | 'bottom';
  direction?: 'horizontal' | 'vertical';
  style?: ViewStyle;
}

export function IconTextView({
  icon,
  text,
  textProps,
  spacing = 'sm',
  alignment = 'center',
  direction = 'horizontal',
  style,
}: IconTextViewProps) {
  const styles = useThemedStyles((theme) => iconTextViewStyles(theme, spacing, alignment, direction));

  return (
    <View style={[styles.container, style]}>
      <View style={styles.iconContainer}>
        {icon}
      </View>
      <View style={styles.textContainer}>
        <ThemedText {...textProps} style={[textProps?.style]}>
          {text}
        </ThemedText>
      </View>
    </View>
  );
}

const iconTextViewStyles = (
  theme: Theme,
  spacing: 'xs' | 'sm' | 'md' | 'lg',
  alignment: 'top' | 'center' | 'bottom',
  direction: 'horizontal' | 'vertical'
) => {
  const spacingValue = theme.spacing[spacing];
  
  const alignmentMap = {
    top: 'flex-start' as const,
    center: 'center' as const,
    bottom: 'flex-end' as const,
  };

  const baseContainer: ViewStyle = {
    flexDirection: direction === 'horizontal' ? 'row' : 'column',
    alignItems: alignmentMap[alignment],
  };

  const iconContainer: ViewStyle = {
    flexShrink: 0,
    marginRight: direction === 'horizontal' ? spacingValue : 0,
    marginBottom: direction === 'vertical' ? spacingValue : 0,
  };

  const textContainer: ViewStyle = {
    flex: 1,
    minWidth: 0,
  };

  return {
    container: baseContainer,
    iconContainer,
    textContainer,
  };
};