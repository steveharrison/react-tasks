import React from 'react';
import Task from './Task.jsx';

class TaskList extends React.Component {

  render() {
    return (
      <ul>
      {this.props.data.map(function(task) {
    		return <Task description={task.description} done={task.done} />;
    	})}
      </ul>
    );
  }

}

export default TaskList;