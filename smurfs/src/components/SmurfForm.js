import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import axios from "axios";
import { ADD_SMURFS_BEGIN, ADD_SMURFS_SUCCESS } from "../actions";

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

	const dispatch = useDispatch();

	// const formSubmit = (e) => {
	// 	e.preventDefault();
	// 	console.log("form props", props);
	// 	console.log("smurf:", smurf);
	// 	props.addSmurf(smurf);
	// };

	return (
		<form
			onSubmit={() => {
				dispatch({ type: ADD_SMURFS_BEGIN });
				axios.post("http://localhost:3333/smurfs", smurf).then((res) => {
					console.log("addSmurf res:", res);
					console.log("addSmurf res.data:", res.data);
					dispatch({ type: ADD_SMURFS_SUCCESS, payload: res.data });
				});
			}}
		>
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

export default connect(mapStateToProps, {})(SmurfForm);
