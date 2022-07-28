module.exports = {
  preset: 'react-native',
  verbose: true,
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@?react-native|@react-native-community|@react-navigation)',
  ],
  moduleDirectories: ['node_modules'],
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)test)\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFiles: ['./node_modules/react-native-gesture-handler/jestSetup.js'],
  setupFilesAfterEnv: [
    '@testing-library/jest-native/extend-expect',
    './jest.setup.js',
  ],
  coveragePathIgnorePatterns: [
    'node_modules',
    '<rootDir>/assets/',
    '<rootDir>/android/',
    '<rootDir>/ios/',
    '<rootDir>/types/',
  ],
};
