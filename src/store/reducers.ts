import { combineReducers } from 'redux';
import { CounterStateModel } from '../counter/models/counter.models';
import { counterReducer } from '../counter/store/counter.reducers';

export interface AppState {
  counter: CounterStateModel;
}

export const reducers = combineReducers({
  counter: counterReducer,
});
