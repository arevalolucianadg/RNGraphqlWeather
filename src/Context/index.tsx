import React from 'react';
import {AppProvider} from './AppContext/AppContext';

interface GlobalStateProps {
  children: JSX.Element;
}

const GlobalProvider = ({children}: GlobalStateProps) => {
  return <AppProvider>{children}</AppProvider>;
};

export default GlobalProvider;
