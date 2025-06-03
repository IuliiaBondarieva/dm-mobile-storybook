import { StorybookConfig } from '@storybook/react-native';

const main: StorybookConfig = {
  stories: [
    '../src/components/**/*.stories.?(ts|tsx|js|jsx)',
    '../other_components/**/*.stories.?(ts|tsx|js|jsx)',
    {
      directory: '../../../packages/react-native-ui',
      titlePrefix: 'react-native-ui',
      files: '**/*.stories.?(ts|tsx|js|jsx)',
    },
  ],
  addons: [
    { name: '@storybook/addon-ondevice-controls' },
    '@storybook/addon-ondevice-backgrounds',
    '@storybook/addon-ondevice-actions',
    '@storybook/addon-ondevice-notes',
    'storybook-addon-deep-controls',
    'storybook-addon-themes',
  ],
  reactNative: {
    playFn: false,
  },

  framework: '@storybook/react-native',

  webpackFinal: async (config) => {
    // configure for absolute imports
    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin({
        extensions: config.resolve.extensions,
      }),
    ];

    // disable whatever is already set to load SVGs
    config.module.rules
      .filter(rule => rule.test.test('.svg'))
      .forEach(rule => rule.exclude = /\.svg$/i);

    // add SVGR instead
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack'
        },
        {
          loader: 'file-loader',
          options: {
            name: 'static/media/[path][name].[ext]'
          }
        }
      ],
      type: 'javascript/auto',
      issuer: {
        and: [/\.(ts|tsx|js|jsx|md|mdx)$/]
      }
    });

    return config;
  }
};

export default main;
