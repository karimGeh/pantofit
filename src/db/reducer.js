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
		case types.UPDATE_USER:
			const { key, value } = action.payload;
			return {
				...state,
				user: {
					...state.user,
					[key]: value,
				},
			};
		case types.RESET_IMAGE:
			return {
				...state,
				user: {
					...state.user,
					image: action.payload.image,
				},
			};
		default:
			return state;
	}
};

export default reducer;
