import { createReducer } from 'shared';
import { incStore } from 'redux/actions';

// init with null
export const incReducer = createReducer(null, {
  [incStore]: (state, {incValue}) => incValue,
});
