import React, { FunctionComponent, useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { ThemeContext } from '../../core/styles/styled-components';

import { TabItem, TabIcon, TabLabel } from './styles';

export interface BottomTabItemProps {
  icon: React.FC<SvgProps>;
  isActive: boolean;
  label: string;
  onPress: () => void;
}

const BottomTabItem: FunctionComponent<BottomTabItemProps> = ({
  icon,
  isActive,
  label,
  onPress,
}) => {
  const { colors } = useContext(ThemeContext);

  const SvgIcon = icon;

  return (
    <TouchableOpacity onPress={onPress}>
      <TabItem>
        <TabIcon>
          <SvgIcon
            height="100%"
            width="100%"
            fill={isActive ? colors.primary : colors.inactiveIcon}
          />
        </TabIcon>
        <TabLabel active={isActive}>{label}</TabLabel>
      </TabItem>
    </TouchableOpacity>
  );
};

export default BottomTabItem;
