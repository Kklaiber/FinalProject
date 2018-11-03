import React, { Component } from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostFeed from './PostFeed';
import PostForm from './PostForm';
import Spinner from '../common/Spinner';
import { getPosts } from '../../actions/postActions';
import FadeIn from 'react-fade-in/lib/FadeIn';

let quickPostForm; 

class Posts extends Component {
 
  componentDidMount() {
    this.props.getPosts();
  }
 
  render() {
    quickPostForm = (
      <PostForm />
    );

    const { posts, loading } = this.props.post;
    let postContent;

    if (posts === null || loading) {
      postContent = <Spinner />;
    } else {
      postContent = <PostFeed posts={posts} />;
    }

    return (
      <div className="feed">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
            <FadeIn>
            <h2 className="text-center thin-text text-secondary">Snapshot</h2>   
              {quickPostForm}
            </FadeIn>
              {postContent}
              <div className="row">
              <Link to='/feed' className="text-dark btn-block col-sm-12">
              <button className="btn btn-block that-blue-color text-white btn-sm">
               More Posts
              </button>
              </Link>
             </div>
             <hr />
             <br/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(mapStateToProps, { getPosts })(Posts);
