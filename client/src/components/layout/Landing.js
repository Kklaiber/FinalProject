import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import FadeIn from 'react-fade-in';

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
           
              <div className="col-md-12 text-center">
              <FadeIn>
                <h1 className="display-3 mb-4 brand-text">Collective</h1>
                <p className="lead">
                  {' '}
                  <span className="gold-text">Welcome</span> to your communities.
                </p>
                <hr />
                <div>
                <Link to="/register" className="btn btn-lg btn-warning mr-2">
                  Sign Up
                </Link>
                <Link to="/login" className="btn btn-lg btn-light">
                  Login
                </Link>
                </div>
                </FadeIn>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);
