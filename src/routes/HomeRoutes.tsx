import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Home} from '../screens';
import WeatherDetail from '../screens/WeatherDetail/styles';

const Stack = createStackNavigator();

const HomeRoutes = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen component={Home} name="Home" />
    <Stack.Screen component={WeatherDetail} name="WeatherDetail" />
  </Stack.Navigator>
);

export default HomeRoutes;
