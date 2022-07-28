module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ts', '.tsx'],
        alias: {
          '@components': './src/components',
          '@core': './src/core',
          '@models': './src/models',
          '@routes': './src/routes',
          '@screens': './src/screens',
        },
      },
    ],
    [
      'module:react-native-dotenv',
      {
        moduleName: 'react-native-dotenv',
        path: './.env',
        safe: true,
        allowUndefined: true,
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
