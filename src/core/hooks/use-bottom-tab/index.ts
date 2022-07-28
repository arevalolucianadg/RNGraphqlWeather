import { useState } from 'react';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

/**
 * Types
 */
type UseBottomTabProps = Pick<BottomTabBarProps, 'navigation' | 'state'>;

interface UseBottomTabHook {
  isFocused: (currentTab: string) => boolean;
  handlePressTab: (activeTab: string, idx: number) => void;
}

export const useBottomTab = ({
  state,
  navigation,
}: UseBottomTabProps): UseBottomTabHook => {
  const [routeSelected, setRouteSelected] = useState<string>('Home');

  const isFocused = (currentTab: string): boolean =>
    currentTab === routeSelected;

  const handlePressTab = (activeTab: string, idx: number): void => {
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
