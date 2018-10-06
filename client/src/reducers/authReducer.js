<<<<<<< HEAD
import { SET_CURRENT_USER } from '../actions/types';
import isEmpty from '../validation/is-empty';

const initialState = {
    isAuthenticated: false, 
    user: {}
  
};

export default function(state = initialState, action){
    switch (action.type) {
       case SET_CURRENT_USER:
       return {
           ...state,
           isAuthenticated: !isEmpty(action.payload),
           user: action.payload
       }
        default: 
            return state;
    }
}

=======
import isEmpty from '../validation/is-empty';

import { SET_CURRENT_USER } from '../actions/types';

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    default:
      return state;
  }
}
>>>>>>> f12c446591d79609ad5d4881a0ef447e8b75c0c7
