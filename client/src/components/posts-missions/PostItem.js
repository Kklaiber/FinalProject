import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { deletePost, addLike, removeLike } from '../../actions/postMissionsActions';
import Moment from 'react-moment';
import FadeIn from 'react-fade-in';
import EditPostForm from '../edit-posts-missions/EditPostForm';

class PostItem extends Component {

  state = {
    isEditting: false, 
   }

  onDeleteClick(id) {
    this.props.deletePost(id);
  }

  onLikeClick(id) {
    this.props.addLike(id);
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
 

  onEditClick = () => {
    this.setState({ isEditting: !this.state.isEditting });
  }

  renderText = () => {
    const { post } = this.props;
    const { isEditting } = this.state;
    return isEditting ? <EditPostForm post={post} /> : <p className="lead post-text">{post.text}</p>;
  }

  render() {
    const { post, auth, showActions } = this.props;

    const fromNow = (
      <Moment fromNow className="text-secondary small"
             date={post.date}/>
    );
    const showDate = (
      <Moment className="text-secondary small"
            format="MM/DD/YYYY HH:mm"
             date={post.date}/>
    );
    const todaysDate = (
      // <Moment from date={new Date()}/>
      <Moment subtract={{ hours: 24 }}>{new Date()}</Moment>
    );


    return (
      <FadeIn>
      <div className="card card-body mb-3 post-card">
        <div className="row">
          <div className="col-md-2">
          
              <img
                className="rounded-circle post-avatar d-md-block"
                src={post.avatar}
                alt=""
              />

            <br />
            <p className="text-center">{post.name}
            <br/>

             {/* {todaysDate} */}
        {(post.date > todaysDate) ? showDate : fromNow}
           </p>

          </div>
          <div className="col-md-10">
          {this.renderText()}
            </div>
            <div className="post-actions">
            {showActions ? (
              <span>
                <button
                  onClick={this.onLikeClick.bind(this, post._id)}
                  type="button"
                  className="btn btn-light mr-1"
                >
                  <i
                    className={classnames('fas fa-thumbs-up', {
                      'text-warning': this.findUserLike(post.likes)
                    })}
                  />
                  <span className="badge badge-light">{post.likes.length}</span>
                </button>
                <button
                  onClick={this.onUnlikeClick.bind(this, post._id)}
                  type="button"
                  className="btn btn-light mr-1"
                >
                  <i className="text-secondary fas fa-thumbs-down" />
                </button>
                
                <Link to={`missions/post/${post._id}`} className="badge badge-light mr-1">
                {post.comments.length} {(post.comments.length === 1) ? "Comment" : "Comments"}
                </Link>
                {post.user === auth.user.id ? (
                   <Fragment>
                   <button
                     onClick={this.onDeleteClick.bind(this, post._id)}
                     type="button"
                     className="badge badge-light mr-1"
                   >
                   <span className="text-danger"> Delete Post </span>
                   </button>
                   <button 
                     onClick={ this.onEditClick }
                     type = "button"
                     className = "badge badge-light mr-1"
                   >
                     <span> Edit Post</span>
                   </button>
                 </Fragment>
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

PostItem.defaultProps = {
  showActions: true
};

PostItem.propTypes = {
  deletePost: PropTypes.func.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { deletePost, addLike, removeLike })(
  PostItem
);
