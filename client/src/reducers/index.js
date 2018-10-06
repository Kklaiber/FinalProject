import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
<<<<<<< HEAD

export default combineReducers({
    auth: authReducer, //use this.props.auth
    errors: errorReducer
});
=======
import profileReducer from './profileReducer';

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  profile: profileReducer
});
>>>>>>> f12c446591d79609ad5d4881a0ef447e8b75c0c7
