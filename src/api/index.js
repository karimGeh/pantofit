export const API_URL = "https://pantofitv0.herokuapp.com/";
export const LOCAL_API_URL = "http://localhost:8082/";

export const URL =
	process.env.NODE_ENV === "development" ? LOCAL_API_URL : API_URL;
