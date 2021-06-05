import React from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../db/actions";

const EditeProfile = () => {
	let dispatch = useDispatch();
	return (
		<div>
			<button onClick={() => dispatch(logOut())}>logout</button>
			EditeProfile
		</div>
	);
};

export default EditeProfile;
