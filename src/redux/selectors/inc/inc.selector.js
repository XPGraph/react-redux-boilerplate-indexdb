import { createSelector } from 'reselect';

const _incStore = (state) => state.incValue;

export const getInc = createSelector(
  [_incStore],
  incValue => incValue
);
