import React from 'react';
import { SvgProps } from 'react-native-svg';

import { HomeIcon, SearchIcon, SettingsIcon } from '../icons';

interface ITab {
  component: React.FC<SvgProps>;
  label: string;
  routeName: string;
}

const tabs: ITab[] = [
  {
    component: HomeIcon,
    label: 'Home',
    routeName: 'Home',
  },
  {
    component: SearchIcon,
    label: 'Search',
    routeName: 'Search',
  },
  {
    component: SettingsIcon,
    label: 'Settings',
    routeName: 'Settings',
  },
];

export default tabs;
