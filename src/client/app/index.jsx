import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './AwesomeComponent.jsx';
import Heading from './Heading.jsx';
import Task from './Task.jsx';
import TaskList from './TaskList.jsx';
import AddTask from './AddTask.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      taskData: [
        { description: 'First ToDo of the day...', done: true },
        { description: 'Second ToDo of the day... ', done: false },
        { description: 'Something else to do', done: false }
      ]
    };

    this.addTask = this.addTask.bind(this);
  }

  addTask(task) {
    var newTaskData = this.state.taskData;
    newTaskData.push(task);
    this.setState({ taskData: newTaskData });
  }

	render() {
    console.log('rendering');
		return (
  		<div className="container">
  			<h1>Tasks ({this.state.taskData.length})</h1>
        <TaskList data={this.state.taskData} />
        <AddTask data={this.state.taskData} onAdd={this.addTask} />
  		</div>
		);
	}
}

render(<App/>, document.getElementById('app'));
