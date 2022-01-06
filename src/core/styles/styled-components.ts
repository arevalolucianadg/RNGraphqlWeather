import * as styledComponents from 'styled-components/native';
import { Theme } from './types';

/**
 * Types
 */
type ThemeContextStyled =
  styledComponents.ReactNativeThemedStyledComponentsModule<Theme>;

const {
  css,
  default: styled,
  ThemeContext,
  ThemeProvider,
} = styledComponents as unknown as ThemeContextStyled;

export { css, ThemeContext, ThemeProvider };
export default styled;
