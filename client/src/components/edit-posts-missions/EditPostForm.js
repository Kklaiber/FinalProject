import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import { editPost } from '../../actions/postMissionsActions';

class EditPostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.post.text
    }
  }

  handleTextChange = (event) => {
    this.setState({ text: event.target.value });
  }

  handleSubmit = () => {
    const { post } = this.props;
    const { text } = this.state;

    this.props.editPost(post, text);
  }

  render() {
    return (
      <form>
      <div className="form-group">
        <TextAreaFieldGroup
          placeholder="Edit a post"
          name="text"
          value={this.state.text}
          onChange={this.handleTextChange}
          // error={}
        />           
      </div>
      <h6 className="float-right" id="count_message" style={{color:'#BEBEBE'}}>
        500 Character Limit
      </h6>
      <button type="submit" className="btn btn-dark" onClick={this.handleSubmit}>
        Submit
      </button>
    </form>
    );
  }
}



export default connect(null, { editPost })(EditPostForm);