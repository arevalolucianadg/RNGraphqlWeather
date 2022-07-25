import React, { FunctionComponent } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { WeatherDetail } from '../screens';
import HomeTabs from './home-routes';

const Stack = createStackNavigator();

const Router: FunctionComponent = () => (
  <Stack.Navigator
    screenOptions={{
      headerMode: 'screen',
    }}
  >
    <Stack.Screen name="Home" component={HomeTabs} />
    <Stack.Screen component={WeatherDetail} name="WeatherDetail" />
  </Stack.Navigator>
);

export default Router;
