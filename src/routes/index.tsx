import React, { FunctionComponent } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { WeatherDetail } from '../screens';
import HomeTabs from './home-routes';

const Stack = createStackNavigator();

const Router: FunctionComponent = () => (
  <Stack.Navigator
    screenOptions={{
      headerMode: 'screen',
      headerShown: false,
    }}
  >
    <Stack.Screen name="Home" component={HomeTabs} />
    <Stack.Screen name="WeatherDetail" component={WeatherDetail} />
  </Stack.Navigator>
);

export default Router;
