import 'react-native-gesture-handler';
import React, { FunctionComponent, useContext } from 'react';
import { ApolloProvider } from '@apollo/client';
import { NavigationContainer } from '@react-navigation/native';

import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import apolloConfig from '@core/config/apollo';
import GlobalProvider from '@core/context';
import { AppContext } from '@core/context/app-context';
import { dark, light, ThemeProvider } from '@core/styles';
import Router from '@routes';
import { useRootNavigation } from '@routes/root-navigation';

const GlobalState: FunctionComponent = () => {
  const { theme } = useContext(AppContext);
  const { navigatorRef } = useRootNavigation();

  return (
    <ApolloProvider client={apolloConfig}>
      <ThemeProvider theme={theme === 'light' ? light : dark}>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          <NavigationContainer ref={navigatorRef}>
            <Router />
          </NavigationContainer>
        </SafeAreaProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
};

const App: FunctionComponent = () => (
  <GlobalProvider>
    <GlobalState />
  </GlobalProvider>
);

export default App;
