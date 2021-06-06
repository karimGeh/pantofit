import React from "react";
import NavBar from "../components/NavBar";

import "../static/css/default.scss";

const Default = ({ children }) => {
	return (
		<div className='global-container'>
			<NavBar />
			{children}
		</div>
	);
};

export default Default;
