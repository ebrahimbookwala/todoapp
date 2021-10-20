import React, { Component } from "react";

export class addTodo extends Component {
	state = {
		title: "",
	};

	handleInput = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	onSubmit = (e) => {
		e.preventDefault();
		this.props.addTodo(this.state.title);
		this.setState({
			title: "",
		});
	};

	render() {
		return (
			<form className="form-container " onSubmit={this.onSubmit}>
				<input
					placeholder="Add Todo.."
					className="input-text"
					value={this.state.title}
					onChange={this.handleInput}
					name="title"
				/>
				<input type="submit" value="Submit " className="input-submit" />
			</form>
		);
	}
}

export default addTodo;
