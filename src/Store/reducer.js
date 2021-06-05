import * as types from "./actionTypes";

const reducer = (state = {}, action) => {
	switch (action.type) {
		case types.LOGIN:
			return {
				...state,
				user: action.payload.user,
			};

		default:
			return {
				...state,
				user: undefined,
			};
	}
};

export default reducer;
