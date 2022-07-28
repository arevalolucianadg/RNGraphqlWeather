import React, { FunctionComponent, useContext } from 'react';
import { ActivityIndicator } from 'react-native';

import { ThemeContext } from '@core/styles';
import { LoadingWrapper } from './styles';

export const LoadingView: FunctionComponent = () => {
  const { colors } = useContext(ThemeContext);

  return (
    <LoadingWrapper>
      <ActivityIndicator size="large" color={colors.primary} />
    </LoadingWrapper>
  );
};
