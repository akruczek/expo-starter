import * as React from 'react';
import * as R from 'ramda';
import { GuardProps, GuardModel } from './guard.model';
import { connect } from 'react-redux';
import { SCREENS } from '../../navigation/screens';

class _Guard<P, S> extends React.Component<GuardProps & P, S> {
  // private isBlocked = R.propEq('blocker', true);
  // private isRedirect = R.allPass([
  //   this.isBlocked,
  //   R.propSatisfies(isPresent, 'redirectTo')
  // ]);
  // private redirect = R.allPass([ this.isBlocked, this.isRedirect ])
  // private isLoading = R.allPass([
  //   R.propSatisfies(isNotNil, 'blocker'),
  //   R.propEq('isLoading', true),
  // ]);

  // redirectTo() {
  //   this.props.navigation.navigate(R.propOr('', 'redirectTo', this.props))
  // }

  // render() {
  //   return R.cond([
  //     [ this.isLoading, R.always(<Text>Loading...</Text>) ],
  //     [ this.isBlocked, R.always(null) ],
  //     [ this.redirect, () => this.redirectTo() ],
  //     [ R.T, R.always(this.props.children) ],
  //   ])(this.props);
  // }

  private guards: {[key: string]: GuardModel} = {
    Counter: {
      hasAccess: this.props.counterAccess,
      redirectTo: SCREENS.MAIN,
    },
  };

  componentDidMount() {
    const { key } = this.props.navigation.state;
    const guard = this.guards[key];
    console.log(this);
    if (R.propEq('hasAccess', false, guard)) {
      this.props.navigation.navigate(guard.redirectTo);
    }
  }
}

const mapStateToProps = R.applySpec<GuardProps>({
  counterAccess: R.path([ 'main', 'model', 'hasAccess' ]),
});

export const Guard = connect<GuardProps, any, {}>(
  mapStateToProps, null,
)(_Guard);
