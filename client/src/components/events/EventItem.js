import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deletePost, addLike, removeLike } from "../../actions/postActions";
import classnames from "classnames";
import Moment from 'react-moment';

import {
  deleteEvent,
  goingToEvent,
  notGoingToEvent,
  interestedInEvent
} from "../../actions/eventActions";
import Events from "./Events";
import FadeIn from "react-fade-in/lib/FadeIn";

class EventItem extends Component {
  onDeleteClick(id) {
    this.props.deleteEvent(id);
  }

  onGoingClick(id) {
    this.props.goingToEvent(id);
  }
  onNotGoingClick(id) {
    this.props.notGoingToEvent(id);
  }
  onInterestedClick(id) {
    this.props.interestedInEvent(id);
  }
  onLikeClick(id) {
    this.props.addLike(id);
  }

  onUnlikeClick(id) {
    this.props.removeLike(id);
  }

  findUserGoing(going) {
    const { auth } = this.props;
    if (going.filter(going => going.user === auth.user.id).length > 0) {
      return true;
    } else {
      return false;
    }
  }

  findUserNotGoing(notGoing) {
    const { auth } = this.props;
    if (notGoing.filter(notGoing => notGoing.user === auth.user.id).length > 0) {
      return true;
    } else {
      return false;
    }
  }

  findUserInterested(interested) {
    const { auth } = this.props;
    if (
      interested.filter(interested => interested.user === auth.user.id).length >
      0
    ) {
      return true;
    } else {
      return false;
    }
  }

  findUserLike(likes) {
    const { auth } = this.props;
    if (likes.filter(like => like.user === auth.user.id).length > 0) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const { event, auth, showActions, fullDescription } = this.props;
    if(!event.user) {
      return <p></p>;
    }

    return (
      <FadeIn>
      <div className="card card-body event-box mb-3">
        <div className="row">
          <div className="col-md-2">
           
              <img
                className="rounded-circle event-avatar d-md-block"
                src={event.avatar}
                alt=""
              />
           
            <br />
            <p className="text-center">{event.name}</p>
          </div>
          <div className="col-md-10">

           {fullDescription ? (<span>
            <p className="lead">
              <strong>Title: </strong>{event.title}
              <br/>
              <strong>Description: </strong> {event.description}
              <br/>
              <strong>Date: </strong> <Moment format="D MMM YYYY" withTitle>{event.when}</Moment>
              <br/>
              <strong> Time: </strong> {event.time} 
              <br/>
              <strong>Location: </strong>{event.where}
              <br/>
              <strong>Childcare: </strong>{event.childcare}
              <br/>
              <strong>Ages: </strong>{event.kidfriendly}
              </p>
           </span>) 
                                 : 
           <span>
           <p className="lead">
           <Link to={`/event/${event._id}`}>    <span className="event-title">{event.title}</span></Link>
              <br/>
              <strong>Description: </strong> {event.description}
              <br/>
              <strong>Date: </strong> <Moment format="D MMM YYYY" withTitle>{event.when}</Moment>
              <br/>
              <strong> Time: </strong>{event.time}
              </p>
           </span>}
            
            {showActions ? (
              
              <span>
            
                <button
                  onClick={this.onGoingClick.bind(this, event._id)}
                  type="button"
                  className="btn btn-light mr-1"
                  title="Count me in!"
                >
                  <i
                    className={classnames("fas fa-user-plus", {
                      "event-title": this.findUserGoing(event.going)
                    })}
                  />
                  <span className="badge badge-light">
                    {event.going.length}
                  </span>
                </button>
                <button
                  onClick={this.onInterestedClick.bind(this, event._id)}
                  type="button"
                  className="btn btn-light mr-1"
                  title="Interested"
                >
                  <i
                    className={classnames("text-secondary far fa-calendar", {
                      "fal fa-calendar-check": this.findUserInterested(
                        event.interested
                      )
                    })}
                  />
                  <span className="badge badge-light">
                  {event.interested.length}
                  </span>
                </button>
                <button
                  onClick={this.onNotGoingClick.bind(this, event._id)}
                  type="button"
                  className="btn btn-light mr-1"
                  title="Can't go"
                >
                  <i
                    className={classnames("fas fa-times", {
                      "text-danger": this.findUserNotGoing(event.notGoing)
                    })}
                  />
                  <span className="badge badge-light">
                    {event.notGoing.length}
                  </span>
                </button>

                <Link to={`/event/${event._id}`} className="badge badge-light mr-1">
                {event.comments.length} {(event.comments.length === 1) ? "Comment" : "Comments"}
                </Link>
                <Link to={`/event/${event._id}`} className="badge badge-light mr-1">
                More Details
                </Link>
                {event.user === auth.user.id ? (
                  <button
                    onClick={this.onDeleteClick.bind(this, event._id)}
                    type="button"
                    className="btn btn-danger mr-1 btn-sm float-right"
                  >
                    <i className="fas fa-trash-alt" />
                  </button>
                ) : null}
              </span>
            ) : null}
          </div>
        </div>
      </div>
      </FadeIn>
    );
  }
}

EventItem.defaultProps = {
  showActions: true,
  fullDescription: false
};

EventItem.propTypes = {
  deleteEvent: PropTypes.func.isRequired,
  goingToEvent: PropTypes.func.isRequired,
  notGoingToEvent: PropTypes.func.isRequired,
  interestedInEvent: PropTypes.func.isRequired,
  event: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { addLike, removeLike, deleteEvent, goingToEvent, notGoingToEvent, interestedInEvent }
)(EventItem);
