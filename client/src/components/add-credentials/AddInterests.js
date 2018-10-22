import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import TextFieldGroup from "../common/TextFieldGroup";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addInterests } from "../../actions/profileActions";

class AddInterests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      interests: "",
      errors: {},
      disabled: false
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onCheck = this.onCheck.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const intData = {
      interests: this.state.interests
    };

    this.props.addInterests(intData, this.props.history);
    
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onCheck(e) {
    this.setState({
      disabled: !this.state.disabled,
      current: !this.state.current
    });
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="add-interests">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <Link to="/dashboard" className="btn btn-light">
                Go Back
              </Link>
              <h1 className="display-4 text-center">Add Interests</h1>
              <p className="lead text-center">
                Share a bit about your interests!
              </p>
              <small className="d-block pb-3">* = required fields</small>
              
                <form onSubmit={this.onSubmit}>
                  <TextFieldGroup
                    placeholder="* Interests"
                    name="interests"
                    value={this.state.interests}
                    onChange={this.onChange}
                    error={errors.interests}
                    info="Cooking, Music, Hiking..."
                  />
                  {/* <TextAreaFieldGroup
                                placeholder="Tell us more!"
                                name="more"
                                 value={this.state.more}
                                 onChange={this.onChange}
                                 error={errors.more}
                                 info="Tell us about why this interests you!"
                            /> */}
<<<<<<< HEAD

                  <input
                    type="submit"
                    value="Submit"
                    className="btn btn-info btn-block mt-4"
                  />
                </form>
              
=======
                            
                            <input 
                                type="submit" 
                                value="Submit" 
                                className="btn btn-info btn-block mt-4"
                            />
                            </form>
                        </div>
                    </div>
                </div>
>>>>>>> 429b7c3ec75dbee55e1bf2c52cd455c83881553a
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AddInterests.propTypes = {
  addInterests: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addInterests }
)(withRouter(AddInterests));
