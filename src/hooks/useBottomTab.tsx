import React, {useState} from 'react';
import {
  NavigationHelpers,
  ParamListBase,
  TabNavigationState,
} from '@react-navigation/native';
import {BottomTabNavigationEventMap} from '@react-navigation/bottom-tabs/lib/typescript/src/types';

interface UseBottomTabProps {
  state: TabNavigationState<ParamListBase>;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
}

const useBottomTab = ({state, navigation}: UseBottomTabProps) => {
  const [routeSelected, setRouteSelected] = useState<string>('Home');

  const isFocused = (currentTab: string) =>
    currentTab === routeSelected ? true : false;

  const handlePressTab = (activeTab: string, idx: number) => {
    if (state.index !== idx) {
      setRouteSelected(activeTab);
      navigation.navigate(activeTab);
    }
  };

  return {
    isFocused,
    handlePressTab,
  };
};

export default useBottomTab;
