import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { MainTabNavigator } from './src/main/main.navigation';
import { Counter } from './src/counter/counter';

export const AppNavigator = createAppContainer(
  createSwitchNavigator(
    {
      Main: MainTabNavigator,
      Counter,
    }
  ),
);
