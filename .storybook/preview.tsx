import { Colors } from '../src/constants/Colors';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    // actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
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
