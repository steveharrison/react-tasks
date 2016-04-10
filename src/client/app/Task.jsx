import React from 'react';

class Task extends React.Component {

	constructor(props) {
    super(props);
    this.state = { description: this.props.description };
		this.updateField = this.updateField.bind(this);
	}

	updateField(event) {
    this.setState({ description: event.target.value });
	}

  render() {
    return (
      <li className="task">
        <input type="checkbox" checked={this.props.checked} />
        <label>{this.props.description}</label>
      </li>
    );
  }

}

export default Task;