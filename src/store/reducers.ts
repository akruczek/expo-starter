import { combineReducers } from 'redux';
import { CounterStateModel } from '../counter/models/counter.models';
import { counterReducer } from '../counter/store/counter.reducers';
import { mainReducer } from '../main/store/main.reducers';
import { MainStateModel } from '../main/models/main.models';

export interface AppState {
  counter: CounterStateModel;
  main: MainStateModel;
}

export const reducers = combineReducers({
  counter: counterReducer,
  main: mainReducer,
});
