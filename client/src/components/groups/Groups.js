import React, { Component } from "react";
import { Link } from "react-router-dom";
import FadeIn from "react-fade-in";
import HelpModal from "../dashboard/HelpModal";

// this file is called Groups.js, but is it's UI pieces are referred to as "Communities"

class Groups extends Component {
  render() {
    return (
      <div className="groups">
        <FadeIn>
          <div className="row">
            <div className="card community-card col-md-5">
              <img
                className="card-img-top"
                src="https://images.pexels.com/photos/134062/pexels-photo-134062.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt="Card cap"
              />
              <div className="card-body">
                <h5 className="card-title">Collective Community</h5>
                <p className="card-text">
                  {" "}
                  "The consciousness of sharing values & attitudes that
                  strengthen local fellowship."{" "}
                </p>
                <Link to="/feed">
                  <a href="" className="btn btn-secondary">
                    Collective
                  </a>
                </Link>
              </div>
            </div>

            <div className="col-md-2" />

            <div className="card community-card col-md-5">
              <img
                className="card-img-top"
                src="https://images.pexels.com/photos/1083628/pexels-photo-1083628.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt="Card cap"
              />
              <div className="card-body">
                <h5 className="card-title">Missions Community</h5>
                <p className="card-text">
                  {" "}
                  "Join followers of Christ that look to answer the call of God's
                  benevolent heart for the world"{" "}
                </p>

                <Link to="/missions">
                  <a href="" className="btn btn-secondary">
                    GO
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="row">
            <div className="card community-card col-md-5">
              <img
                className="card-img-top"
                src="https://images.pexels.com/photos/615471/pexels-photo-615471.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt="Card cap"
              />
              <div className="card-body">
                <h5 className="card-title">Outdoors Community</h5>
                <p className="card-text">
                  {" "}
                  "To enjoy nature is to enjoy the Father's heart. They are one
                  in the same."{" "}
                </p>

                <Link to="/outdoors">
                  <a href="" className="btn that-blue-color text-white">
                    Get Outside
                  </a>
                </Link>
              </div>
            </div>

            <div className="col-md-2" />

            <div className="card community-card col-md-5">
              <img
                className="card-img-top"
                src="https://images.pexels.com/photos/377058/pexels-photo-377058.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt="Card cap"
              />
              <div className="card-body">
                <h5 className="card-title">Special Needs Families Community</h5>
                <p className="card-text"> Support || Joy || Purpose </p>

                <Link to="/feed">
                  <a href="" className="btn that-blue-color text-white">
                    Make a difference
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="row">
            <div className="card community-card col-md-5">
              <img
                className="card-img-top"
                src="https://images.pexels.com/photos/1249158/pexels-photo-1249158.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt="Card cap"
              />
              <div className="card-body">
                <h5 className="card-title">Business Community</h5>
                <p className="card-text">
                  {" "}
                  "What you celebrate, you reproduce. What you celebrate as a
                  leader defines the culture around you."{" "}
                </p>

                <Link to="/feed">
                  <a href="" className="btn btn-secondary">
                    Impact Culture
                  </a>
                </Link>
              </div>
            </div>

            <div className="col-md-2" />

            <div className="card community-card col-md-5">
              <img
                className="card-img-top"
                src="https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt="Card cap"
              />
              <div className="card-body">
                <h5 className="card-title">Students Community</h5>
                <p className="card-text">
                  {" "}
                  "Learning is acclerated in the context of family."{" "}
                </p>

                <Link to="/feed">
                  <a href="" className="btn that-blue-color text-white">
                    Join a Family
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
        <HelpModal />
        <div style={{ marginBottom: "50px" }} />
      </div>
    );
  }
}

export default Groups;
