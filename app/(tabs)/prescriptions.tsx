import { StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { ThemedText } from '@/components/typography/ThemedText';
import { ThemedView } from '@/components/views/ThemedView';
import { ThemedButton } from '@/components/Button/ThemedButton';
import { CANEntryScreen } from '@/components/screens/CANEntryScreen';
import { YourEPrescriptionScreen } from '@/components/screens/YourEPrescriptionScreen';
import { SvgIcon } from '@/components/SvgIcon';
import { useThemeContext } from '@/contexts/ThemeContext';
import { IconTextView } from '@/components/views/IconTextView';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa', // neutral-50
  },
  scroll: {
    flex: 1,
  },
  padding: {
    padding: 16,
  },
});

export default function PrescriptionsScreen() {
  const { theme: { colors } } = useThemeContext()
  const router = useRouter();
  const [isCANEntryVisible, setIsCANEntryVisible] = useState(false);
  const [isYourEPrescriptionVisible, setIsisYourEPrescriptionVisible] = useState(false);

  const handleRedeemPrescription = () => {
    setIsisYourEPrescriptionVisible(true);
  };

  const handleCloseCANEntry = () => {
    setIsCANEntryVisible(false);
  };

  const handleCloseYourEPrescriptionModal = (selectedOption?: string) => {
    console.log('Selected option:', selectedOption);
    if (selectedOption === 'scan') {
      router.push('/scan/can');
    } else if (selectedOption === 'rfc') {
      setIsCANEntryVisible(true);
    }
    setIsisYourEPrescriptionVisible(false);
  };

  return (
   <ThemedView type='container'>
    <ThemedText type="title">Prescriptions</ThemedText>
      <ThemedView type='card'>
        <IconTextView
          icon={<SvgIcon size={23} name='delivery' color={colors.primaryColor1} backgroundColor={colors.complementoryColor_50} />}
          text='Redeem your e-prescription now and have it delivered'
          textProps={{ type: 'subtitle', style: { color: colors.primaryColor1 } }}
         />  
        <ThemedText type='description'>
          Order before 6pm and recieve your medication the next bussiness day! **
        </ThemedText>
        <ThemedButton 
          type='primary' 
          text='Redeem e-prescription now' 
          onPress={handleRedeemPrescription}
        />
      </ThemedView>
      
      <YourEPrescriptionScreen 
        visible={isYourEPrescriptionVisible}
        onClose={(selectedOption?: string) => handleCloseYourEPrescriptionModal(selectedOption)}
      />

      <CANEntryScreen 
        visible={isCANEntryVisible}
        onClose={handleCloseCANEntry}
      />
    </ThemedView>
  );
}