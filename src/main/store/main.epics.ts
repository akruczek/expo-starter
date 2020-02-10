import * as R from 'ramda';
import { ActionsObservable, ofType } from 'redux-observable';
import { map, tap } from 'rxjs/operators';
import { MAIN_ACTIONS, MainActions, toggleCounterAccessSuccess } from './main.actions';
import { AppState } from '../../store/reducers';

export const setCounterAccessEpic = (
  action: ActionsObservable<MainActions>,
  state: { value: AppState },
) => action.pipe(
  ofType(MAIN_ACTIONS.TOGGLE_COUNTER_ACCESS),
  map(() => !R.path([ 'value', 'main', 'model', 'hasAccess' ], state)),
  map(toggleCounterAccessSuccess),
);
