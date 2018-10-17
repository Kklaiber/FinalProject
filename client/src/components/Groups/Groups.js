import React, { Component } from 'react';
import { Link } from 'react-router-dom';



 class Groups extends Component {
  render() {
    return (
      <div className="container">
          <Link className="nav-link" to="/feed">
          Collective Community
          </Link>

          <Link className="nav-link" to="/missions">
          Missions Community
          </Link>

          <Link className="nav-link" to="/outdoors">
          Outdoors Community
          </Link>

          <Link className="nav-link" to="/feed">
          Special Needs Families
          </Link>

          <Link className="nav-link" to="/feed">
          
          </Link>

      </div>
    )
  }
}

export default Groups;