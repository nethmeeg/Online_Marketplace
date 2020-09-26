import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import profileReducer from './profileReducer';
import shopReducer from './shopReducer';
import itemReducer from './itemReducer';
import postReducer from './postReducer';

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  profile: profileReducer,
  shop: shopReducer,
  item: itemReducer,
  post: postReducer
});
