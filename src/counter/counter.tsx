import * as React from 'react';
import * as R from 'ramda';
import { Text } from '../core/styled/text/text.styled';
import { NavigationProps } from '../core/navigation/navigation.model';
import { AppContainer } from '../core/styled/app-container/app-container';
import { Button } from 'react-native';
import { SCREENS } from '../core/navigation/screens';
import { Container } from '../core/styled/container/container.styled';
import { connect } from 'react-redux';
import { setCount } from './store/counter.actions';
import { Dispatch, bindActionCreators } from 'redux';
import { Guard } from '../core/components/guard/guard';
import { GuardProps } from '../core/components/guard/guard.model';

interface StateProps {
  count: number;
}

interface DispatchProps {
  setCount: (count: number) => void;
}

type ComponentProps = NavigationProps & StateProps & DispatchProps;

class _Counter extends React.Component<ComponentProps, {}> {
  constructor(props: ComponentProps) {
    super(props);
    this.handleNavigate = this.handleNavigate.bind(this);
  }

  handleNavigate() {
    this.props.navigation.navigate(SCREENS.MAIN);
  }

  handleChangeCount(change: number) {
    this.props.setCount(this.props.count + change);
  }

  render() {
    return (
      <AppContainer>
        <Container justifyContent="center">
          <Text align="center">This is basic counter. Count value is stored in redux-store.</Text>
          <Text align="center">Increment and decrement trigger redux action which change redux-store</Text>
        </Container>

        <Container flexDirection="row" justifyContent="space-around" alignItems="center">
          <Button title=" - " onPress={() => this.handleChangeCount(-1)} />
          <Text>{this.props.count}</Text>
          <Button title=" + " onPress={() => this.handleChangeCount(1)} />
        </Container>

        <Button title="Back to Main Component" onPress={this.handleNavigate} />
      </AppContainer>
    );
  }
}

const mapStateToProps = R.applySpec<StateProps>({
  count: R.path([ 'counter', 'model', 'count' ]),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  { setCount },
  dispatch,
);

export const Counter = connect<StateProps, DispatchProps, {}>(
  mapStateToProps, mapDispatchToProps,
)(_Counter);
