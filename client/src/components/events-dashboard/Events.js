import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import EventFeed from "./EventFeed"
import Spinner from "../common/Spinner";
import { getEvents } from "../../actions/eventActions";

class Events extends Component {
    componentDidMount(){
        this.props.getEvents();
    }
  render() {
    const { events, loading } = this.props.event;
    let eventContent;

    if(events === null || loading){
        eventContent = <Spinner/>
    }else{
        eventContent = <EventFeed events={events} />
    }

    return (
      <div>
        <div className="row">
          <div className="col-md-12">
          <h4 className="thin-text text-center text-secondary">What's Happening?</h4>
          </div>
          <br/><br/>
            <div className="col-md-12">
              {eventContent}
            </div>
          </div>
       
        <div style={{ marginBottom: "50px" }} />
      </div>
    );
  }
}

Events.propTypes = {
    getEvents: PropTypes.func.isRequired,
    event: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    event: state.event
})

export default connect(mapStateToProps, { getEvents })(Events);
