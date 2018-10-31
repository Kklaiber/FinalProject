import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import { clearCurrentProfile, getProfileByHandle, getCurrentProfile } from '../../actions/profileActions';
import { Navbar, Nav } from 'react-bootstrap';
import ProfileAvatar from '../profile/ProfileAvatar';


class NavbarMain extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
    
  }
  
  
  render() {
    const { isAuthenticated, 
    //user 
    } = this.props.auth;
    const handle = this.props.profile;

    const { profile, loading } = this.props.profile;

    let profileLink = "";
    if(Object.keys(profile || {}).length > 0) {
      profileLink = (
        <li className="rounded-circle avatar-nav"
        style={{ width: '25px', marginTop: '7px' }}
        >
          <Link className="nav-avatar" to={`/profile/${profile.handle}`}>
          <ProfileAvatar />
          </Link>
          
        </li>)
     }

    const authLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/dashboard">
            Dashboard
          </Link>
        </li>
       
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/communities" id="navbarDropdown" role="button" data-toggle="dropdown">
            Communities
          </Link>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link className="dropdown-item" to="/communities">Communities</Link>
            <div class="dropdown-divider"></div>
            <Link className="dropdown-item" to="/feed">Collective</Link>
            <Link className="dropdown-item" to="/missions">Missions</Link>
            <Link className="dropdown-item" to="/outdoors">Outdoors</Link>
          </div>
        </li>


        <li className="nav-item">
         <Link className="nav-link" to="/events">
           Events
          </Link>
        </li>

        <li className="nav-item">
        <Link className="nav-link" to={`/edit-profile`}>
          Profile
          </Link>
        </li>
      
        <li className="nav-item">
        <Redirect to="/"/>
            <a
            href="/"
            onClick={this.onLogoutClick.bind(this)}
            className="nav-link"
          >
        
          <i className="fas fa-sign-out-alt"></i>
            {'  '}
            Logout
          </a>
        
        </li>
      </ul>
    );
    
    const friendLink = (
     
      <ul className="navbar-nav mr-auto">
        <li className="nav-item" >
          <Link className="nav-link" to="/profiles">
          
            {' '}
            Friends
          </Link>
          
        </li>
      </ul>

    );
 

    const guestLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/register">
            Sign Up
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
      </ul>
    );

    return (
      <Navbar className="navbar navbar-color sticky-top navbar-expand-sm navbar-dark">
        <Navbar className="container">
          <Link className="navbar-brand" to="/">
            Collective
          </Link>
          <Nav
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </Nav>
          <Navbar.Collapse className="collapse navbar-collapse" id="mobile-nav">
            {isAuthenticated ? friendLink : null}
            {isAuthenticated ? authLinks : guestLinks}
          </Navbar.Collapse>
        </Navbar>
      </Navbar>
    );
  }
}

NavbarMain.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(mapStateToProps, { getProfileByHandle, getCurrentProfile, logoutUser, clearCurrentProfile })(
  NavbarMain
);
