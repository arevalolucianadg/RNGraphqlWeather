import React, { FunctionComponent, ReactElement } from 'react';
import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context';
import { styled } from '@core/styles';

/**
 * Types
 */

interface SafeAreaProps {
  children: ReactElement;
}

interface SafeAreaWrapperProps {
  insets: EdgeInsets;
}

/**
 * Components
 */

const SafeAreaWrapper = styled.View<SafeAreaWrapperProps>`
  background-color: ${({ theme: { colors } }) => colors.background};
  flex: 1;

  ${({ insets: { left, right, top } }) => `
    padding: ${top}px ${right}px 0 ${left}px
  `};
`;

/**
 * SafeArea
 */

export const SafeArea: FunctionComponent<SafeAreaProps> = ({ children }) => {
  const insets = useSafeAreaInsets();

  return <SafeAreaWrapper insets={insets}>{children}</SafeAreaWrapper>;
};
