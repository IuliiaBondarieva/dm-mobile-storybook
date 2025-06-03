import { useState, useEffect } from 'react';
import { Platform } from 'react-native';
import NfcManager, { NfcTech } from 'react-native-nfc-manager';

interface UseNFCReaderProps {
  onScanComplete?: () => void;
  onScanError?: (error: Error) => void;
}

type ScanStatus = 'idle' | 'scanning' | 'completed' | 'error';

export const useNFCReader = ({ 
  onScanComplete, 
  onScanError 
}: UseNFCReaderProps = {}) => {
  const [isSupported, setIsSupported] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const [scanStatus, setScanStatus] = useState<ScanStatus>('idle');
  const [scanProgress, setScanProgress] = useState(0);
  
  // Initialize NFC on mount
  useEffect(() => {
    const checkNfcSupport = async () => {
      if (Platform.OS === 'web') {
        // NFC API is not widely supported on web
        setIsSupported(false);
        return;
      }
      
      try {
        const supported = await NfcManager.isSupported();
        setIsSupported(supported);
        
        if (supported) {
          await NfcManager.start();
          const enabled = await NfcManager.isEnabled();
          setIsEnabled(enabled);
        }
      } catch (error) {
        console.error('Error checking NFC support:', error);
        setIsSupported(false);
      }
    };
    
    checkNfcSupport();
    
    // Cleanup on unmount
    return () => {
      if (Platform.OS !== 'web') {
        NfcManager.cancelTechnologyRequest().catch(() => {});
      }
    };
  }, []);
  
  const startScan = async () => {
    if (!isSupported || !isEnabled) {
      return;
    }
    
    setScanStatus('scanning');
    setScanProgress(0);
    
    if (Platform.OS === 'web') {
      // Simulate NFC scanning on web since it's not supported
      simulateNfcScan();
    } else {
      try {
        // In a real implementation, we would actually scan the NFC chip here
        // For this example, we're just simulating success with a timer
        simulateNfcScan();
      } catch (error) {
        console.error('Error scanning NFC:', error);
        setScanStatus('error');
        onScanError?.(error as Error);
      }
    }
  };
  
  const simulateNfcScan = () => {
    // Simulate progress updates
    let progress = 0;
    const interval = setInterval(() => {
      progress += 0.1;
      setScanProgress(Math.min(progress, 1));
      
      if (progress >= 1) {
        clearInterval(interval);
        setScanStatus('completed');
        onScanComplete?.();
      }
    }, 400);
  };
  
  const stopScan = async () => {
    if (Platform.OS !== 'web') {
      try {
        await NfcManager.cancelTechnologyRequest();
      } catch (error) {
        console.error('Error stopping NFC scan:', error);
      }
    }
    
    setScanStatus('idle');
    setScanProgress(0);
  };
  
  return {
    isSupported,
    isEnabled,
    scanStatus,
    scanProgress,
    startScan,
    stopScan,
  };
};