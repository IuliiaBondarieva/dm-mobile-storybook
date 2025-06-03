import React from 'react';
import { View, Modal, TouchableOpacity, Pressable } from 'react-native';
import { useThemedStyles } from '@/hooks/useThemedStyles';
import { Theme } from '@/hooks/useTheme';
import { ThemedText } from '../typography/ThemedText';
import { ThemedView } from '@/components/views/ThemedView';

export interface CANEntryScreenProps {
  visible: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

export function CANEntryScreen({ visible, onClose, children }: CANEntryScreenProps) {
  const styles = useThemedStyles(canEntryScreenStyles);

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      statusBarTranslucent={true}
    >
      <View style={styles.overlay}>
        <Pressable style={styles.backdrop} onPress={onClose} />
        <ThemedView style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={onClose}
              activeOpacity={0.7}
            >
              <ThemedText style={styles.closeButtonText}>✕</ThemedText>
            </TouchableOpacity>
          </View>
          <View style={styles.content}>
            {children || (
              <ThemedView type="centered" style={styles.defaultContent}>
                <ThemedText type="title">CAN Entry</ThemedText>
                <ThemedText style={styles.placeholder}>
                  Enter CAN information here
                </ThemedText>
              </ThemedView>
            )}
          </View>
        </ThemedView>
      </View>
    </Modal>
  );
}

const canEntryScreenStyles = (theme: Theme) => ({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backdrop: {
    position: 'absolute' as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  container: {
    width: '100%',
    maxWidth: '100%',
    backgroundColor: theme.colors.background,
    borderRadius: theme.spacing.md,
    maxHeight: '100%',
    minHeight: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  header: {
    flexDirection: 'row' as const,
    justifyContent: 'flex-end' as const,
    alignItems: 'center' as const,
    padding: theme.spacing.md,
    paddingBottom: theme.spacing.sm,
  },
  closeButton: {
    width: 32,
    height: 32,
    justifyContent: 'center' as const,
    alignItems: 'center' as const,
  },
  closeButtonText: {
    fontSize: 18,
    fontWeight: 'bold' as const,
    color: theme.colors.text,
  },
  content: {
    flex: 1,
    paddingHorizontal: theme.spacing.md,
    paddingBottom: theme.spacing.md,
  },
  defaultContent: {
    flex: 1,
    gap: theme.spacing.md,
  },
  placeholder: {
    textAlign: 'center' as const,
    opacity: 0.7,
  },
});