import 'react-native-gesture-handler';
import React, { FunctionComponent, useContext } from 'react';
import { ApolloProvider } from '@apollo/client';
import { NavigationContainer } from '@react-navigation/native';
import { LOAD_STORYBOOK } from 'react-native-dotenv';

import StorybookUI from '../storybook';
import apolloConfig from './config/apollo';
import GlobalProvider from './context';
import { AppContext } from './context/app-context/app-context';
import { ThemeProvider } from './core/styles';
import { dark, light } from './core/styles/theme';
import Router from './routes';
import { useRootNavigation } from './routes/root-navigation';

const GlobalState: FunctionComponent = () => {
  const { theme } = useContext(AppContext);
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

const App: FunctionComponent = () => (
  <GlobalProvider>
    <GlobalState />
  </GlobalProvider>
);

export default LOAD_STORYBOOK === 'true' ? StorybookUI : App;
