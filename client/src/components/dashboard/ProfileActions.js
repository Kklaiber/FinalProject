import React from "react";
import { Link } from "react-router-dom";
import Posts from "../posts/Posts"

const ProfileActions = () => {
  return (
    <div><Posts/>
    <div className="btn-group mb-4" role="group">
      <Link to="/edit-profile" className="btn btn-light">
        <i className="fas fa-user-circle text-warning mr-1" />
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
      <Link to="/add-group" className="btn btn-light">
        <i className="fas fa-users text-warning mr-1" />
        Add Group
      </Link>
    </div>
    </div>
  );
};

export default ProfileActions;
