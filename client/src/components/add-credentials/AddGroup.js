import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addGroup } from '../../actions/profileActions';

class AddGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            current: false,
            description: '',
            errors: {},
            disabled: false
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onCheck = this.onCheck.bind(this);
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
    }

    onSubmit(e) {
        e.preventDefault();

        const groupData = {
            title: this.state.title,
            current: this.state.current,
            description: this.state.description
        };

        this.props.addGroup(groupData, this.props.history);
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
            <div className="add-group">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <Link to="/dashboard" className="btn btn-light">
                                Go Back
                            </Link>
                            <h1 className="display-4 text-center">Add Group</h1>
                            <p className="lead text-center">Add any interest, hobby, or ministry you want to create in our organization</p>
                            <small className="d-block pb-3">* = required fields</small>
                            <form onSubmit={this.onSubmit}>
                            <TextFieldGroup
                                placeholder="* Title"
                                name="title"
                                value={this.state.title}
                                onChange={this.onChange}
                                errors={errors.title}
                            />
                            <TextAreaFieldGroup
                                placeholder="Group Description"
                                name="description"
                                value={this.state.description}
                                onChange={this.onChange}
                                error={errors.description}
                                info="Tell us a little about this group"
                            />
                            <input 
                                type="submit" 
                                value="Submit" 
                                className="btn btn-info btn-block mt-4"
                            />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

AddGroup.propTypes = {
    addGroup: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    profile: state.profile,
    errors: state.errors
});

export default connect(mapStateToProps, { addGroup })(withRouter(AddGroup));