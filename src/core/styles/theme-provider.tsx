import React, { FunctionComponent, useContext } from 'react';

import { AppContext } from '@core/context/app-context';
import { ThemeProvider as Provider } from './styled-components';
import { dark, light } from './theme';

/**
 * Types
 */

interface ThemeProviderProps {
  children: JSX.Element;
}

/**
 * ThemeProvider
 */

const ThemeProvider: FunctionComponent<ThemeProviderProps> = ({ children }) => {
  const { theme } = useContext(AppContext);

  return (
    <Provider theme={theme === 'light' ? light : dark}>
      <>{children}</>
    </Provider>
  );
};

export default ThemeProvider;
