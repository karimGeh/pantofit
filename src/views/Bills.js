import React, { useEffect, useState } from "react";
import { getAllAvailableBills } from "../api/bills";

import BillCard from "../components/BillCard";
import Logo from "../static/img/logo.5x.png";

import "../static/css/availableBills.scss";

const Bills = () => {
	const [availableBills, setAvailableBills] = useState([]);
	const [refresh, setRefresh] = useState(false);

	useEffect(() => {
		getAllAvailableBills(1).then((data) => {
			// console.log(data);
			setAvailableBills(data);
		});
	}, [refresh]);
	return (
		<div className='billContainer'>
			<nav className='containerNav'>
				<img src={Logo} alt='logo' />
				<button onClick={() => setRefresh(!refresh)}>refresh</button>
			</nav>

			<h3 className='title'>Les Factures Disponible :</h3>
			<table className='tableOfBills'>
				<tr className='tableHead'>
					<th>N°</th>
					<th>date</th>
					<th>type</th>
					<th>link</th>
				</tr>
				{availableBills.map((bill, index) => (
					<BillCard key={index} bill={bill} />
				))}
			</table>
		</div>
	);
};

export default Bills;
