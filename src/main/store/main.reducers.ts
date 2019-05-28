import * as R from 'ramda';
import { Action } from 'redux';
import { MainStateModel } from '../models/main.models';
import { ToggleCounterAccessAction, MAIN_ACTIONS, MainActions } from './main.actions';
import { SetCountAction } from '../../counter/store/counter.actions';

const initialState: MainStateModel = {
  isPending: false,
  model: {
    hasAccess: false,
  },
};

const toggleCounterAccessReducer = () =>
  R.assoc('isPending', true);

const toggleCounterAccessSuccessReducer = (action: ToggleCounterAccessAction) => R.pipe(
  R.assoc('isPending', false),
  R.assocPath([ 'model', 'hasAccess' ], action.payload),
);

const toggleCounterAccessErrorReducer = () =>
  R.assoc('isPending', false);

const reducers = {
  [MAIN_ACTIONS.TOGGLE_COUNTER_ACCESS]: toggleCounterAccessReducer,
  [MAIN_ACTIONS.TOGGLE_COUNTER_ACCESS_SUCCESS]: toggleCounterAccessSuccessReducer,
  [MAIN_ACTIONS.TOGGLE_COUNTER_ACCESS_ERROR]: toggleCounterAccessErrorReducer,
};

const selectReducer = (type: MAIN_ACTIONS): any =>
  reducers[type] || R.always(R.identity);

export function mainReducer(state = initialState, action: MainActions) {
  return selectReducer(action.type)(action)(state);
}
