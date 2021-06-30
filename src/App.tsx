import 'react-native-gesture-handler';
import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components';
import {ApolloProvider} from '@apollo/client';

import Router from './routes';
import {navigationRef} from './routes/RootNavigation';
import apolloConfig from './config/apollo';
import StorybookUI from '../storybook';
import {AppContext} from './Context/AppContext/AppContext';
import {dark, light} from './styles/theme';

import {LOAD_STORYBOOK} from '@env';
import GlobalProvider from './Context';

const GlobalState = () => {
  const {theme} = useContext(AppContext);

  return (
    <ApolloProvider client={apolloConfig}>
      <ThemeProvider theme={theme === 'light' ? light : dark}>
        <NavigationContainer ref={navigationRef}>
          <Router />
        </NavigationContainer>
      </ThemeProvider>
    </ApolloProvider>
  );
};

const App = () => {
  return (
    <GlobalProvider>
      <GlobalState />
    </GlobalProvider>
  );
};

export default LOAD_STORYBOOK === 'true' ? StorybookUI : App;
