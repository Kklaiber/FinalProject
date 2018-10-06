import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

<<<<<<< HEAD
 

class Landing extends Component {


  componentDidMount(){
    if(this.props.auth.isAuthenticated) {
        this.props.history.push('/dashboard');
    }
  }


  
    render() {
        return (
           
    <div className="landing">
=======
class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  render() {
    return (
      <div className="landing">
>>>>>>> f12c446591d79609ad5d4881a0ef447e8b75c0c7
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
<<<<<<< HEAD
                <h1 className="display-3 mb-4">Collective
                </h1>
                <p className="lead"> </p>             
                <Link to="/register" className="btn btn-lg btn-warning mr-2">Sign Up</Link>
                <Link to="/login" className="btn btn-lg btn-light">Login</Link>
=======
                <h1 className="display-3 mb-4">Developer Connector</h1>
                <p className="lead">
                  {' '}
                  Create a developer profile/portfolio, share posts and get help
                  from other developers
                </p>
                <hr />
                <Link to="/register" className="btn btn-lg btn-info mr-2">
                  Sign Up
                </Link>
                <Link to="/login" className="btn btn-lg btn-light">
                  Login
                </Link>
>>>>>>> f12c446591d79609ad5d4881a0ef447e8b75c0c7
              </div>
            </div>
          </div>
        </div>
      </div>
<<<<<<< HEAD
           
        )
    }
}
Landing.propTypes = {
  auth: PropTypes.object.isRequired
}
     

const mapStateToProps = (state) => ({
  auth: state.auth
})
=======
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

>>>>>>> f12c446591d79609ad5d4881a0ef447e8b75c0c7
export default connect(mapStateToProps)(Landing);
