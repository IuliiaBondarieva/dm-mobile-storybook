import { Theme } from "@/hooks/useTheme";
import { useThemedStyles } from "@/hooks/useThemedStyles";
import { TouchableOpacity, Text } from "react-native";

interface MyButtonProps {
  onPress?: () => void;
  text: string;
  type: "primary" | "secondary" | "tertiary";
}

export const ThemedButton = ({ type, onPress, text }: MyButtonProps) => {
  const styles = useThemedStyles(themedStyles);

  return (
    <TouchableOpacity 
      style={[
        type === 'primary' ? styles.primary : undefined,
        type === 'secondary' ? styles.secondary : undefined,
        type === 'tertiary' ? styles.tertiary : undefined,
      ]}
       onPress={onPress}>
      <Text style={[
        type === 'primary' ? styles.primaryText : undefined,
        type === 'secondary' ? styles.secondaryText : undefined,
        type === 'tertiary' ? styles.tertiaryText : undefined,
      ]}>{text}</Text>
    </TouchableOpacity>
  );
};

const themedStyles = (theme: Theme) => ({
    primary: {
      backgroundColor: theme.colors.primaryButton.backgroundColor,
      width: '100%',
      height: 40,
      borderRadius: '.5rem',
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: theme.colors.primaryButton.borderColor,
      borderWidth: 1,
    },
    primaryText: {
      color: theme.colors.primaryButton.textColor,
    },
    secondary: {
      backgroundColor: theme.colors.secondaryButton.backgroundColor,
      width: '100%',
      height: 40,
      borderRadius: '.5rem',
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: theme.colors.secondaryButton.borderColor,
      borderWidth: 1,
    },
    secondaryText: {
      color: theme.colors.secondaryButton.textColor,
    },
    tertiary: {
      backgroundColor: theme.colors.tertiaryButton.backgroundColor,
      width: '100%',
      height: 40,
      borderRadius: '.5rem',
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: theme.colors.tertiaryButton.borderColor,
      borderWidth: 1,
    },
    tertiaryText: {
      color: theme.colors.tertiaryButton.textColor,
    },
});