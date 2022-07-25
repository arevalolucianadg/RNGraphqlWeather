import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import { Text } from 'react-native';

import BottomTabItem from '.';
import { HomeIcon } from '../icons';

export const Tab = {
  component: HomeIcon,
  label: 'Home',
};

export const actions = {
  onPress: action('onPress'),
};

storiesOf('BottomTab Item', module)
  .add('inactive', () => (
    <BottomTabItem
      label={Tab.label}
      isActive={false}
      icon={() => <Text>icon</Text>}
      onPress={actions.onPress}
    />
  ))
  .add('active', () => (
    <BottomTabItem
      label={Tab.label}
      isActive={true}
      icon={() => <Text>icon</Text>}
      onPress={actions.onPress}
    />
  ));
