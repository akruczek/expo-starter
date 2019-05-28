import React from 'react';
import * as R from 'ramda';
import { Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { AppContainer } from '../../../core/styled/app-container/app-container';
import { toggleCounterAccess } from '../../store/main.actions';
import { Container } from '../../../core/styled/container/container.styled';

interface StateProps {
  hasAccess: boolean;
}

interface DispatchProps {
  toggleCounterAccess: () => void;
}

export class _Settings extends React.Component<StateProps & DispatchProps, {}> {
  static navigationOptions = {
    title: 'Settings',
  };

  render() {
    const { hasAccess } = this.props;

    return (
      <AppContainer>
        <Text>here you can give yourself access to Counter screen</Text>

        <Container margins="30px 0 0">
          <Button
              onPress={this.props.toggleCounterAccess}
              title={`Counter access: ${hasAccess ? 'Yes' : 'No'}`}
              color={hasAccess ? 'green' : 'red'}
          />
        </Container>
      </AppContainer>
    );
  }
}

const mapStateToProps = R.applySpec<StateProps>({
  hasAccess: R.path([ 'main', 'model', 'hasAccess' ]),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  { toggleCounterAccess },
  dispatch,
);

export const Settings = connect<StateProps, any, {}>(
  mapStateToProps, mapDispatchToProps,
)(_Settings);
