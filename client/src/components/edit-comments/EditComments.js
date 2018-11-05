import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import {editComment} from '../../actions/commentActions';


class EditCommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.comment.text
    }
  }

  handleTextChange = (event) => {
    this.setState({ text: event.target.value });
  }

  handleSubmit = (e) => {
    //Deconstruct 
    const { text } = this.state;
    const { postId, comment } = this.props;
    this.props.editComment(postId, comment._id, text);
  }

  render() {
    return (
      <form>
      <div className="form-group">
        <TextAreaFieldGroup
          placeholder="Edit a comment"
          name="text"
          value={this.state.text}
          onChange={this.handleTextChange}
          // error={}
        />           
      </div>
      <h6 className="float-right" id="count_message" style={{color:'#BEBEBE'}}>
        500 Character Limit
      </h6>
      <button type="submit" className="btn btn-dark btn-sm" onClick={this.handleSubmit}>
        Submit
      </button>
    </form>
    );
  }
}



export default connect(null, { editComment })(EditCommentForm);