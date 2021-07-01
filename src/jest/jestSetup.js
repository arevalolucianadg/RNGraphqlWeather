import React from 'react'
import 'react-native-gesture-handler/jestSetup';
import 'jest-styled-components';

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');

  Reanimated.default.call = () => {};

  return Reanimated;
});

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

export const mockedNavigate = jest.fn();
jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({
    navigate: mockedNavigate,
  }),
  createNavigatorFactory: mockedNavigate,
  createStackNavigator: mockedNavigate,
  createBottomTabNavigator: mockedNavigate,
}));