import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProfileHeader from './ProfileHeader';
import ProfileAbout from './ProfileAbout';
import ProfileCreds from './ProfileCreds';
import Spinner from '../common/Spinner';
import { getProfileByHandle, deleteAccount } from '../../actions/profileActions';

class Profile extends Component {
  componentDidMount() {
    if (this.props.match.params.handle) {
      this.props.getProfileByHandle(this.props.match.params.handle);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.profile.profile === null && this.props.profile.loading) {
      this.props.history.push('/not-found');
    }
  }

  onDeleteClick(e) {
    this.props.deleteAccount();
  }

  render() {

    editProfile = (
      
      <div className="row">
      <div className="col-md-1"></div>
      <div className="col-md-10">
        <Link to="/edit-profile" className="btn btn-light">
            <i className="fas fa-user-circle  text-warning mr-1" /> 
            Edit Profile
        </Link>
     
        <Link to="/add-experience" className="btn btn-light">
        <i className="fas fa-briefcase text-warning mr-1" />
            Add Experience
        </Link>
       
        <Link to="/add-education" className="btn btn-light">
            <i className="fas fa-graduation-cap text-warning mr-1" /> 
            Add Education
        </Link> 
     
        <Link to="/add-interests" className="btn btn-light">
        <i className="far fa-star text-warning mr-1"></i>
            Add Interests
        </Link>
       
        <Link to="/add-group" className="btn btn-light">
          <i className="fas fa-users text-warning text-warning mr-1" />
          Add Group
        </Link>
        </div>
        <div className="col-md-1"></div>
      </div>
    
   
    );

    const { profile, loading } = this.props.profile;
    let profileContent;

    if (profile === null || loading) {
      profileContent = <Spinner />;
    } else {
      profileContent = (
        <div>
          <div className="row">
            <div className="col-md-6">
              <Link to="/profiles" className="btn btn-light mb-3 float-left">
                Back To Profiles
              </Link>
              <button
              onClick={this.onDeleteClick.bind(this)}
              className="btn btn-danger mb-3 float-right"
              >
              Delete My Account 
              </button>
            </div>
            <div className="col-md-6" />
          </div>
          <ProfileHeader profile={profile} />
           {editProfile}<br/>
          <ProfileAbout profile={profile} />
        
          <ProfileCreds
            education={profile.education}
            experience={profile.experience}
          />
        </div>
      );
      
    }

    let editProfile;

   

    return (
      <div className="profile">
        <div className="container">
          <div className="row">
            <div className="col-md-12">  {profileContent}</div>
         
          </div>
          
        </div>
      </div>
    );
  }
}

Profile.propTypes = {
  getProfileByHandle: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(mapStateToProps, { getProfileByHandle, deleteAccount })(Profile);
