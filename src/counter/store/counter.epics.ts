import * as R from 'ramda';
import { ActionsObservable, ofType } from 'redux-observable';
import { map, pluck } from 'rxjs/operators';
import { COUNTER_ACTIONS, CounterActions, setCountSuccess } from './counter.actions';

export const setCountEpic = (action: ActionsObservable<CounterActions>) => action.pipe(
  ofType(COUNTER_ACTIONS.SET_COUNT),
  pluck('payload'),
  map(setCountSuccess)
);
