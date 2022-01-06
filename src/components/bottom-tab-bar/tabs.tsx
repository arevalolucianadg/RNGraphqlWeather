import React from 'react';
import {SvgProps} from 'react-native-svg';

import HomeIcon from '../../assets/svg/bottomTabIcons/home-icon.svg';
import SearchIcon from '../../assets/svg/bottomTabIcons/search-icon.svg';
import SettingsIcon from '../../assets/svg/bottomTabIcons/settings-icon.svg';

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
