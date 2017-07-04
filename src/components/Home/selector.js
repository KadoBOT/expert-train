import { createSelector } from 'reselect';
import { __, compose, concat, modulo, toString, when } from 'ramda';

const counter = state => state.home;

export default createSelector(
  counter,
  when(modulo(__, 2), compose(concat(__, ' is Odd!'), toString)),
);
