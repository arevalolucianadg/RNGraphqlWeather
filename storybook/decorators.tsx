import React, { FunctionComponent } from 'react';
import styled, { ThemeProvider } from 'styled-components/native';

import {light} from '../src/styles/theme';

const StoryWrapper = styled.View`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const StylesDecorator: FunctionComponent = ({ children }) => (
  <ThemeProvider theme={light}>
    <StoryWrapper>{ children }</StoryWrapper>
  </ThemeProvider>
);

export default StylesDecorator;
