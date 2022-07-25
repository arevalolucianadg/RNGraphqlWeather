import React, { FunctionComponent } from 'react';
import { styled, ThemeProvider } from '../src/core/styles';

import { light } from '../src/core/styles/theme';

const StoryWrapper = styled.View`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const StylesDecorator: FunctionComponent = ({ children }) => (
  <ThemeProvider theme={light}>
    <StoryWrapper>{children}</StoryWrapper>
  </ThemeProvider>
);

export default StylesDecorator;
