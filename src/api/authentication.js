import { API_URL, LOCAL_API_URL } from "./index";

const URL = process.env.NODE_ENV === "development" ? LOCAL_API_URL : API_URL;

export const login = (email, password) => {
	return fetch(
		URL +
			`salles/search/findByAddressmailAndPassword?email=${email}&password=${password}`,
		{
			"Access-Control-Allow-Origin": "*",
			"Content-type": "application/json",
		},
	).then((res) => res.json());
};