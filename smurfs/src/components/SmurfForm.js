import React, { useState } from "react";
import { connect } from "react-redux";

const AddSmurf = (props) => {
	const [formState, setFormState] = useState({
		name: "",
		age: "",
		height: "",
	});

	const handleChanges = (e) => {
		setFormState({
			...formState,
			[e.target.name]: e.target.value,
		});
	};

	const formSubmit = (e) => {
		e.preventDefault();
		setFormState({
			name: "",
			age: "",
			height: "",
		});
	};

	return (
		<form onSubmit={formSubmit}>
			<label htmlFor="name">Name</label>
			<input
				name="name"
				value={formState.name}
				placeholder="Name"
				onChange={handleChanges}
			></input>
			<label htmlFor="age">Age</label>
			<input
				name="age"
				value={formState.age}
				placeholder="Age"
				onChange={handleChanges}
			></input>
			<label htmlFor="height">Height</label>
			<input
				name="height"
				value={formState.height}
				placeholder="Height"
				onChange={handleChanges}
			></input>
			<button>Submit</button>
		</form>
	);
};

const mapStateToProps = (state) => {
	return state;
};

export default connect(mapStateToProps, {})(AddSmurf);
