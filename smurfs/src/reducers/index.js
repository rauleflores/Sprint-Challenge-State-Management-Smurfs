import {
	GET_SMURFS_BEGIN,
	GET_SMURFS_SUCCESS,
	GET_SMURFS_ERROR,
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
		default:
			return state;
	}
};

export const getSmurfs = (state) => state.smurfs;
export const getSmurfsBegin = (state) => state.pending;
export const getSmurfsError = (state) => state.error;
