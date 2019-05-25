import * as React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { Home } from './components/home';
import { Links } from './components/links';
import { Settings } from './components/settings';
import { TabBarIcon } from '../core/components/tab-bar-icon/tab-bar-icon';
import { ICONS } from '../core/constans/icons';

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
