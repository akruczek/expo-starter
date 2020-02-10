import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Links, Settings } from './components';
import { TabBarIcon } from '../core/components/tab-bar-icon/tab-bar-icon';
import { ICONS } from '../core/constants/icons';

interface Props {
  focused: boolean;
}

const navigationOptions = (tabBarLabel: string, icon: string) => ({
  tabBarLabel,
  tabBarIcon: ({ focused }: Props) => <TabBarIcon {...{ focused, icon }} />,
})

const Tab = createBottomTabNavigator()

export const MainTabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
        name="Home"
        options={navigationOptions('home', ICONS.INFORMATION_CIRCLE)}
        component={Home}
    />
    <Tab.Screen
        name="Links"
        options={navigationOptions('links', ICONS.LINK)}
        component={Links}
    />
    <Tab.Screen
        name="Settings"
        options={navigationOptions('settings', ICONS.OPTIONS)}
        component={Settings}
    />
  </Tab.Navigator>
)
