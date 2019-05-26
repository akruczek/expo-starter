import * as R from 'ramda';
import { Action } from 'redux';
import { CounterStateModel } from '../models/counter.models';
import { SetCountAction, COUNTER_ACTIONS, CounterActions } from './counter.actions';

const initialState: CounterStateModel = {
  isPending: false,
  model: {
    count: 0,
  },
};

const setCountReducer = () =>
  R.assoc('isPending', true);

const setCountSuccessReducer = (action: SetCountAction) => R.pipe(
  R.assoc('isPending', false),
  R.assocPath([ 'model', 'count' ], action.payload),
);

const setCountErrorReducer = () =>
  R.assoc('isPending', false);

const reducers = {
  [COUNTER_ACTIONS.SET_COUNT]: setCountReducer,
  [COUNTER_ACTIONS.SET_COUNT_SUCCESS]: setCountSuccessReducer,
  [COUNTER_ACTIONS.SET_COUNT_ERROR]: setCountErrorReducer,
};

const selectReducer = (type: COUNTER_ACTIONS): any =>
  reducers[type] || R.always(R.identity);

export function counterReducer(state = initialState, action: CounterActions) {
  return selectReducer(action.type)(action)(state);
}
