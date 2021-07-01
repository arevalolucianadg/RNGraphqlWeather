import React, {useContext} from 'react';
import {StatusBar} from 'react-native';
import {ThemeContext} from 'styled-components/native';

import {LayoutSafe} from './LayoutBase.styles';

interface LayoutBaseProps {
  children: JSX.Element;
}

const LayoutBase = ({children}: LayoutBaseProps) => {
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
