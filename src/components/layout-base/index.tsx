import React, {FunctionComponent, ReactElement, useContext} from 'react';
import {StatusBar} from 'react-native';
import {ThemeContext} from 'styled-components/native';

import {LayoutSafe} from './styles';

/**
 * Types
 */
interface LayoutBaseProps {
  children: ReactElement;
}

const LayoutBase: FunctionComponent<LayoutBaseProps> = ({children}) => {
  const {colors} = useContext(ThemeContext);

  const isLightTheme = colors.background === '#FFFFFF';

  return (
    <LayoutSafe>
      <StatusBar
        backgroundColor={colors.background}
        barStyle={isLightTheme ? 'dark-content' : 'light-content'}
      />
      {children}
    </LayoutSafe>
  );
};

export default LayoutBase;
