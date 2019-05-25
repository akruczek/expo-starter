import * as React from 'react';
import { colors } from '../../constans/colors';
import { Ionicons } from '@expo/vector-icons';

interface Props {
  icon: string;
  focused: boolean;
}

export class TabBarIcon extends React.Component<Props, {}> {
  render() {
    return (
      <Ionicons
          name={this.props.icon}
          size={26}
          style={{ marginBottom: -3 }}
          color={this.props.focused ? colors.tabIconSelected : colors.tabIconDefault}
      />
    );
  }
}
