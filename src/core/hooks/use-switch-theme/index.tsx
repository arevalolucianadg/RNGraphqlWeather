import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { Dark, Light } from '@components/icons';
import { ISwitchSelectorOption } from '@components/switch/types';
import { AppContext } from '@core/context/app-context';
import { saveStorage, KEY_THEME_STORE } from '@core/utils';

/**
 * Types
 */
interface UseSwitchThemeHook {
  initialTheme: number;
  themeOptions: ISwitchSelectorOption[];
  toggleTheme: (value: string) => void;
}

export const useSwitchTheme = (): UseSwitchThemeHook => {
  const { colors } = useContext(ThemeContext);
  const { theme, handleTheme } = useContext(AppContext);

  const themeOptions = [
    {
      label: '',
      value: 'light',
      customIcon: (
        <Light
          height="20px"
          width="20px"
          fill={theme === 'light' ? colors.white : colors.gray1}
        />
      ),
    },
    {
      label: '',
      value: 'dark',
      customIcon: (
        <Dark
          height="20px"
          width="20px"
          fill={theme === 'dark' ? colors.white : colors.gray1}
        />
      ),
    },
  ];

  const initialTheme = theme === 'light' ? 0 : 1;

  const toggleTheme = (value: string): void => {
    handleTheme(value);
    saveStorage({
      key: KEY_THEME_STORE,
      item: value,
    });
  };

  return {
    initialTheme,
    themeOptions,
    toggleTheme,
  };
};
