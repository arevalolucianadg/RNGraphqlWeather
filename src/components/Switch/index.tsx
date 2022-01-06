import React, { FunctionComponent, useContext } from 'react';
import SwitchSelector from 'react-native-switch-selector';
import { ISwitchSelectorOption } from '../../../types/switch';
import { ThemeContext } from '../../core/styles';

import { global } from '../../core/styles/global-styles';

/**
 * Constants
 */
const STYLES_SWITCH = {
  paddingRight: 3,
  width: 150,
};

/**
 * Types
 */
interface SwitchProps {
  initial?: number;
  options: ISwitchSelectorOption[];
  onPress: (value: string) => void;
}

const Switch: FunctionComponent<SwitchProps> = ({
  initial,
  options,
  onPress,
}) => {
  const { colors } = useContext(ThemeContext);

  return (
    <SwitchSelector
      initial={initial ?? 0}
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
