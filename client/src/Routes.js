import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import PrivateRoute from "./components/common/PrivateRoute";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Dashboard from "./components/dashboard/Dashboard";
import CreateProfile from "./components/create-profile/CreateProfile";
import EditProfile from "./components/edit-profile/EditProfile";
import AddExperience from "./components/add-credentials/AddExperience";
import AddEducation from "./components/add-credentials/AddEducation";
import AddInterests from "./components/add-credentials/AddInterests";
import AddGroup from "./components/add-credentials/AddGroup";
import Profiles from "./components/profiles/Profiles";
import Profile from "./components/profile/Profile";
import Groups from "./components/groups/Groups";

import Posts from "./components/posts/Posts";
import Post from "./components/post/Post";

import Events from "./components/events/Events";
import PostEvents from "./components/post-events/PostEvents";

//missions posts and commenting
import PostsMissions from "./components/posts-missions/PostsMissions";
import PostMissions from "./components/post-missions/PostMissions";

import PostsOutdoors from "./components/posts-outdoors/PostsOutdoors";
import PostOutdoors from "./components/post-outdoors/PostOutdoors";

import NotFound from "./components/not-found/NotFound";

import "./App.css";

function Routes({ auth }) {
    const { isAuthenticated } = auth;
    console.log('isAuthenticated', isAuthenticated);
    return (
        <Router>
            <div className="App">
            <Navbar />
            <div className="container">            
            {isAuthenticated ? (
                <Switch>
                    <PrivateRoute exact path="/" component={Dashboard} />
                    <PrivateRoute
                    exact
                    path="/create-profile"
                    component={CreateProfile}
                    />
                    <PrivateRoute
                    exact
                    path="/edit-profile"
                    component={EditProfile}
                    />
                    <PrivateRoute
                    exact
                    path="/add-experience"
                    component={AddExperience}
                />
                <PrivateRoute
                    exact
                    path="/add-education"
                    component={AddEducation}
                    />
                    <PrivateRoute
                    exact
                    path="/add-interests"
                    component={AddInterests}
                    />
                    <PrivateRoute exact path="/events" component={Events} />
                    <PrivateRoute path="/event/:id" component={PostEvents} />
                    <PrivateRoute
                    exact
                    path="/missions"
                    component={PostsMissions}
                    />
                    <PrivateRoute
                    exact
                    path="/missions/post/:id"
                    component={PostMissions}
                    />
                    <PrivateRoute
                    exact
                    path="/outdoors"
                    component={PostsOutdoors}
                    />
                    <PrivateRoute
                    exact
                    path="/outdoors/post/:id"
                    component={PostOutdoors}
                    />
                    <PrivateRoute exact path="/communities" component={Groups} />
                    <PrivateRoute exact path="/add-group" component={AddGroup} />
                    <PrivateRoute exact path="/feed" component={Posts} />
                    <PrivateRoute exact path="/post/:id" component={Post} />
                </Switch>
            ): (
                <Switch>
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/profiles" component={Profiles} />
                    <Route exact path="/profile/:handle" component={Profile} />
                    <Route exact path="/not-found" component={NotFound} />
                </Switch>
            )}
            </div>
            <Footer />
            </div>
        </Router>
    )
}

Routes.propTypes = {
    auth: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth
  });
  
  export default connect(mapStateToProps)(Routes);
  