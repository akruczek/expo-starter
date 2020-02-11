import * as React from 'react';
import * as R from 'ramda';
import { GuardProps } from './guard.models';
import { isPresent } from '../../helpers';

const _Guard = ({ guard, children, redirectTo, navigation }: GuardProps) => {
  const canNavigate = R.allPass([
    isPresent,
    R.complement(R.pathEq([ 'state', 'routeName' ], redirectTo)),
    () => isPresent(redirectTo),
  ])(navigation);

  if (!guard && canNavigate && navigation) {
    navigation.navigate(redirectTo as string);
  }

  return guard ? children : null;
}

export const Guard = React.memo(
  _Guard,
  (prevProps: GuardProps, nextProps: GuardProps) => !prevProps.guard && !nextProps.guard,
);
