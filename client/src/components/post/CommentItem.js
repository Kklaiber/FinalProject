import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { 
  deleteComment, 
  addLike, 
  addCommentLike, 
  removeLike,
  removeCommentLike
 } from '../../actions/postActions';


class CommentItem extends Component {
  onDeleteClick(postId, commentId) {
    this.props.deleteComment(postId, commentId);
  }

  onLikeClick(id) {
    this.props.addCommentLike(id);
  }

  onUnlikeClick(id) {
    this.props.removeCommentLike(id)
  }

  render() {
    const { comment, postId, auth } = this.props;

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
            <button onClick={this.onLikeClick.bind(this, comment._id)} type="button" className="btn btn-light me-1">
              <i className="text-info fas fa-thumbs-up" />
              <span className=" badge badge-light">{comment.likes.length}</span>
            </button>
            <button onClick={this.onUnlikeClick.bind(this, comment._id)} type="button" className="btn btn-light me-1">
              <i className="text-secondary fas fa-thumbs-down" />
              <span className=" badge badge-light">{comment.likes.length}</span>
            </button>
            {comment.user === auth.user.id ? (
              <button
                onClick={this.onDeleteClick.bind(this, postId, comment._id)}
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
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  addCommentLike: PropTypes.func.isRequired,
  removeCommentLike: PropTypes.func.isRequired,
  comment: PropTypes.object.isRequired,
  postId: PropTypes.string.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { 
  deleteComment, 
  addLike, 
  removeLike,
  addCommentLike,
  removeCommentLike
 })(CommentItem);
