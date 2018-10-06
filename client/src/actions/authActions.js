import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

<<<<<<< HEAD

import { GET_ERRORS, SET_CURRENT_USER } from './types';


//REGISTER USER
export const registerUser = (userData, history) => dispatch => {
    axios
    .post('/api/users/register', userData)
    .then(res => history.push('/login'))
    .catch(err => 
        dispatch({
            type: GET_ERRORS, 
            payload: err.response.data
        })  
    );
};


//LOGIN - GET USER TOKEN 

export const loginUser = (userData) => dispatch => {
    axios
    .post('/api/users/login', userData)
    .then(res => {
        //save to local storage
        const { token } = res.data;
        //set token to local storage
        localStorage.setItem('jwtToken', token);
        //set token to header
        setAuthToken(token);
        // decode token to get user data
        const decoded = jwt_decode(token);  
        //set current user
        dispatch(setCurrentUser(decoded));
    })
    .catch(err =>  
            dispatch({
            type: GET_ERRORS, 
            payload: err.response.data
        })
    );
};

//set logged in user 
export const setCurrentUser = (decoded) => {
    return {
        type: SET_CURRENT_USER, 
        payload: decoded
    };
  
};

// Log user out 
export const logoutUser = () => dispatch => {
    // Remove token from local 
    localStorage.removeItem('jwtToken');
    //remove auth header from future requests
    setAuthToken(false);
    //set current user to {} which will set isAuthenticated to false
    dispatch(setCurrentUser({}))
    .then()
}


=======
import { GET_ERRORS, SET_CURRENT_USER } from './types';

// Register User
export const registerUser = (userData, history) => dispatch => {
  axios
    .post('/api/users/register', userData)
    .then(res => history.push('/login'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Login - Get User Token
export const loginUser = userData => dispatch => {
  axios
    .post('/api/users/login', userData)
    .then(res => {
      // Save to localStorage
      const { token } = res.data;
      // Set token to ls
      localStorage.setItem('jwtToken', token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

// Log user out
export const logoutUser = () => dispatch => {
  // Remove token from localStorage
  localStorage.removeItem('jwtToken');
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};
>>>>>>> f12c446591d79609ad5d4881a0ef447e8b75c0c7
