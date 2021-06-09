import React, { useEffect, useState } from "react";
import { getRecentClient } from "../api/recentClients";

import UserCard from "../components/UserCard";
import Logo from "../static/img/logo.5x.png";

import "../static/css/recentClient.scss";
const RecentClients = () => {
	const [recentClients, setRecentClients] = useState([]);
	const [refresh, setRefresh] = useState(false);

	useEffect(() => {
		getRecentClient(1).then((data) => {
			// console.log(data);
			setRecentClients(data);
		});
	}, [refresh]);

	return (
		<div className='recentContainer'>
			<nav className='containerNav'>
				<img src={Logo} alt='logo' />
				<button onClick={() => setRefresh(!refresh)}>refresh</button>
			</nav>
			{recentClients.map((client, index) => (
				<UserCard key={index} client={client} />
			))}
		</div>
	);
};

export default RecentClients;
