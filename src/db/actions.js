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

export const changeUser = (key, value) => {
	return {
		type: types.UPDATE_USER,
		payload: {
			key,
			value,
		},
	};
};

export const resetImage = (image) => {
	return {
		type: types.RESET_IMAGE,
		payload: {
			image,
		},
	};
};
