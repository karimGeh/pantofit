import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useRouteMatch } from "react-router-dom";

import { logOut } from "../db/actions";

import "../static/css/navbar.scss";

const NavBar = () => {
	const { name, code } = useSelector((state) => state.user);
	const { path } = useRouteMatch();
	// console.log(state);
	// const { name, code } = state;
	let dispatch = useDispatch();
	return (
		<div className='wrapper'>
			<div className='profile'>
				<img src='https://via.placeholder.com/150' alt='logo' />
				<h2>{name}</h2>
				<h4>#{code}</h4>
			</div>
			<div className='nav-container'>
				<ul>
					<li>
						<Link to='/'>
							<button className={path === "/" ? "pink" : ""}>
								<i className='fas fa-users'></i>
								<span>recent customers</span>
							</button>
						</Link>
					</li>
					<li>
						<Link to='/facture'>
							<button className={path === "/facture" ? "pink" : ""}>
								<i className='fas fa-file-invoice-dollar'></i>
								<span>factures</span>
							</button>
						</Link>
					</li>
					<li>
						<Link to='/profile'>
							<button className={path === "/profile" ? "pink" : ""}>
								<i className='fas fa-user'></i>
								<span>edit profile</span>
							</button>
						</Link>
					</li>
					<li>
						<button onClick={() => dispatch(logOut())}>
							<i className='fas fa-sign-out-alt'></i>
							<span>logout</span>
						</button>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default NavBar;
