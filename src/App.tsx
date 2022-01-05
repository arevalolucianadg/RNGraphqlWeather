import 'react-native-gesture-handler';
import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components/native';
import {ApolloProvider} from '@apollo/client';

import Router from './routes';
import {useRootNavigation} from './routes/root-navigation';
import apolloConfig from './config/apollo';
import StorybookUI from '../storybook';
import {AppContext} from './Context/AppContext/AppContext';
import {dark, light} from './styles/theme';

import {LOAD_STORYBOOK} from '@env';
import GlobalProvider from './Context';

const GlobalState = () => {
  const {theme} = useContext(AppContext);
  const { navigatorRef } = useRootNavigation();

  return (
    <ApolloProvider client={apolloConfig}>
      <ThemeProvider theme={theme === 'light' ? light : dark}>
        <NavigationContainer ref={navigatorRef}>
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
