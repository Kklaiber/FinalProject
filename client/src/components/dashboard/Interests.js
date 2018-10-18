import React, { Component } from 'react';
import { connect} from 'react-redux';
import PropTypes from 'prop-types';
import { deleteInterests } from '../../actions/profileActions';

class Interests extends Component {
    onDeleteClink(id) {
        this.props.deleteInterests(id);
    }

  render() {
    const interests = this.props.interests.map(int => (
        <tr key={int._id}>
            <td>{int.interests}</td>
            <td>
                <button onClick={this.onDeleteClink.bind(this, int._id)} className="btn btn-danger">Delete</button>
            </td>
        </tr>
    ));
    return (
      <div>
          <h4 className="mb-4">Interests</h4>
          <table className="table">
            <thead>
                {interests}
            </thead>
          </table>
      </div>
    )
  }
}

Interests.propTypes = {
    deleteInterests: PropTypes.func.isRequired
}

export default connect(null, { deleteInterests })(Interests);