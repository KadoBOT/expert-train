import { call, put, takeEvery } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { increment } from './actions';

export function* incrementAsync() {
  yield call(delay, 1000);
  yield put(increment());
}

export default function* homeSaga() {
  yield takeEvery('HOME_INCREMENT_ASYNC', incrementAsync);
}
