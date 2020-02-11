import React from 'react';
import * as R from 'ramda';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { AppContainer } from '@core/styled/app-container/app-container';
import { Container } from '@core/styled/container/container.styled';
import { Button } from '@core/styled/button/button';
import { toggleCounterAccess } from '../../store/main.actions';

interface StateProps {
  hasAccess: boolean;
}

interface DispatchProps {
  toggleCounterAccess: () => void;
}

export const _Settings = ({ toggleCounterAccess, hasAccess }: StateProps & DispatchProps) => (
  <AppContainer>
    <Text>here you can give yourself access to Counter screen</Text>

    <Container margins="30px 0 0">
      <Button
          onPress={() => toggleCounterAccess()}
          title={`Counter access: ${hasAccess ? 'Yes' : 'No'}`}
          color={hasAccess ? 'green' : 'red'}
      />
    </Container>
  </AppContainer>
)

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
