import { useFonts } from 'expo-font';
import { Poppins_700Bold } from '@expo-google-fonts/poppins/700Bold';
import { Poppins_400Regular_Italic } from '@expo-google-fonts/poppins/400Regular_Italic';
import { Poppins_400Regular } from '@expo-google-fonts/poppins/400Regular';
import { Stack } from "expo-router";
import { ThemeProvider } from '@/contexts/ThemeContext';

export default function RootLayout() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular, 
    Poppins_400Regular_Italic, 
    Poppins_700Bold
  });

  if (!fontsLoaded) {
    console.warn('Fonts are not loaded yet');
    return null;
  }

  
  return (
    <ThemeProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="index" />
      </Stack>
    </ThemeProvider>
  )
}
