import React, { Component, Fragment } from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { deletePost, addLike, removeLike, addCommentLike, removeCommentLike } from '../../actions/postActions';

import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import FadeIn from 'react-fade-in';
import EditPostForm from '../edit-posts/EditPostForm';

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
    const { post, profile } = this.props;
   // console.log('post', post);
    const { isEditting } = this.state;
    return isEditting ? <EditPostForm post={post} /> : <p className="lead post-text">{post.text}</p>;
  }


  renderEditForm = () => {
    <form>
      <div className="form-group">
        <TextAreaFieldGroup
          placeholder="Edit a post"
          name="text"
          value={''}
          onChange={() => console.log('editing')}
          // error={}
        />           
      </div>
      <h6 className="float-right" id="count_message" style={{color:'#BEBEBE'}}>
        500 Character Limit
      </h6>
      <button type="submit" className="btn btn-dark">
        Submit
      </button>
    </form>
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
                src={post.user.avatar}
                alt=""
              />
            
            <br />
            <p className="text-center">{post.user.name}
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
                
                <Link to={`/post/${post._id}`} className="badge badge-light mr-1">
                {post.comments.length} {(post.comments.length === 1) ? "Comment" : "Comments"}
                </Link>
                    
                {post.user._id === auth.user.id ? (
                  <Fragment>
                    <button
                      onClick={this.onDeleteClick.bind(this, post._id)}
                      type="button"
                className="btn btn-danger mr-1 float-left"
              >
                <i className="fas fa-archive" />
              </button>
                    <button 
                      onClick={ this.onEditClick }
                      type="button"
                      className="btn btn-danger mr-1 float-left"
                    >
                <i className="fas fa-archive" />
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
