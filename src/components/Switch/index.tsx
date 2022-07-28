import React, { FunctionComponent, useContext } from 'react';
import SwitchSelector from 'react-native-switch-selector';
import { ISwitchSelectorOption } from '../../../types/switch';
import { ThemeContext } from '../../core/styles';

import { global } from '../../core/styles/global-styles';

/**
 * Types
 */

interface SwitchProps {
  initial?: number;
  options: ISwitchSelectorOption[];
  onPress: (value: string) => void;
}

/**
 * Constants
 */

const STYLES_SWITCH = {
  paddingRight: 3,
  width: 150,
};

/**
 * Switch
 */

const Switch: FunctionComponent<SwitchProps> = ({
  initial = 0,
  options,
  onPress,
}) => {
  const { colors } = useContext(ThemeContext);

  return (
    <SwitchSelector
      initial={initial}
      options={options}
      borderColor={colors.primary}
      buttonColor={colors.primary}
      hasPadding
      onPress={onPress}
      style={STYLES_SWITCH}
      textColor={colors.gray1}
      textStyle={{
        fontFamily: global.font.weightMedium,
      }}
    />
  );
};

export default Switch;
