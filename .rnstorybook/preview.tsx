import { View, Appearance } from 'react-native';
import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds';
import type { Preview } from '@storybook/react';
import { Colors } from '../src/constants/Colors';

const preview: Preview = {
  decorators: [
    (Story) => (
      <View style={{ padding: 8, flex: 1 }}>
        <Story />
      </View>
    ),
    withBackgrounds,
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        method: 'alphabetical',
        includeNames: true,
        order: ['ControlExamples', ['ControlExample'], 'InteractionExample', 'DeepControls'],
      },
    },
    hideFullScreenButton: false,
    noSafeArea: false,
    my_param: 'anything',
    backgrounds: {
      default: 'plain',
      values: [
        { name: 'plain', value: 'white' },
        { name: 'dark', value: '#333' },
        { name: 'app', value: '#eeeeee' },
      ],
    },
    themes: {
      default: 'default',
      list: [
        {
          name: 'default',
          class: '',
          color: Colors.default.primaryColor1,
        },
        {
          name: 'dm',
          class: 'dm-theme',
          color: Colors.dm.primaryColor1,
        },
      ],
    },
  },
};

export default preview;
