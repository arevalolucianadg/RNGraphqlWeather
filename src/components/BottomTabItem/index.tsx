import React from 'react';
import {TouchableOpacity} from 'react-native';

import {TabItem, TabIcon, TabLabel} from './BottomTabItem.styles';

interface BottomTabItemProps {
  icon: JSX.Element;
  isActive: boolean;
  label: string;
  onPress: () => void;
}

const BottomTabItem = ({
  icon,
  isActive,
  label,
  onPress,
}: BottomTabItemProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <TabItem>
        <TabIcon>{icon}</TabIcon>
        <TabLabel active={isActive}>{label}</TabLabel>
      </TabItem>
    </TouchableOpacity>
  );
};

export default BottomTabItem;
