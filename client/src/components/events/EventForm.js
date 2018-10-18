import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import TextFieldGroup from '../common/TextFieldGroup';
import SelectListGroup from '../common/SelectListGroup';
import { addEvent } from "../../actions/eventActions";

class EventForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      when: "",
      time: "",
      where: "",
      childcare: "",
      kidfriendly: "",
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
    const newEvent = {
      title: this.state.title,
      description: this.state.description,
      when: this.state.when,
      time: this.state.time,
      where: this.state.where,
      name: user.name,
      avatar: user.avatar,
      childcare: this.state.childcare,
      kidfriendly: this.state.kidfriendly
    };

    this.props.addEvent(newEvent);
    this.setState({ title: ""});
    this.setState({ description: "" });
    this.setState({ when: "" });
    this.setState({ time: "" });
    this.setState({ where: "" });
    this.setState({ childcare: "" });
    this.setState({ kidfriendly: "" });


  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    const { errors } = this.state;

     // Select options for childcare
     const careOptions = [
      { label: 'Childcare Options', value: 0 },
      { label: 'Childcare Is Provided', value: 'Yes, Childcare Is Provided!' },
      { label: 'Childcare For Ages Over 3', value: 'Yes, ages 3+' },
      { label: 'No Childcare Will Be Provided', value: 'No Childcare Will Be Provided' },
    ];

     // Select options for family friendly
     const familyOptions = [
      { label: 'Family Friendly Options', value: 0 },
      { label: 'This Event Is For The Whole Family!', value: 'This Event Is For The Whole Family!' },
      { label: 'This Event Is For Young Adults', value: 'This Event Is For Young Adults' },
      { label: 'This Event Is Not Recommended For Kids', value: 'This Event Is Not Recommended For Children under 13' },
      { label: 'This Event Is For Teens', value: 'This Event Is For Teens' },
     
    ];

    return (
      <div className="post-form mb-3">
        <div className="card card-info">
          <div className="card-header text-white">Create An Event!</div>
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <TextFieldGroup
                  placeholder="Event Title"
                  name="title"
                  value={this.state.title}
                  onChange={this.onChange}
                  error={errors.text}
                />
                
                <TextAreaFieldGroup
                  placeholder="Describe Your Event"
                  name="description"
                  value={this.state.description}
                  onChange={this.onChange}
                  error={errors.text}
                />
                 <TextFieldGroup
                placeholder="Location of Event"
                name="where"
                value={this.state.where}
                onChange={this.onChange}
                error={errors.text}
                />

                 <small id="communityHelper" className="form-text text-muted">
                Please enter the date and time of your event!
                </small>
                <div className="row">
                <div className="col-md-6">
                <TextFieldGroup
                placeholder="Date Of Event"
                name="when"
                type="date"
                value={this.state.when}
                onChange={this.onChange}
                error={errors.text}
                />
                </div>
                <div className="col-md-6">
                <TextFieldGroup
                placeholder="Time Of Event"
                name="time"
                type="time"
                value={this.state.time}
                onChange={this.onChange}
                error={errors.text}
                />
                </div>
                </div>
                <small id="communityHelper" className="form-text text-muted">
                Is childcare provided?
                </small>
                <SelectListGroup
                placeholder="Is Childcare Provided?"
                name="childcare"
                value={this.state.childcare}
                onChange={this.onChange}
                error={errors.text}
                options={careOptions}
                 />
                <small id="communityHelper" className="form-text text-muted">
                Is your event family friendly? 
                </small>
                <SelectListGroup
                placeholder="Is Your Event Family-Friendly?"
                name="kidfriendly"
                value={this.state.kidfriendly}
                onChange={this.onChange}
                error={errors.text}
                options={familyOptions}
                 />
              </div>

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

EventForm.propTypes = {
  addEvent: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addEvent }
)(EventForm);
