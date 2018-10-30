import React, { Component } from 'react';


class ProfilePicture extends Component {
    render() {
      const { profile } = this.props;
      
      return (
    
                  <img
                    className="rounded-circle"
                    src={profile}
                    alt={profile}
                    style={{ width: '25px', marginRight: '5px' }}
                  />
    
      );
    }
  }
  
export default ProfilePicture;
  