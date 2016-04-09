import React from 'react';

class TaskList extends React.Component {

  render() {
    return (
      <ul>
      {this.props.data.map(function(task) {
    		return <li>{task.description} <span>{task.done.toString()}</span></li>;
    	})}
      </ul>
    );
  }

}

export default TaskList;