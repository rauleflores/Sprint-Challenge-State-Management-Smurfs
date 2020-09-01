import axios from "axios";

export const GET_SMURFS_BEGIN = "GET_SMURF_BEGIN";
export const GET_SMURFS_SUCCESS = "GET_SMURF";
export const GET_SMURFS_ERROR = "GET_SMURF_ERROR";
export const ADD_SMURFS_BEGIN = "ADD_SMURF_BEGIN";
export const ADD_SMURFS_SUCCESS = "ADD_SMURF_SUCCESS";
export const UPDATE_SMURFS_BEGIN = "UPDATE_SUMRFS_BEGIN";
export const UPDATE_SMURFS_SUCCESS = "UPDATE_SMURFS_SUCCESS";
export const UPDATE_SMURFS_ERROR = "UPDATE_SMURFS_ERROR";
export const DELETE_SMURF_BEGIN = "DELETE_SMURF_BEGIN";
export const DELETE_SMURF_SUCCESS = "DELETE_SMURF_SUCCESS";
export const DELETE_SMURF_ERROR = "DELETE_SMURF_ERROR";

export const getSmurfs = () => (dispatch) => {
	dispatch({ type: GET_SMURFS_BEGIN });
	axios
		.get("http://localhost:3333/smurfs")
		.then((res) => {
			console.log("getSmurf res:", res);
			console.log("getSmurf res.data:", res.data);
			dispatch({ type: GET_SMURFS_SUCCESS, payload: res.data });
		})
		.catch((err) => {
			console.log("Something went wrong:", err);
			dispatch({
				type: GET_SMURFS_ERROR,
				payload: err.response,
			});
		});
};

export const addSmurf = (newSmurf) => (dispatch) => {
	dispatch({ type: ADD_SMURFS_BEGIN });
	axios.post("http://localhost:3333/smurfs", newSmurf).then((res) => {
		console.log("addSmurf res:", res);
		console.log("addSmurf res.data:", res.data);
		dispatch({ type: ADD_SMURFS_SUCCESS, payload: res.data });
	});
};

export const updateSmurf = (updatedSmurf) => (dispatch) => {
	dispatch({ type: UPDATE_SMURFS_BEGIN });
	axios
		.post(`http://localhost:3333/smurfs/${updatedSmurf.id}`, updatedSmurf)
		.then((res) => console.log(res.data))
		.catch((err) =>
			dispatch({
				type: UPDATE_SMURFS_ERROR,
				payload: err.response,
			})
		);
};

export const deleteSmurf = (smurfToDelete) => (dispatch) => {
	dispatch({ type: DELETE_SMURF_BEGIN });
	axios
		.delete(`http://localhost:3333/smurfs/${smurfToDelete}`)
		.then((res) => {
			console.log(res.data);
			dispatch({
				type: DELETE_SMURF_SUCCESS,
				payload: res.data,
			});
		})
		.catch((err) => {
			dispatch({
				type: DELETE_SMURF_ERROR,
				payload: err.response,
			});
		});
};
