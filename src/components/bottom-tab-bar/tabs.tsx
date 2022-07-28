import { IconName } from '../icons/types';

interface ITab {
  component: IconName;
  label: string;
  routeName: string;
}

const tabs: ITab[] = [
  {
    component: 'HomeIcon',
    label: 'Home',
    routeName: 'Home',
  },
  {
    component: 'SearchIcon',
    label: 'Search',
    routeName: 'Search',
  },
  {
    component: 'SettingsIcon',
    label: 'Settings',
    routeName: 'Settings',
  },
];

export default tabs;
