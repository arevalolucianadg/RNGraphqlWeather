import { Theme } from '../styles/types';

export const isLightText = (theme: Theme): boolean =>
  theme.themeTitle === 'light';

interface HandleColorProps {
  color?: 'primary' | 'secondary' | 'danger' | 'warning' | undefined;
  theme: Theme;
}

export const handleBGColor = ({ color, theme }: HandleColorProps): string => {
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

export const handleTextColor = ({ color, theme }: HandleColorProps): string => {
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
