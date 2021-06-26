import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';

import Router from './routes';
import {navigationRef} from './routes/RootNavigation';
import { light } from './styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={light}>
    <NavigationContainer ref={navigationRef}>
      <Router />
    </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
