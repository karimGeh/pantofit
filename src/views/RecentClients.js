import React, { useEffect, useState } from "react";
import { getRecentClient } from "../api/recentClients";
import UserCard from "../components/UserCard";

import "../static/css/recentClient.scss";
const RecentClients = () => {
	const [recentClients, setRecentClients] = useState([]);

	useEffect(() => {
		getRecentClient(1).then((data) => {
			console.log(data);
			setRecentClients(data);
		});
	}, []);

	return (
		<div className='recentContainer'>
			{recentClients.map((client, index) => (
				<UserCard key={index} client={client} />
			))}
		</div>
	);
};

export default RecentClients;
