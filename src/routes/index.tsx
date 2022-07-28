import React, { FunctionComponent } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { WeatherDetail } from '../screens';
import MainTabs from './home-routes';
import { RootStackParamList } from './root-params';

const Stack = createStackNavigator<RootStackParamList>();

const Router: FunctionComponent = () => (
  <Stack.Navigator
    screenOptions={{
      headerMode: 'screen',
      headerShown: false,
    }}
  >
    <Stack.Screen name="Main" component={MainTabs} />
    <Stack.Screen name="WeatherDetail" component={WeatherDetail} />
  </Stack.Navigator>
);

export default Router;
