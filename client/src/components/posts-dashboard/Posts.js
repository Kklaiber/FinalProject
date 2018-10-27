import React, { Component } from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostFeed from './PostFeed';
import Spinner from '../common/Spinner';
import { getPosts } from '../../actions/postActions';
import FadeIn from 'react-fade-in/lib/FadeIn';
class Posts extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
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
            </FadeIn>
              {postContent}
              <div className="row">
              <div className="col-2"></div>
              <div className="badge badge-light col-md-8">
             <Link to='/feed'><h4 className="text-secondary">More Posts</h4></Link>
             </div>
             <div className="col-2"></div>
             </div>
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
