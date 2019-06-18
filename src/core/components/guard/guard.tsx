import * as React from 'react';
import * as R from 'ramda';
import { GuardProps } from './guard.model';
import { isPresent } from '../../helpers/ramda';
import { NavigationScreenProp } from 'react-navigation';

export class Guard extends React.Component<GuardProps, {}> {
  shouldComponentUpdate(nextProps: GuardProps) {
    return !(!this.props.guard && !nextProps.guard);
  }

  guard() {
    const { guard, children, redirectTo } = this.props;

    const navigation: NavigationScreenProp<any, any> = R.propOr({}, 'navigation', this.props);

    const canNavigate = R.allPass([
      isPresent,
      R.complement(R.pathEq([ 'state', 'routeName' ], redirectTo)),
      () => isPresent(redirectTo),
    ])(navigation);

    if (!guard && canNavigate) {
      navigation.navigate(redirectTo as string);
    }

    return guard ? children : null;
  }

  render() {
    return this.guard();
  }
}
