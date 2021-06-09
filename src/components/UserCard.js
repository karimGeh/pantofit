import React from "react";

import "../static/css/userCard.scss";

const UserCard = ({ client }) => {
	const { name, img, soldLeft, idOfWorkout, scanedAt } = client;

	return (
		<div className='cardContainer'>
			<img src={img} alt='profile' />
			<div className='clientInfo'>
				<h4>{name}</h4>
				<h5>SCANED : {scanedAt}</h5>
				<p>scan ID : {idOfWorkout}</p>
			</div>
			<div className='soldOfClient'>
				<h1>{soldLeft}</h1>
				<p>SOLD</p>
			</div>
		</div>
	);
};

export default UserCard;
