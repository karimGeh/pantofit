import React from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../db/actions";

const Login = () => {
	let dispatch = useDispatch();
	return (
		<div>
			Login
			<button onClick={() => dispatch(logIn({}))}>loginIn</button>
		</div>
	);
};

export default Login;
