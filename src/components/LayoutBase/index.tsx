import React, {useContext} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {ThemeContext} from 'styled-components/native';

import { LayoutBg } from './LayoutBase.styles';


interface LayoutBaseProps {
  children: JSX.Element;
}

const LayoutBase = ({children}: LayoutBaseProps) => {
  const {colors} = useContext(ThemeContext);

  const isLightTheme = colors.background === '#FFFFFF';

  return (
    <LayoutBg bounces={false}>
      <SafeAreaView>
        <StatusBar
          backgroundColor={colors.background}
          barStyle={isLightTheme ? 'dark-content' : 'light-content'}
        />
        {children}
      </SafeAreaView>
    </LayoutBg>
  );
};

export default LayoutBase;
