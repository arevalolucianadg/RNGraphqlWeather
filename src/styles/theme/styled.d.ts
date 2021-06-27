import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    themeTitle: string;

    colors: {
      primary: string;

      red:    string;
      yellow: string;

      gray1: string;
      gray2: string;
      gray3: string;
      gray4: string;
      gray5: string;
      gray6: string;
      white: string;

      background: string;
      paper:      string;

      inactiveIcon: string;
    };

    boxShadow: string;
  }
}
