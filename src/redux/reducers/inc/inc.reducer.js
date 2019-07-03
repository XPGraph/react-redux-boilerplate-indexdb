import { createReducer } from 'shared';
import { incStore } from 'redux/actions';

export const incReducer = createReducer({}, {
  [incStore]: (state, {incValue}) => incValue,
});
