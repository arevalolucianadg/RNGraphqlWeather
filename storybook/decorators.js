import React from 'react';
import {ThemeProvider} from 'styled-components';
import styled from 'styled-components/native';

import {light} from '../src/styles/theme';

const StoryWrapper = styled.View`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const StylesDecorator = storyFn => (
  <ThemeProvider theme={light}>
    <StoryWrapper>{storyFn()}</StoryWrapper>
  </ThemeProvider>
);

export default StylesDecorator;
