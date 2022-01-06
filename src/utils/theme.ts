import {RefAttributes} from 'react';
import {Text, TextProps} from 'react-native';
import {DefaultTheme, ThemedStyledProps} from 'styled-components';

export const isLightText = (
  props: ThemedStyledProps<TextProps & RefAttributes<Text>, DefaultTheme>,
): boolean => props.theme.themeTitle === 'light';

interface HandleColorProps {
  color?: 'primary' | 'secondary' | 'danger' | 'warning' | undefined;
  theme: DefaultTheme;
}

export const handleBGColor = ({color, theme}: HandleColorProps): string => {
  switch (color) {
    case 'primary':
      return theme.colors.primary;
    case 'secondary':
      return theme.colors.gray1;
    case 'danger':
      return theme.colors.red;
    case 'warning':
      return theme.colors.yellow;
    default:
      return theme.colors.primary;
  }
};

export const handleTextColor = ({color, theme}: HandleColorProps): string => {
  switch (color) {
    case 'primary':
      return theme.colors.white;
    case 'secondary':
      return theme.colors.white;
    case 'danger':
      return theme.colors.white;
    case 'warning':
      return theme.colors.gray1;
    default:
      return theme.colors.white;
  }
};
