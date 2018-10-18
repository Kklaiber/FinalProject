import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Spinner from "../common/Spinner";
import { getEvent } from "../../actions/eventActions";
import EventItem from "../events/EventItem";
import CommentForm from './CommentForm';
import EventForm from "../events/EventForm";
import { EVENT_LOADING } from "../../actions/types";
import CommentFeed from './CommentFeed';

class Post extends Component {
  componentDidMount() {
    this.props.getEvent(this.props.match.params.id);
  }
  render() {
    const { event, loading } = this.props.event;
    let eventContent;

    if (event === null || loading || Object.keys(event).length === 0) {
      eventContent = <Spinner />;
    } else {
      eventContent = (
        <div>
          <EventItem event={event} showActions={false} fullDescription={true} />
          <CommentForm eventId={event._id}/>
          <CommentFeed eventId={event._id} comments={event.comments} />
        </div>
      );
    }
    return (
      <div className="event">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Link to="/events" className="btn btn-light mb-3">
                Back To Events
              </Link>
              {eventContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Event.propTypes = {
  getEvent: PropTypes.func.isRequired,
  event: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  event: state.event
});

export default connect(
  mapStateToProps,
  { getEvent }
)(Post);
