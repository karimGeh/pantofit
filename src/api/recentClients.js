import { API_URL, LOCAL_API_URL } from "./index";

const URL = process.env.NODE_ENV === "development" ? LOCAL_API_URL : API_URL;

let listOfRecentClients = [
	{
		name: "baderddine Grina",
		img: "https://via.placeholder.com/150",
		soldLeft: "7",
		idOfWorkout: "135",
		scanedAt: "2021-06-04 16:00:36",
	},
	{
		name: "abdelouadoud borji",
		img: "https://via.placeholder.com/150",
		soldLeft: "11",
		idOfWorkout: "133",
		scanedAt: "2021-06-04 15:59:55",
	},
	{
		name: "zineb benlamlih",
		img: "https://via.placeholder.com/150",
		soldLeft: "21",
		idOfWorkout: "127",
		scanedAt: "2021-06-04  08:33:21",
	},
	{
		name: "karim saadeldin",
		img: "https://via.placeholder.com/150",
		soldLeft: "1",
		idOfWorkout: "121",
		scanedAt: "2021-06-03  20:47:11",
	},
	{
		name: "abdelouadoud borji",
		img: "https://via.placeholder.com/150",
		soldLeft: "12",
		idOfWorkout: "89",
		scanedAt: "2021-06-03 17:28:54",
	},
	{
		name: "baderddine Grina",
		img: "https://via.placeholder.com/150",
		soldLeft: "8",
		idOfWorkout: "88",
		scanedAt: "2021-06-03 17:28:45",
	},
];

export const getRecentClient = (id) => {
	return new Promise((res, _) => res(listOfRecentClients));
};
