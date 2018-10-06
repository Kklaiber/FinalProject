import { GET_ERRORS } from '../actions/types';

<<<<<<< HEAD
const initialState = {
    isAuthenticated: false, 
    user: {}
  
};

export default function(state = initialState, action){
    switch (action.type) {
       case GET_ERRORS: 
       return action.payload;
       
        default: 
            return state;
    }
}
=======
const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return action.payload;
    default:
      return state;
  }
}
>>>>>>> f12c446591d79609ad5d4881a0ef447e8b75c0c7
