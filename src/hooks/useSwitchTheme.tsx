import React, {useContext, useState} from 'react';
import {ThemeContext} from 'styled-components';

import {ISwitchSelectorOption} from '../types/switch';
import LightSvg from '../assets/svg/sun.svg';
import DarkSvg from '../assets/svg/moon.svg';

const useSwitchTheme = () => {
  const {colors} = useContext(ThemeContext);

  const [theme, setTheme] = useState<string | number | ISwitchSelectorOption>(
    'light',
  );

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

  const toggleTheme = (value: string | number | ISwitchSelectorOption) => {
    setTheme(value);
  };

  return {
    themeOptions,
    toggleTheme,
  };
};

export default useSwitchTheme;
