import React, { Component } from "react";
import { connect } from 'react-redux';

class ProfileAvatar extends Component {


  render() {

    const { profile } = this.props.profile;
 
    return (
    
      <img className="rounded-circle" src={profile.user.avatar} alt="" />    
    
    );
  }
}


const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(mapStateToProps)(ProfileAvatar);
