import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
//import { deletePost, addLike, removeLike } from '../../actions/postActions';

class EventItem extends Component {
  onDeleteClick(id) {
    this.props.deletePost(id);
  }
 

  render() {
    const { event, auth } = this.props;

    return (
      <div className="card card-body mb-3">
        <div className="row">
          <div className="col-md-2">
            <a href="profile.html">
              <img
                className="rounded-circle d-none d-md-block"
                src={event.avatar}
                alt=""
              />
            </a>
            <br />
            <p className="text-center">{event.name}</p>
          </div>
          <div className="col-md-10">
            <p className="lead">
              {event.title}
              {/* {event.description} */}
            </p>
            {/* <p>{event.when}</p> */}
            <button type="button" className="btn btn-light mr-1">
              <i className="text-info fas fa-user-plus" />
              <span className="badge badge-light">{event.going.length}</span>
            </button>
            <button type="button" className="btn btn-light mr-1">
              <i className="text-secondary far fa-calendar" />
            </button>
            <Link to={`/event/${event._id}`} className="btn btn-info mr-1" />
            {event.user === auth.user.id ? (
              <button
                onClick={this.onDeleteClick.bind(this, event._id)}
                type="button"
                className="btn btn-danger mr-1"
              >
                <i className="far fa-trash-alt" />
              </button>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

EventItem.propTypes = {
  event: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,  
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(EventItem);
