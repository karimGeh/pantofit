import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../api/authentication";
import { logIn } from "../db/actions";

import "../static/css/login.scss";
import Logo from "../static/img/logo.5x.png";
import userImage from "../static/img/city.png";

const Login = () => {
	let dispatch = useDispatch();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = (e) => {
		login(email, password, userImage).then((data) => {
			// console.log(data);
			if (data) {
				dispatch(logIn(data));
			}
		});
		// dispatch(logIn({}));
	};

	return (
		<div className='login-container'>
			<img src={Logo} alt='logo' />
			<input
				className='login-input'
				type='text'
				name='email'
				id=''
				placeholder='Email ...'
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<input
				className='login-input'
				type='password'
				name='password'
				id=''
				placeholder='Password ...'
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<button className='login-submit' onClick={handleLogin}>
				login
			</button>
		</div>
	);
};

export default Login;
