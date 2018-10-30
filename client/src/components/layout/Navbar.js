import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import {
  clearCurrentProfile,
  getProfileByHandle,
  getCurrentProfile
} from "../../actions/profileActions";
import ProfileItem from "../profiles/ProfileItem";
import ProfilePicture from "../../components/profile/ProfileHeader";

class Navbar extends Component {
  //  componentDidMount(){
  //    this.props.getProfileByHandle();
  //  }
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }

  render() {
    const { user } = this.props.auth;

    const {
      isAuthenticated
      //user
    } = this.props.auth;

    const { profile, loading } = this.props.profile;

    let profileLink = "";
    if(Object.keys(profile || {}).length > 0) {
      profileLink = (
        <li className="nav-item">
          <Link className="nav-link" to={`/profile/${profile.handle}`}>
         Profile
          </Link>
          {/* <ProfilePicture />  */}
        </li>)
     }

    const authLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/dashboard">
            Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/communities">
            Communities
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/events">
            Events
          </Link>
        </li>
        {profileLink}
        <li className="nav-item">
          <Redirect to="/" />
          <a
            href="/"
            onClick={this.onLogoutClick.bind(this)}
            className="nav-link"
          >
            <i className="fas fa-sign-out-alt" />
            {"  "}
            Logout
          </a>
        </li>
      </ul>
    );
    const friendLink = (
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/profiles">
            {" "}
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
      <nav className="navbar navbar-color sticky-top navbar-expand-sm navbar-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Collective
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="mobile-nav">
            {isAuthenticated ? friendLink : null}
            {isAuthenticated ? authLinks : guestLinks}
          </div>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  getProfileByHandle: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getProfileByHandle, getCurrentProfile, logoutUser, clearCurrentProfile }
)(Navbar);
