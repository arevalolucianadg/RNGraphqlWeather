import React, { FunctionComponent } from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabBar } from '../components';
import { Home, Search, Settings } from '../screens';
import { RootTabParamList } from './root-params';

const Tab = createBottomTabNavigator<RootTabParamList>();

const HomeTabs: FunctionComponent = () => (
  <Tab.Navigator
    initialRouteName="Home"
    tabBar={props => <BottomTabBar {...props} />}
  >
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Search" component={Search} />
    <Tab.Screen name="Settings" component={Settings} />
  </Tab.Navigator>
);

export default HomeTabs;
