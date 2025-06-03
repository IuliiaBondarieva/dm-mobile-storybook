import AsyncStorage from '@react-native-async-storage/async-storage';
import { theme, ThemeProvider, Theme } from '@storybook/react-native-theming';
import { LiteUI } from '@storybook/react-native-ui-lite';
import { SafeAreaView, StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { view } from './storybook.requires';

const isScreenshotTesting = process.env.EXPO_PUBLIC_SCREENSHOT_TESTING === 'true';

const StorybookUIRoot = view.getStorybookUI({
  shouldPersistSelection: true,
  storage: {
    getItem: AsyncStorage.getItem,
    setItem: AsyncStorage.setItem,
  },
  enableWebsockets: false,
  // onDeviceUI: !isScreenshotTesting,
  // host: '192.x.x.x',
  // port: 7007,

  // initialSelection: { kind: 'TextInput', name: 'Basic' },
  // onDeviceUI: true,
  // host: '192.168.1.69',
  
  theme: {
    base: 'light',
    background: {
      content: '#F2F2F2'
    },
    color: {
        primary: '#00D264',
        secondary: '#00463D',
        defaultText: '#535353'
    },
    input: {
        border: '#D0D0D0',
        background: '#D0D0D0',
        color: '#535353'
    },
    appBorderColor: '#D0D0D0',
    barSelectedColor: '#00D264',
    brand: {
      title: 'DocMorris Storybook',
      image: {
        uri: 'https://www.docmorris.de/assets/svg/logo.svg',
        width: 180,
        height: 50,
      } ,
    },
  },

  onDeviceUI: false,
  CustomUIComponent: LiteUI,
});

const StorybookUI = () => {
  if (isScreenshotTesting) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar hidden={isScreenshotTesting} />
        <SafeAreaProvider style={{ flex: 1 }}>
          <ThemeProvider theme={theme}>
            <StorybookUIRoot />
          </ThemeProvider>
        </SafeAreaProvider>
      </SafeAreaView>
    );
  }

  return <StorybookUIRoot />;
};

export default StorybookUI;
