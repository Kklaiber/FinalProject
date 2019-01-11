import React, { Component } from "react";
import { connect } from "react-redux";
import Moment from 'react-moment';
import PropTypes from "prop-types";
import { deleteComment } from "../../actions/eventActions";

class CommentItem extends Component {
  onDeleteClick(eventId, commentId) {
    this.props.deleteComment(eventId, commentId);
  }
  render() {
    const { comment, eventId, auth } = this.props;
    return (
      <div className="card card-body mb-3">
        <div className="row">
          <div className="col-md-2">
            <a href="profile.html">
              <img
                className="rounded-circle d-none d-md-block"
                src={comment.user.avatar}
                alt=""
              />
            </a>
            <br />
            <p className="text-center">{comment.name}<br/>
            <Moment fromNow className="text-secondary small"
             date={comment.date}/>
             </p>
          </div>
          <div className="col-md-10">
            <p className="lead">{comment.text}</p>
            </div>
            <div className="col-md-12">
            {comment.user === auth.user.id ? (
              <button
                onClick={this.onDeleteClick.bind(this, eventId, comment._id)}
                type="button"
                className="btn btn-danger mr-1 btn-sm float-right"
              >
               <i class="fas fa-trash-alt"></i>
              </button>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}
CommentItem.propTypes = {
  deleteComment: PropTypes.func.isRequired,
  comment: PropTypes.object.isRequired,
  eventId: PropTypes.string.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { deleteComment }
)(CommentItem);
