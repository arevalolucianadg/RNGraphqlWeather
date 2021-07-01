import React, {useContext} from 'react';
import {ActivityIndicator} from 'react-native';
import {ThemeContext} from 'styled-components';

import {LoadingWrapper} from './LoadingView.styles';

const LoadingView = () => {
  const {colors} = useContext(ThemeContext);

  return (
    <LoadingWrapper>
      <ActivityIndicator size="large" color={colors.primary} />
    </LoadingWrapper>
  );
};

export default LoadingView;
