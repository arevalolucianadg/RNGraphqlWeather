import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components';
import {ApolloProvider} from '@apollo/client';

import Router from './routes';
import {navigationRef} from './routes/RootNavigation';
import apolloConfig from './config/apollo';
import StorybookUI from '../storybook';
import {dark, light} from './styles/theme';

import {LOAD_STORYBOOK} from '@env';

const App = () => {
  return (
    <ApolloProvider client={apolloConfig}>
      <ThemeProvider theme={light}>
        <NavigationContainer ref={navigationRef}>
          <Router />
        </NavigationContainer>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default LOAD_STORYBOOK === 'true' ? StorybookUI : App;
