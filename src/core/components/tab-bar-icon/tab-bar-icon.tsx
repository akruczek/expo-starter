import * as React from 'react';
import { colors } from '../../constants/colors';
import { Ionicons } from '@expo/vector-icons';

interface Props {
  icon: string;
  focused: boolean;
}

export const TabBarIcon = ({ icon, focused }: Props) => (
  <Ionicons
      name={icon}
      size={26}
      style={{ marginBottom: -3 }}
      color={focused ? colors.tabIconSelected : colors.tabIconDefault}
  />
);