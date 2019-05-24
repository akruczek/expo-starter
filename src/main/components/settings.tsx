import React from 'react';
import { View, Text } from 'react-native';

export class Settings extends React.Component {
  static navigationOptions = {
    title: 'app.json',
  };

  render() {
    return (
      <View>
        <Text>Test Settings view</Text>
      </View>
    );
  }
}
