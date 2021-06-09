import { API_URL, LOCAL_API_URL } from "./index";

const URL = process.env.NODE_ENV === "development" ? LOCAL_API_URL : API_URL;

export const login = (
	email,
	password,
	image = "https://via.placeholder.com/150",
) => {
	// return fetch(
	// 	URL +
	// 		`salles/search/findByAddressmailAndPassword?email=${email}&password=${password}`,
	// 	{
	// 		"Access-Control-Allow-Origin": "*",
	// 		"Content-type": "application/json",
	// 	},
	// ).then((res) => res.json());
	return new Promise((res, rej) => {
		res({
			name: "city",
			code: "35413",
			password,
			coords: [32.1, 35.5],
			email,
			location: "mohammedia,maroc",
			image,
		});
	});
};
