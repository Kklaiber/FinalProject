import axios from 'axios';

const setAuthToken = token => {
<<<<<<< HEAD
    if(token) {
        //apply to every request
        axios.defaults.headers.common['Authorization'] = token;
    } else {
        //delete auth header
        delete axios.defaults.headers.common['Authorization'];
    }
}

export default setAuthToken;
=======
  if (token) {
    // Apply to every request
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    // Delete auth header
    delete axios.defaults.headers.common['Authorization'];
  }
};

export default setAuthToken;
>>>>>>> f12c446591d79609ad5d4881a0ef447e8b75c0c7
