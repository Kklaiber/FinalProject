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
      errors: {},
      community: 'general'
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
      avatar: user.avatar,
      community: this.state.community
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
     
          <div>
             <form onSubmit={this.onSubmit}>
              <div className="form-group">

                <TextAreaFieldGroup
                  placeholder="Share a thought..."
                  name="text"
                  value={this.state.text}
                  onChange={this.onChange}
                  error={errors.text}
                />

                </div>
                <button type="submit" style={{marginBottom: '15px'}}className="btn btn-block that-blue-color text-white btn-sm">
                Quick Post
              </button>
            </form>
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
