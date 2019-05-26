import { createStore, compose, applyMiddleware } from 'redux';
import { reducers } from './reducers';

declare const window: any;

function configureStore() {
  return createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
}

export const appStore = configureStore();