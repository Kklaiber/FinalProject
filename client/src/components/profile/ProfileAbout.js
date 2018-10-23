import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEmpty from '../../validation/is-empty';
import DisplayGroups from "../profile/DisplayGroups";

class ProfileAbout extends Component {
  render() {
    const { profile } = this.props;

    // Get first name
    const firstName = profile.user.name.trim().split(' ')[0];

  

    return (
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-light mb-3">
            <h3 className="text-center text-warning">{firstName}'s Bio</h3>
            <p className="lead">
              {isEmpty(profile.bio) ? (
                <span>{firstName} has not added a bio yet.</span>
              ) : (
                <span>{profile.bio}</span>
              )}
            </p>
            <hr />
            <h3 className="text-center text-warning">Interests</h3> 
         
            <ul className="list-group">
              {profile.interests.slice(0, 4).map((interest, index) => (
                
                <li key={index} className="list-group-item">
                
                  {interest}
                </li>
              ))}
            </ul>
        
            <hr />
            <h3 className="text-center text-warning">Communities</h3>
            <div className="row">
              <div className="d-flex flex-wrap justify-content-center align-items-center">
           
                <DisplayGroups group={profile.group} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileAbout;
