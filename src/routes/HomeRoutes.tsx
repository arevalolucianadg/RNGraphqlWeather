import React from 'react';

import { RootTabParamList } from './RootParams';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabBar } from '../components';
import { Home, Search, Settings } from '../screens';

const Tab = createBottomTabNavigator<RootTabParamList>();

const HomeTabs = () => (
  <Tab.Navigator
    initialRouteName="Home"
    tabBar={(props) => <BottomTabBar {...props} />}>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Search" component={Search} />
    <Tab.Screen name="Settings" component={Settings} />
  </Tab.Navigator>
)

export default HomeTabs;
