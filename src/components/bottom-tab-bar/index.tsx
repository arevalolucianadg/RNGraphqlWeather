import React, { FunctionComponent } from 'react';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

import useBottomTab from '../../core/hooks/use-bottom-tab';
import { BottomTabItem } from '../bottom-tab-item';
import { BottomTabBarWrapper } from './styles';
import tabs from './tabs';

const BottomTabBar: FunctionComponent<BottomTabBarProps> = ({
  state,
  navigation,
}) => {
  const { isFocused, handlePressTab } = useBottomTab({
    state,
    navigation,
  });

  return (
    <BottomTabBarWrapper>
      {tabs.map((tab, idx) => (
        <BottomTabItem
          key={`${tab.routeName}-${idx}`}
          iconName={tab.component}
          isActive={isFocused(tab.routeName)}
          label={tab.label}
          onPress={() => handlePressTab(tab.routeName, idx)}
        />
      ))}
    </BottomTabBarWrapper>
  );
};

export default BottomTabBar;
