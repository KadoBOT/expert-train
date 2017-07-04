import { createReducer } from 'redux-act';
import { __, modulo, inc, dec, when } from 'ramda';

import * as actions from './actions';

export default createReducer({
  [actions.increment]: inc,
  [actions.decrement]: dec,
  [actions.incrementIfOdd]: when(modulo(__, 2), inc),
}, 0);
