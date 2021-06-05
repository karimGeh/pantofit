import React from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../db/actions";

const RecentClients = () => {
	let dispatch = useDispatch();
	return (
		<div>
			<button onClick={() => dispatch(logOut())}>logout</button>
			<h1>RecentClients</h1>
		</div>
	);
};

export default RecentClients;
