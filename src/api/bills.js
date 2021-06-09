import { URL } from "./index";

let link =
	"https://docs.google.com/spreadsheets/d/1379zc1x4kVrUhyneWBBsp1q8iC0dMTRuyiLZZ7LT8dU/edit?usp=sharing";

const listOfBills = [
	{
		number: "0120-2021",
		date: "2021-05-31",
		type: "csv",
		link,
	},
	{
		number: "0101-2021",
		date: "2021-04-30",
		type: "csv",
		link,
	},
	{
		number: "0088-2021",
		date: "2021-03-31",
		type: "csv",
		link,
	},
	{
		number: "0057-2021",
		date: "2021-02-28",
		type: "csv",
		link,
	},
	{
		number: "0023-2021",
		date: "2021-01-31",
		type: "csv",
		link,
	},
	{
		number: "1533-2020",
		date: "2021-05-31",
		type: "csv",
		link,
	},
];

export const getAllAvailableBills = (id) => {
	return new Promise((res, _) => res(listOfBills));
};
