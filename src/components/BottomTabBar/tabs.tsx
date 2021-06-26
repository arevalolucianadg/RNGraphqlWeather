import React from 'react';

import HomeActiveIcon from '../../assets/svg/bottomTabIcons/home-active-icon.svg';
import SearchActiveIcon from '../../assets/svg/bottomTabIcons/search-active-icon.svg';
import SettingsActiveIcon from '../../assets/svg/bottomTabIcons/settings-active-icon.svg';
import HomeInactiveIcon from '../../assets/svg/bottomTabIcons/home-inactive-icon.svg';
import SearchInactiveIcon from '../../assets/svg/bottomTabIcons/search-inactive-icon.svg';
import SettingsInactiveIcon from '../../assets/svg/bottomTabIcons/settings-inactive-icon.svg';


interface ITab {
  activeIcon: JSX.Element;
  inactiveIcon: JSX.Element;
  label: string;
  routeName: string;
}

const tabs: ITab[] = [
  {
    activeIcon: <HomeActiveIcon height="100%" width="100%" />,
    inactiveIcon: <HomeInactiveIcon height="100%" width="100%" />,
    label: 'Home',
    routeName: 'Home',
  },
  {
    activeIcon: <SearchActiveIcon height="100%" width="100%" />,
    inactiveIcon: <SearchInactiveIcon height="100%" width="100%" />,
    label: 'Search',
    routeName: 'Search',
  },
  {
    activeIcon: <SettingsActiveIcon height="100%" width="100%" />,
    inactiveIcon: <SettingsInactiveIcon height="100%" width="100%" />,
    label: 'Settings',
    routeName: 'Settings',
  },
];

export default tabs;
