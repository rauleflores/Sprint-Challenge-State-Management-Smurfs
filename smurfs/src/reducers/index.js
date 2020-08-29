import {
	GET_SMURFS_BEGIN,
	GET_SMURFS_SUCCESS,
	GET_SMURFS_ERROR,
	ADD_SMURFS_BEGIN,
	ADD_SMURFS_SUCCESS,
	ADD_SMURFS_ERROR,
	DELETE_SMURF_BEGIN,
	DELETE_SMURF_SUCCESS,
	DELETE_SMURF_ERROR,
} from "../actions";

const initialState = {
	pending: false,
	smurfs: [],
	error: null,
};

export const reducer = (state = initialState, action) => {
	console.log(state, action);
	switch (action.type) {
		case GET_SMURFS_BEGIN:
			return {
				...state,
				pending: true,
				error: null,
			};
		case GET_SMURFS_SUCCESS:
			return {
				...state,
				pending: false,
				smurfs: action.payload,
			};
		case GET_SMURFS_ERROR:
			return {
				...state,
				pending: false,
				error: action.error,
				smurfs: [],
			};
		case ADD_SMURFS_BEGIN:
			return {
				...state,
				pending: true,
				error: null,
			};
		case ADD_SMURFS_SUCCESS:
			return {
				...state,
				pending: false,
				error: null,
				smurfs: [...state.smurfs, action.payload],
			};
		case DELETE_SMURF_BEGIN:
			return {
				...state,
				pending: true,
				err: null,
			};
		case DELETE_SMURF_SUCCESS:
			return {
				...state,
				pending: false,
				smurfs: action.payload,
			};
		default:
			return state;
	}
};

// export const getSmurfs = (state) => state.smurfs;
// export const getSmurfsBegin = (state) => state.pending;
// export const getSmurfsError = (state) => state.error;
