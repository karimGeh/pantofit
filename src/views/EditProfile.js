import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeUser } from "../db/actions";

import "../static/css/editeProfile.scss";

const EditProfile = () => {
	const user = useSelector((state) => state.user);
	const [localUser, setLocalUSer] = useState({
		name: "",
		email: "",
		password: "",
		location: "",
		image: "",
	});

	const fileRef = useRef();
	let dispatch = useDispatch();
	let { name, email, password, location, image } = localUser;

	useEffect(() => {
		if (user) {
			setLocalUSer({ ...user });
		}
	}, [user]);

	const handleSubmit = (e) => {
		e.preventDefault();
		Object.keys(localUser).map((key) =>
			dispatch(changeUser(key, localUser[key])),
		);
	};

	const changeHandler = (e) => {
		e.preventDefault();
		setLocalUSer({
			...localUser,
			image: URL.createObjectURL(e.target.files[0]),
		});
	};
	const clickHandler = (e) => {
		e.preventDefault();
		fileRef.current.click();
	};

	const handleChange = (key) => (event) =>
		setLocalUSer({
			...localUser,
			[key]: event.target.value,
		});

	return (
		<div className='editContainer'>
			<form onSubmit={handleSubmit}>
				<div className='imgContainer'>
					<img src={image} alt='' />
					<button onClick={clickHandler} type='file' className='editImg'>
						<i className='fas fa-camera'></i>
					</button>
					<input
						type='file'
						ref={fileRef}
						id='fileBtn'
						onChange={changeHandler}
						value=''
						style={{ display: "none" }}
					/>
				</div>
				<input
					type='text'
					id='name'
					name='name'
					value={name}
					onChange={handleChange("name")}
				/>
				<input
					type='email'
					id='email'
					name='email'
					value={email}
					onChange={handleChange("email")}
				/>
				<input
					type='password'
					id='password'
					name='password'
					value={password}
					onChange={handleChange("password")}
				/>
				<input
					type='text'
					id='location'
					name='location'
					value={location}
					onChange={handleChange("location")}
				/>
				<button type='submit'>Save</button>
			</form>
		</div>
	);
};

export default EditProfile;
