import React, { Component } from 'react';


class ProfilePicture extends Component {
    render() {
      const { profile } = this.props;
      
      return (
    
                  <img
                    className="rounded-circle"
                    src={profile.avatar}
                    alt={profile.name}
                  />
    
      );
    }
  }
  
export default ProfilePicture;
  