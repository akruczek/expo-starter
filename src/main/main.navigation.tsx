import * as React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { TabBarIcon } from 'core';
import { Home } from './components/home';
import { Links } from './components/links';
import { Settings } from './components/settings';

interface Props {
  focused: boolean;
}

const HomeStack = createStackNavigator({
  Home,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: (props: Props) => (
    <TabBarIcon
      focused={props.focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${props.focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const LinksStack = createStackNavigator({
  Links,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: (props: Props) => (
    <TabBarIcon
      focused={props.focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: (props: Props) => (
    <TabBarIcon
      focused={props.focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
});
