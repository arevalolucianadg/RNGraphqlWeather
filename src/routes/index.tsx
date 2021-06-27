import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeRoutes from './HomeRoutes';
import {BottomTabBar} from '../components';
import {Search, Settings} from '../screens';
import { RootTabParamList } from './RootParams';

const Tab = createBottomTabNavigator<RootTabParamList>();

const router = () => (
  <Tab.Navigator
    initialRouteName="Home"
    tabBar={(props) => <BottomTabBar {...props} />}>
    <Tab.Screen name="Home" component={HomeRoutes} />
    <Tab.Screen name="Search" component={Search} />
    <Tab.Screen name="Settings" component={Settings} />
  </Tab.Navigator>
);

export default router;
