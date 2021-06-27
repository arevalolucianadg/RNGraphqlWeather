import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Home, WeatherDetail} from '../screens';
import { RootStackParamList } from './RootParams';

const Stack = createStackNavigator<RootStackParamList>();

const HomeRoutes = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen component={Home} name="Home" />
    <Stack.Screen component={WeatherDetail} name="WeatherDetail" />
  </Stack.Navigator>
);

export default HomeRoutes;
