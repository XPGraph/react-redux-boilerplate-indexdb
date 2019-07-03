import { incStore } from 'redux/actions';

export const setNewIncValue = (newInc) => dispatch => {
  return dispatch(incStore(newInc));
};
