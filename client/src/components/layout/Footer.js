<<<<<<< HEAD
import React, { Component } from 'react';

 

class Footer extends Component {
    render() {
        return (
       <footer className="bg-dark text-white mt-5 p-4 text-center">
            Copyright &copy; {new Date().getFullYear()} Collective
           </footer>
        )
    }
}
     

export default Footer;
=======
import React from 'react';

export default () => {
  return (
    <footer className="bg-dark text-white mt-5 p-4 text-center">
      Copyright &copy; {new Date().getFullYear()} DevConnector
    </footer>
  );
};
>>>>>>> f12c446591d79609ad5d4881a0ef447e8b75c0c7
