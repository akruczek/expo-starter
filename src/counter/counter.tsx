import * as React from 'react';
import { Text } from '../core/styled/text/text.styled';
import { NavigationProps } from '../core/navigation/navigation.model';
import { AppContainer } from '../core/styled/app-container/app-container';
import { Button } from 'react-native';
import { SCREENS } from '../core/navigation/screens';

export class Counter extends React.Component<NavigationProps, {}> {
  constructor(props: NavigationProps) {
    super(props);
    this.handleNavigate = this.handleNavigate.bind(this);
  }

  handleNavigate() {
    this.props.navigation.navigate(SCREENS.MAIN);
  }

  render() {
    return (
      <AppContainer>
        <Text>Hello counter</Text>
        <Button title="Back to Main Component" onPress={this.handleNavigate} />
      </AppContainer>
    );
  }
}
