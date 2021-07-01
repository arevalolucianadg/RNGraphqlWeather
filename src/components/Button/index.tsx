import React from 'react';

import {ButtonText, ButtonWrapper} from './Button.styles';

interface ButtonProps {
  style?: object;
  textButton: string;
  themeButton?: 'primary' | 'secondary' | 'danger' | 'warning' | undefined;
  themeText?: 'primary' | 'secondary' | 'danger' | 'warning' | undefined;
  onPress: () => void;
}

const Button = ({textButton, themeButton, themeText, style, onPress}: ButtonProps) => {
  return (
    <ButtonWrapper style={style} themeButton={themeButton} onPress={onPress}>
      <ButtonText themeText={themeText}>{textButton}</ButtonText>
    </ButtonWrapper>
  );
};

export default Button;
