import React, { useEffect, useRef, useMemo } from 'react';
import { View, TouchableOpacity, Pressable } from 'react-native';
import { useThemedStyles } from '@/hooks/useThemedStyles';
import { Theme } from '@/hooks/useTheme';
import { ThemedText } from '../typography/ThemedText';
import { ThemedView } from '@/components/views/ThemedView';
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
  BottomSheetBackdrop,
} from '@gorhom/bottom-sheet';
import { ThemedButton } from '../Button/ThemedButton';
import { SvgIcon } from '../SvgIcon';
import { ClickableCardButton } from '../ClickableCardButton';

export interface YourEPrescriptionScreenProps {
  visible: boolean;
  onClose: (selectedOption?: string) => void;
  children?: React.ReactNode;
}

export function YourEPrescriptionScreen({ visible, onClose, children }: YourEPrescriptionScreenProps) {
  const styles = useThemedStyles(canEntryScreenStyles);

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ['80%'], []);

  const renderBackdrop = React.useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        opacity={0.5}
      />
    ),
    []
  );

  useEffect(() => {
    if (visible) {
      bottomSheetModalRef.current?.present();
    } else {
      bottomSheetModalRef.current?.dismiss();``
    }
  }, [visible]);

  const handleClose = (selectedOption?: string) => {
    onClose(selectedOption);
    bottomSheetModalRef.current?.dismiss();
  }

  return (
    <BottomSheetModalProvider>
          <BottomSheetModal
            ref={bottomSheetModalRef}
            snapPoints={snapPoints}
            handleStyle={styles.handleStyle}
            handleIndicatorStyle={styles.handleIndicator}
            enablePanDownToClose={true}
            onDismiss={() => onClose()}
            backdropComponent={renderBackdrop}
          >
            <BottomSheetView style={styles.container}>
              <View>
              <Pressable onPress={() => onClose()} />
              <ThemedView style={styles.container}>
                <View style={styles.header}>
                  <ThemedText type="subtitle" style={styles.headerTitle}>
                    Your e-prescription
                  </ThemedText>
                  <TouchableOpacity
                    style={styles.closeButton}
                    onPress={() => onClose()}
                    activeOpacity={0.7}
                  >
                    <SvgIcon name='close' size={24} />
                  </TouchableOpacity>
                </View>
                <View style={styles.content}>
                  {children || (
                    <ThemedView type="centered" style={styles.defaultContent}>
                      <ThemedText type="subtitle" style={styles.subtitle}>
                        How would you like to redeem your e-presciption?
                      </ThemedText>
                      <ClickableCardButton
                        headerIcon={<SvgIcon size={60} name='card' />}
                        headerText='Read health card'
                        headerTextProps={{ type: 'default' }}
                        onPress={() => handleClose('rfc')}
                        style={{ marginBottom: 16 }} 
                      />  
                      <ThemedButton 
                        type='primary' 
                        onPress={() => handleClose('rfc')} 
                        text='Enter CAN information here'
                        />
                        <ThemedButton 
                        type='tertiary' 
                        onPress={() => handleClose('scan')} 
                        text='Scan QR code'
                        />
                    </ThemedView>
                  )}
                </View>
                </ThemedView>
              </View>
            </BottomSheetView>
        </BottomSheetModal>
      </BottomSheetModalProvider>
  )
}

const canEntryScreenStyles = (theme: Theme) => ({
  container: {
    backgroundColor: theme.colors.background,
    flex: 1,
  },
  handleStyle: {
    backgroundColor: '#E7F0F7',
    borderTopLeftRadius: theme.spacing.md,
    borderTopRightRadius: theme.spacing.md,
  },
  handleIndicator: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    width: 40,
    height: 4,
  },
  header: {
    flexDirection: 'row' as const,
    justifyContent: 'space-between' as const,
    alignItems: 'center' as const,
    backgroundColor: '#E7F0F7',
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.lg,
    paddingTop: theme.spacing.sm,
  },
  headerTitle: {
    flex: 1,
    textAlign: 'left' as const,
    marginRight: theme.spacing.md,
    color: theme.colors.text,
  },
  subtitle: {
    textAlign: 'center' as const,
  },
  closeButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
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
    marginTop: theme.spacing.md,
    flex: 1,
    gap: theme.spacing.md,
  },
  placeholder: {
    textAlign: 'center' as const,
    opacity: 0.7,
  },
});