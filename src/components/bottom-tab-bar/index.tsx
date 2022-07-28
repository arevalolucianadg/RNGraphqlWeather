import React, { FunctionComponent } from 'react';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BottomTabItem } from '@components/bottom-tab-item';
import { useBottomTab } from '@core/hooks';
import { BottomTabBarWrapper } from './styles';
import tabs from './tabs';

export const BottomTabBar: FunctionComponent<BottomTabBarProps> = ({
  state,
  navigation,
}) => {
  const { isFocused, handlePressTab } = useBottomTab({
    state,
    navigation,
  });
  const insets = useSafeAreaInsets();

  return (
    <BottomTabBarWrapper insets={insets}>
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
