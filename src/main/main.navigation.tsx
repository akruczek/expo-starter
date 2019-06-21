import * as React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { Home, Links, Settings } from './components';
import { TabBarIcon } from '../core/components/tab-bar-icon/tab-bar-icon';
import { ICONS } from '../core/constants/icons';

interface Props {
  focused: boolean;
}

const HomeStack = createStackNavigator({
  Home,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'home',
  tabBarIcon: (props: Props) => (
    <TabBarIcon focused={props.focused} icon={ICONS.INFORMATION_CIRCLE} />
  ),
};

const LinksStack = createStackNavigator({
  Links,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'links',
  tabBarIcon: (props: Props) => (
    <TabBarIcon focused={props.focused} icon={ICONS.LINK} />
  ),
};

const SettingsStack = createStackNavigator({
  Settings,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'settings',
  tabBarIcon: (props: Props) => (
    <TabBarIcon focused={props.focused} icon={ICONS.OPTIONS} />
  ),
};

export const MainTabNavigator = createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
});
