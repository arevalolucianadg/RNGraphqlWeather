import React, { FunctionComponent, useContext } from 'react';
import { StatusBar } from 'react-native';

import { Theme, ThemeContext } from '@core/styles';
import { Layout } from './styles';

/**
 * Types
 */
interface LayoutBaseProps {
  children: JSX.Element | JSX.Element[];
  spacing?: boolean;
}

export const LayoutBase: FunctionComponent<LayoutBaseProps> = ({
  children,
  spacing = false,
}) => {
  const { colors, themeTitle } = useContext(ThemeContext);

  return (
    <Layout spacing={spacing}>
      <StatusBar
        backgroundColor={colors.background}
        barStyle={themeTitle === Theme.LIGHT ? 'dark-content' : 'light-content'}
      />
      {children}
    </Layout>
  );
};
