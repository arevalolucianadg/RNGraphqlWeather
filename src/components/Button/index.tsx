import React, { FunctionComponent } from 'react';

import { ButtonText, ButtonWrapper } from './styles';

interface ButtonProps {
  style?: object;
  textButton: string;
  themeButton?: 'primary' | 'secondary' | 'danger' | 'warning' | undefined;
  themeText?: 'primary' | 'secondary' | 'danger' | 'warning' | undefined;
  onPress: () => void;
}

export const Button: FunctionComponent<ButtonProps> = ({
  textButton,
  themeButton,
  themeText,
  style,
  onPress,
}) => (
  <ButtonWrapper style={style} themeButton={themeButton} onPress={onPress}>
    <ButtonText themeText={themeText}>{textButton}</ButtonText>
  </ButtonWrapper>
);
