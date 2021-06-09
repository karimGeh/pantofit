import React from "react";

import "../static/css/billCard.scss";

const BillCard = ({ bill }) => {
	const { number, date, type, link } = bill;

	return (
		<tr className='billCard'>
			<td>{number}</td>
			<td>{date}</td>
			<td>{type}</td>
			<td>
				<a href={link} target='_blank' rel='noreferrer'>
					link
				</a>
			</td>
		</tr>
	);
};

export default BillCard;
