import React, { Component } from "react";
import PropTypes from "prop-types";
import EventItem from "./EventItem";

class EventFeed extends Component {
  render() {
    const { events } = this.props;
   
    return events.slice(0, 2).map(event => <EventItem key={event._id} event={event} />);
  }
}

EventFeed.propTypes = {
  events: PropTypes.array.isRequired
};

export default EventFeed;
