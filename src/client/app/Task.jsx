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
      <input type="text" value={this.state.description} onChange={this.updateField} />
    );
  }

}

export default Task;