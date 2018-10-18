import React, { Component } from "react";
import PropTypes from "prop-types";
import CommentItem from "./CommentItem";

class CommentFeed extends Component {
  render() {
    const { comments, eventId } = this.props;

    return comments.map(comment => 
      <CommentItem key={comment._id} comment={comment} eventId={eventId} />
    );
  }
}

CommentFeed.propTypes = {
  comments: PropTypes.array.isRequired,
  eventId: PropTypes.string.isRequired
};

export default CommentFeed;
