import React, { useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { addSmurf } from "../actions";

const SmurfForm = (props) => {
	const [smurf, setSmurf] = useState({
		name: "",
		age: "",
		height: "",
	});

	const handleChanges = (e) => {
		setSmurf({
			...smurf,
			[e.target.name]: e.target.value,
		});
	};

	const formSubmit = (e) => {
		e.preventDefault();
		console.log("form props", props);
		const smurfToAdd = smurf;
		console.log("smurf:", smurfToAdd);
		addSmurf(smurfToAdd);
	};

	return (
		<form onSubmit={formSubmit}>
			<label htmlFor="name">Name</label>
			<input
				name="name"
				value={smurf.name}
				placeholder="Name"
				onChange={handleChanges}
			></input>
			<label htmlFor="age">Age</label>
			<input
				name="age"
				value={smurf.age}
				placeholder="Age"
				onChange={handleChanges}
			></input>
			<label htmlFor="height">Height</label>
			<input
				name="height"
				value={smurf.height}
				placeholder="Height"
				onChange={handleChanges}
			></input>
			<button>Submit</button>
		</form>
	);
};

const mapStateToProps = (state) => {
	return {
		smurfs: state.smurfs,
		pending: state.pending,
		error: state.error,
	};
};

export default connect(mapStateToProps, { addSmurf })(SmurfForm);
