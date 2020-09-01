import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { ADD_SMURFS_BEGIN, ADD_SMURFS_SUCCESS } from "../actions";

import "./SmurfForm.css";

const SmurfForm = ({ addSmurf }) => {
	const [smurf, setSmurf] = useState({
		name: "",
		age: "",
		height: "",
		editing: false,
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
	// 	console.log("smurf:", smurf);
	// 	addSmurf(smurf);
	// };

	return (
		<div className="formDiv">
			<form
				onSubmit={() => {
					console.log(smurf);
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
				<button className="submit">Submit</button>
			</form>
		</div>
	);
};

export default SmurfForm;
