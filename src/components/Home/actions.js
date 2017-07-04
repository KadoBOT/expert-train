import { createAction } from 'redux-act';

export const increment = createAction('HOME_INCREMENT');
export const decrement = createAction('HOME_DECREMENT');
export const incrementAsync = createAction('HOME_INCREMENT_ASYNC');
export const incrementIfOdd = createAction('HOME_INCREMENT_IF_ODD');
