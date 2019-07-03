import { incStore } from 'redux/actions';

export const setNewIncValue = (newInc) => dispatch => {
  console.log('thunk = ' + newInc);
  return dispatch(incStore(newInc));
};
