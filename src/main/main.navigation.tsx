import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabBarIcon } from '@core/components/tab-bar-icon/tab-bar-icon';
import { ICONS } from '@core/constants/icons';
import { Home, Links, Settings } from './components';

interface Props {
  focused: boolean;
}

export const MainTabNavigator = () => {
  const navigationOptions = (tabBarLabel: string, icon: string) => ({
    tabBarLabel,
    tabBarIcon: ({ focused }: Props) => <TabBarIcon {...{ focused, icon }} />,
  })
  
  const Tab = createBottomTabNavigator()

  return (
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
  );
};
