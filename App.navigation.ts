import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { MainTabNavigator } from './src/main/main.navigation';
import { Counter } from './src/counter/counter';

export default createAppContainer(
  createSwitchNavigator(
    {
      Main: MainTabNavigator,
      Counter,
    }
  ),
);
