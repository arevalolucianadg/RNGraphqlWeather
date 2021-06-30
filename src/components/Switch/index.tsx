import React, {useContext} from 'react';
import SwitchSelector from 'react-native-switch-selector';
import {ThemeContext} from 'styled-components/native';

import {ISwitchSelectorOption} from '../../types/switch';
import {global} from '../../styles/GlobalStyles';

interface SwitchProps {
  initial?: number;
  options: ISwitchSelectorOption[];
  onPress: (value: string) => void;
}

const Switch = ({initial, options, onPress}: SwitchProps) => {
  const {colors} = useContext(ThemeContext);

  return (
    <SwitchSelector
      initial={initial ? initial : 0}
      options={options}
      borderColor={colors.primary}
      buttonColor={colors.primary}
      hasPadding
      onPress={onPress}
      style={{
        paddingRight: 3,
        width: 150,
      }}
      textColor={colors.gray1}
      textStyle={{
        fontFamily: global.font.weightMedium,
      }}
    />
  );
};

export default Switch;
