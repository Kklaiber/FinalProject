import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import { addPost } from '../../actions/postActions';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.errors) {
      this.setState({ errors: newProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const { user } = this.props.auth;

    const newPost = {
      text: this.state.text,
      name: user.name,
      avatar: user.avatar
    };

    this.props.addPost(newPost);
    this.setState({ text: '' });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;



    return (
      <div className="post-form mb-3">
        <div className="card card-info">
          <div className="card-header bg-info text-white">Say Somthing...</div>
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">

                <TextAreaFieldGroup
                  placeholder="Create a post"
                  name="text"
                  value={this.state.text}
                  onChange={this.onChange}
                  error={errors.text}
                />

              <small id="communityHelper" className="form-text text-muted">
              Select the community for your post
              </small>

              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="community" value="missions"/>
                <label className="form-check-label">Missions</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="community" value="outdoors"/>
                <label className="form-check-label">Outdoors</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="community" value="smallgroups"/>
                <label className="form-check-label">Small Groups</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="community" value="specialneeds"/>
                <label className="form-check-label">Special Needs</label>
              </div>
              </div>
              <h6 className="float-right" id="count_message" style={{color:'#BEBEBE'}}>500 Character Limit</h6>
              <button type="submit" className="btn btn-dark">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { addPost })(PostForm);
