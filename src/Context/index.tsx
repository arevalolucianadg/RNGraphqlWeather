import React, { FunctionComponent, ReactElement } from 'react';
import { AppProvider } from './app-context/app-context';

interface GlobalStateProps {
  children: ReactElement;
}

const GlobalProvider: FunctionComponent<GlobalStateProps> = ({ children }) => (
  <AppProvider>{children}</AppProvider>
);

export default GlobalProvider;
