import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';

import HomeIcon from '../../assets/svg/bottomTabIcons/home-icon.svg';
import BottomTabItem from './';
import StylesDecorator from '../../../storybook/decorators';

export const Tab = {
  component: HomeIcon,
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
      icon={Tab.component}
      onPress={actions.onPress}
    />
  ))
  .add('active', () => (
    <BottomTabItem
      label={Tab.label}
      isActive={true}
      icon={Tab.component}
      onPress={actions.onPress}
    />
  ));
