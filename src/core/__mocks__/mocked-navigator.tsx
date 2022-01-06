import React, { FunctionComponent } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

interface MockedNavigatorProps {
  component: any;
  params?: Record<string, never>
}

const MockedNavigator: FunctionComponent<MockedNavigatorProps> = ({ component, params = {} }) => (
  <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen
            name="MockedScreen"
            component={component}
            initialParams={params} 
        />
    </Stack.Navigator>
  </NavigationContainer>
)


export default MockedNavigator
