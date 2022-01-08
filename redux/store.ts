import { createWrapper } from 'next-redux-wrapper';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const bindMiddleware = (middleware: any) => {
  return applyMiddleware(...middleware)
}


const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store: any = createStore(rootReducer, bindMiddleware([sagaMiddleware]))
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
}

export const wrapper = createWrapper(configureStore, { debug: false });