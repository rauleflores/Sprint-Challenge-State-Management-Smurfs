import React, { useEffect } from "react";
import { getSmurfs, updateSmurf, deleteSmurf } from "../actions";
import { connect } from "react-redux";

import "./Smurf.css";

const Smurfs = ({
	getSmurfs,
	updateSmurf,
	deleteSmurf,
	smurfs,
	pending,
	error,
}) => {
	useEffect(() => {
		getSmurfs();
	}, [getSmurfs]);

	if (pending) {
		return <h2>Loading...</h2>;
	}

	return (
		<>
			<div>
				{smurfs.map((smurf) => {
					return (
						<>
							<div className="smurfDiv">
								<div>
									<p>{smurf.name}</p>
									<span>{smurf.age}</span>
									<br />
									<span>{smurf.height}</span>
								</div>
								<div className="smurfButtons">
									<button
										onClick={() => {
											console.log(smurf);
										}}
									>
										Edit
									</button>
									<button
										onClick={() => {
											console.log(smurf);
											deleteSmurf(smurf.id);
										}}
									>
										Delete
									</button>
								</div>
							</div>
						</>
					);
				})}
			</div>
		</>
	);
};

const mapStateToProps = (state) => {
	console.log("Smurfs state:", state);
	return {
		smurfs: state.smurfs,
		pending: state.pending,
		error: state.error,
	};
};

export default connect(mapStateToProps, {
	getSmurfs,
	updateSmurf,
	deleteSmurf,
})(Smurfs);
