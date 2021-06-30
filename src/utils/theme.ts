import {RefAttributes} from 'react';
import {TextProps} from 'react-native';
import {DefaultTheme, ThemedStyledProps} from 'styled-components';

export const isLightText = (
  props: ThemedStyledProps<TextProps & RefAttributes<Text>, DefaultTheme>,
) => {
  return props.theme.themeTitle === 'light';
};
