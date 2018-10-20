import React from "react";
import { Link } from "react-router-dom";
import Posts from "../posts-dashboard/Posts"

const ProfileActions = () => {
  return (
    <div>
      <Posts/>
<br/>
  
<div className="row">
      <div className="col-md-2"></div>
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
    <br/>
    </div>
  );
};

export default ProfileActions;
