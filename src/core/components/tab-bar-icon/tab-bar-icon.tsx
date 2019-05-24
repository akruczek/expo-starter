import * as React from 'react';
// import { colors } from '../../constants/colors';
import { Text } from 'react-native';
// const Icon = require('expo');

interface Props {
  name: string;
  focused: boolean;
}

export class TabBarIcon extends React.Component<Props, {}> {
  render() {
    return (
      <Text>X</Text>
      // <Icon.Ionicons
      //     name={this.props.name}
      //     size={26}
      //     style={{ marginBottom: -3 }}
      //     color={this.props.focused ? colors.tabIconSelected : colors.tabIconDefault}
      // />
    );
  }
}
