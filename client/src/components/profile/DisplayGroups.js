import React, { Component } from 'react';
import { connect} from 'react-redux';
import { deleteGroup } from '../../actions/profileActions';

class DisplayGroups extends Component {
   

  render() {
    const group = this.props.group.map(group => (
        <div> 
            <ul>
        <li>{group.title}</li>
          </ul>
        </div>
    ));
    return (
      <div>
        {group}
      </div>
    )
  }
}

DisplayGroups.propTypes = {
  
}

export default connect(null, { deleteGroup })(DisplayGroups);