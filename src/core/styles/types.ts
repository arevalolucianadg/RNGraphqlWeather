export interface Colors {
  primary: string;

  red: string;
  yellow: string;

  gray1: string;
  gray2: string;
  gray3: string;
  gray4: string;
  gray5: string;
  gray6: string;
  white: string;

  background: string;
  paper: string;
  text: string;

  inactiveIcon: string;
}

export enum Theme {
  DARK = 'DARK',
  LIGHT = 'LIGHT',
}

export interface ThemeProps {
  colors: Colors;
  boxShadow: string;
  themeTitle: Theme;
}
