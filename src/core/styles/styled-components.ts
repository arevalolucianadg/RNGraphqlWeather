/* eslint-disable no-restricted-imports */
import * as styledComponents from 'styled-components/native';
import { ReactNativeThemedStyledComponentsModule } from 'styled-components/native';
import { Theme } from './types';

/**
 * Types
 */
type CustomThemeStyled = ReactNativeThemedStyledComponentsModule<Theme>;

const {
  css,
  default: styled,
  ThemeContext,
  ThemeProvider,
} = styledComponents as unknown as CustomThemeStyled;

export { css, ThemeContext, ThemeProvider };
export default styled;
