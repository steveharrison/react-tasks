import React from 'react';

class AddTask extends React.Component {

	constructor(props) {
    super(props);
    this.state = {
      description: ''
    };
		this.updateField = this.updateField.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
	}

	updateField(event) {
    this.setState({ description: event.target.value });
	}

  onKeyDown(event) {
    if (event.which === 13) {
      var task = { description: this.state.description, done: false };
      this.props.onAdd(task);

      this.setState({ description: '' });
    }
  }

  render() {
    return (
      <div>
        {/* <label htmlFor="addTaskField">Add task</label> */}
        <input id="addTaskField" type="text" value={this.state.description} onChange={this.updateField} onKeyDown={this.onKeyDown} />
        <label htmlFor="addTaskField">Create a new task (press <strong>Enter</strong> to add)</label>
      </div>
    );
  }

}

export default AddTask;