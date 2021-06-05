import * as types from "./actionTypes";

const savedState = localStorage.getItem("state");

const defaultState = savedState
	? JSON.parse(savedState)
	: {
			isLogged: false,
	  };

const reducer = (state = defaultState, action) => {
	switch (action.type) {
		case types.LOGIN:
			return {
				...state,
				user: action.payload.user,
				isLogged: true,
			};

		case types.LOGOUT:
			return {
				...state,
				user: undefined,
				isLogged: false,
			};
		default:
			return state;
	}
};

export default reducer;
