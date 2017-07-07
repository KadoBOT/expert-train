import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware, { END } from 'redux-saga';

import rootReducer from '../components/reducers';


export default (initialState) => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(
        sagaMiddleware,
        createLogger(),
      ),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), // eslint-disable-line
    ),
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../components/reducers', () => {
      const nextRootReducer = require('../components/reducers').default; // eslint-disable-line
      store.replaceReducer(nextRootReducer);
    });
  }

  const newStore = {
    ...store,
    runSaga: sagaMiddleware.run,
    close: () => store.dispatch(END),
  };

  return newStore;
};
