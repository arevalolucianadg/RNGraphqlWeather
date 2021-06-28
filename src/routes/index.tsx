import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {WeatherDetail} from '../screens';
import HomeTabs from './HomeRoutes';

const Stack = createStackNavigator();

const router = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Home" component={HomeTabs} />
    <Stack.Screen component={WeatherDetail} name="WeatherDetail" />
  </Stack.Navigator>
);

export default router;
