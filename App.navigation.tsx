import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { MainTabNavigator } from './src/main/main.navigation';
import { Counter } from './src/counter/counter';

const Stack = createStackNavigator();

export const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Main" component={MainTabNavigator} />
      <Stack.Screen name="Counter" component={Counter} />
    </Stack.Navigator>
  </NavigationContainer>
)
