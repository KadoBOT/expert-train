import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import rootReducer from '../components/reducers';

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(sagaMiddleware),
  );

  const newStore = {
    ...store,
    runSaga: sagaMiddleware.run,
    close: () => store.dispatch(END),
  };

  return newStore;
}
