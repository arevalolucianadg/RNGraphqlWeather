import React, { FunctionComponent } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { WeatherDetail } from '@screens';
import MainTabs from './tab-routes';
import { RootStackParamList } from './types';

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
