import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";

const LogedOut = ({ children }) => {
	let isLogged = useSelector((state) => state.isLogged);
	return !isLogged ? children : <Redirect to='/' />;
};

export default LogedOut;
