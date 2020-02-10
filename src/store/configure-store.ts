import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { reducers } from './reducers';
import { epics } from './epics';

declare const window: any;

function configureStore() {
  const epicMiddleware = createEpicMiddleware();
  const middleware = applyMiddleware(epicMiddleware);
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    reducers,
    composeEnhancers(middleware),
  );

  epicMiddleware.run(epics as any);

  return store;
}

export const appStore = configureStore();