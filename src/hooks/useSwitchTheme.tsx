import React, {useEffect, useContext} from 'react';
import {ThemeContext} from 'styled-components';

import LightSvg from '../assets/svg/sun.svg';
import DarkSvg from '../assets/svg/moon.svg';
import {AppContext} from '../Context/AppContext/AppContext';
import {saveStorage, getStorage} from '../utils/asyncStorage';

const useSwitchTheme = () => {
  const {colors} = useContext(ThemeContext);
  const {theme, handleTheme} = useContext(AppContext);

  const KEY_THEME_STORE = '@theme';

  const themeOptions = [
    {
      label: '',
      value: 'light',
      customIcon: (
        <LightSvg
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
        <DarkSvg
          height="20px"
          width="20px"
          fill={theme === 'dark' ? colors.white : colors.gray1}
        />
      ),
    },
  ];

  const initialTheme = theme === 'light' ? 0 : 1;

  const toggleTheme = (value: string) => {
    handleTheme(value);
    saveStorage({key: KEY_THEME_STORE, item: value});
  };

  return {
    initialTheme,
    themeOptions,
    toggleTheme,
  };
};

export default useSwitchTheme;
