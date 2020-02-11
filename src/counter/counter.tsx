import * as React from 'react';
import * as R from 'ramda';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { Text } from '@core/styled/text/text.styled';
import { NavigationProps } from '@core/navigation/navigation.model';
import { AppContainer } from '@core/styled/app-container/app-container';
import { SCREENS } from '@core/navigation/screens';
import { Container } from '@core/styled/container/container.styled';
import { Guard } from '@core/components/guard/guard';
import { Button } from '@core/styled/button/button';
import { setCount } from './store/counter.actions';

interface StateProps {
  count: number;
  guard: boolean;
}

interface DispatchProps {
  setCount: (count: number) => void;
}

type ComponentProps = NavigationProps & StateProps & DispatchProps;

export const _Counter = ({ navigation, count, guard, setCount }: ComponentProps) => {
  const [ value, setValue ] = React.useState(count);

  const handleNavigate = () => {
    navigation.navigate(SCREENS.MAIN);
  }

  const handleSetValue = (increment: number) => {
    const newValue = value + increment;
    setValue(newValue);
    setCount(newValue);
  }

  return React.useMemo(() => (
    <Guard navigation={navigation} guard={guard} redirectTo="Home">
      <AppContainer>
        <Container justifyContent="center">
          <Text align="center">
            This is basic counter. Count value is stored in redux-store.
          </Text>

          <Text align="center">
            Increment and decrement trigger redux action which change redux-store
          </Text>
        </Container>

        <Container flexDirection="row" justifyContent="space-around" alignItems="center">
          <Button title=" - " onPress={() => handleSetValue(-1)} />
          <Text>{value}</Text>
          <Button title=" + " onPress={() => handleSetValue(1)} />
        </Container>

        <Button title="Back to Main Component" onPress={handleNavigate} />
      </AppContainer>
    </Guard>
  ), [ value ]);
};

const mapStateToProps = R.applySpec<StateProps>({
  count: R.path([ 'counter', 'model', 'count' ]),
  guard: R.path([ 'main', 'model', 'hasAccess' ]),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  { setCount },
  dispatch,
);

export const Counter = connect<StateProps, DispatchProps, {}>(
  mapStateToProps, mapDispatchToProps,
)(_Counter);
