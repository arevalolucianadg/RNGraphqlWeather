import React from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

import useBottomTab from '../../hooks/useBottomTab';
import BottomTabItem from '../BottomTabItem';
import tabs from './tabs';

import {BottomTabBarWrapper} from './BottomTabBar.styles';


const BottomTabBar = ({state, navigation}: BottomTabBarProps) => {

  const {isFocused, handlePressTab} = useBottomTab({ state, navigation });

  return (
    <BottomTabBarWrapper>
      {tabs.map((tab, idx) => {
        return (
          <BottomTabItem 
            key={`${tab.routeName}-${idx}`}
            icon={isFocused(tab.routeName) ? tab.activeIcon : tab.inactiveIcon}
            isActive={isFocused(tab.routeName)}
            label={tab.label}
            onPress={() => handlePressTab(tab.routeName, idx)}
          />
        );
      })}
    </BottomTabBarWrapper>
  );
};

export default BottomTabBar;
