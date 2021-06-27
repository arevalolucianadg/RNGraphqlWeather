import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';

import HomeActiveIcon from '../../assets/svg/bottomTabIcons/home-active-icon.svg';
import HomeInactiveIcon from '../../assets/svg/bottomTabIcons/home-inactive-icon.svg';
import BottomTabItem from './';
import StylesDecorator from '../../../storybook/decorators';

export const Tab = {
  activeIcon: <HomeActiveIcon height="100%" width="100%" />,
  inactiveIcon: <HomeInactiveIcon height="100%" width="100%" />,
  label: 'Home',
};

export const actions = {
  onPress: action('onPress'),
};

storiesOf('BottomTab Item', module)
  .addDecorator(StylesDecorator)
  .add('inactive', () => (
    <BottomTabItem
      label={Tab.label}
      isActive={false}
      icon={Tab.inactiveIcon}
      onPress={actions.onPress}
    />
  ))
  .add('active', () => (
    <BottomTabItem
      label={Tab.label}
      isActive={true}
      icon={Tab.activeIcon}
      onPress={actions.onPress}
    />
  ));
