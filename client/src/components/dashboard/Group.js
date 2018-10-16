import React, { Component } from 'react';
import { connect} from 'react-redux';
import PropTypes from 'prop-types';
import { deleteGroup } from '../../actions/profileActions';

class Group extends Component {
    onDeleteClink(id) {
        this.props.deleteGroup(id);
    }

  render() {
    const group = this.props.group.map(group => (
        <tr key={group._id}>
            <td>{group.title}</td>
            <td>{group.description}</td>
            
            <td>
                <button onClick={this.onDeleteClink.bind(this, group._id)} className="btn btn-danger">Delete</button>
            </td>
        </tr>
    ));
    return (
      <div>
          <h4 className="mb-4">Group Memberships</h4>
          <table className="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th></th>
                </tr>
                {group}
            </thead>
          </table>
      </div>
    )
  }
}

Group.propTypes = {
    deleteGroup: PropTypes.func.isRequired
}

export default connect(null, { deleteGroup })(Group);