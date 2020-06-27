import React, { useEffect } from "react";
import { getSmurfs } from "../actions";
import { connect } from "react-redux";

const Smurfs = ({ getSmurfs, smurfs, isFetching, error }) => {
	// useEffect(() => {
	// 	getSmurfs();
	// }, [getSmurfs]);

	return (
		<>
			<div>
				<button onClick={getSmurfs}>click</button>
			</div>
			<div>
				{smurfs.map((smurf) => {
					return (
						<>
							<div>
								<p>{smurf.name}</p>
								<span>{smurf.age}</span>
								<div></div>
								<span>{smurf.height}</span>
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

export default connect(mapStateToProps, { getSmurfs })(Smurfs);
