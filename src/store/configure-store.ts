import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { reducers } from './reducers';
import { epics } from './epics';

declare const window: any;

function configureStore() {
  const epicMiddleware = createEpicMiddleware();

  const store = createStore(
    reducers,
    compose(
      applyMiddleware(epicMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    ),
  );

  epicMiddleware.run(epics as any);

  return store;
}

export const appStore = configureStore();