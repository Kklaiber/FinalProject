import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import classnames from "classnames";
import { deleteComment, addLikeComment, removeLike } from "../../actions/postActions";

class CommentItem extends Component {
  onDeleteClick(postId, commentId) {
    this.props.deleteComment(postId, commentId);
  }

  onLikeClick(id) {
    this.props.addLikeComment(id);
  }

  onUnlikeClick(id) {
    this.props.removeLike(id);
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
    const { comment, postId, commentId, auth } = this.props;

    return (
      <div className="card card-body mb-3">
        <div className="row">
          <div className="col-md-2">
            <a href="profile.html">
              <img
                className="rounded-circle d-none d-md-block"
                src={comment.avatar}
                alt=""
              />
            </a>
            <br />
            <p className="text-center">{comment.name}</p>
          </div>

          <div className="col-md-10">
            <p className="lead">{comment.text}</p>
            <button
              onClick={this.onLikeClick.bind(this, comment._id)}
              type="button"
              className="btn btn-light mr-1"
            >
              <i
                className={classnames("fas fa-thumbs-up", {
                  "text-warning": this.findUserLike(comment.likes)
                })}
              />
              <span className="badge badge-light">{comment.likes.length}</span>
            </button>
            <button
              onClick={this.onUnlikeClick.bind(this, comment._id)}
              type="button"
              className="btn btn-light mr-1"
            >
              <i className="text-secondary fas fa-thumbs-down" />
            </button>
            {comment.user === auth.user.id ? (
              <button
                onClick={this.onDeleteClick.bind(this, postId, commentId)}
                type="button"
                className="btn btn-danger mr-1"
              >
                <i className="fas fa-times" />
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
  addLikeComment: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  comment: PropTypes.object.isRequired,
  postId: PropTypes.string.isRequired,
  commentId: PropTypes.string.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {
    deleteComment,
    addLikeComment,
    removeLike
  }
)(CommentItem);
