import React from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

import useBottomTab from '../../core/hooks/use-bottom-tab';
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
            icon={tab.component}
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
