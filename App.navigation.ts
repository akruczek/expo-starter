import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import MainTabNavigator from './src/main/main.navigation';

export default createAppContainer(createSwitchNavigator({
  Main: MainTabNavigator,
}));
