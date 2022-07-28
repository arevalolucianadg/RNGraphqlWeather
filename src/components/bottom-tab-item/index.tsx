/* eslint-disable import/namespace */
import React, { FunctionComponent, useContext } from 'react';
import { TouchableOpacity } from 'react-native';

import * as icons from '@components/icons';
import { IconName } from '@components/icons/types';
import { ThemeContext } from '@core/styles/styled-components';

import { TabItem, TabIcon, TabLabel } from './styles';

export interface BottomTabItemProps {
  iconName: IconName;
  isActive: boolean;
  label: string;
  onPress: () => void;
}

export const BottomTabItem: FunctionComponent<BottomTabItemProps> = ({
  iconName,
  isActive,
  label,
  onPress,
}) => {
  const { colors } = useContext(ThemeContext);

  const SvgIcon = icons[iconName];

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
