import React from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../db/actions";

const Bills = () => {
	let dispatch = useDispatch();
	return (
		<div>
			<button onClick={() => dispatch(logOut())}>logout</button>
			bills
		</div>
	);
};

export default Bills;
