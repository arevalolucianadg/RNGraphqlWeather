import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StorybookUI from '../storybook';
import {ThemeProvider} from 'styled-components';

import Router from './routes';
import {navigationRef} from './routes/RootNavigation';
import {dark, light} from './styles/theme';

import {LOAD_STORYBOOK} from '@env';

const App = () => {

  return (
    <ThemeProvider theme={light}>
      <NavigationContainer ref={navigationRef}>
        <Router />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default LOAD_STORYBOOK === 'true' ? StorybookUI : App;
