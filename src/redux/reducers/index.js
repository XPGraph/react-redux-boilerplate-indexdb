import { combineReducers } from 'redux';
import { authReducer } from './auth/auth.reducer';
import { incReducer } from 'redux/reducers/inc/inc.reducer';

export default combineReducers({
  token: authReducer,
  incValue: incReducer,
});
