import { RefObject } from 'react';
import {
  NavigationContainerRef,
  useNavigationContainerRef,
} from '@react-navigation/native';

/**
 * Types
 */
interface RootNavigatorHook {
  navigatorRef: RefObject<NavigationContainerRef<Record<string, never>>>;
}

/**
 * useRootNavigation
 */

export const useRootNavigation = (): RootNavigatorHook => {
  const navigatorRef = useNavigationContainerRef<Record<string, never>>();

  return {
    navigatorRef,
  };
};
