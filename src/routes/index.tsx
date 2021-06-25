import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Home, Search, Settings} from '../screens';

const Tab = createBottomTabNavigator();

const router = () => (
  <Tab.Navigator initialRouteName="Home">
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Search" component={Search} />
    <Tab.Screen name="Settings" component={Settings} />
  </Tab.Navigator>
);

export default router;
