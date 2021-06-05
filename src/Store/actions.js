import * as types from "./actionTypes";

export const logIn = (obj) => {
	return {
		type: types.LOGIN,
		payload: {
			user: obj,
		},
	};
};

export const logOut = () => {
	return {
		type: types.LOGOUT,
		payload: {},
	};
};
