import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { resetImage } from "./db/actions";
import Default from "./layouts";
import { Login, RecentClients, EditProfile, Bills } from "./views";

import Admin from "./controllers/Admin";
import LogedOut from "./controllers/LogedOut";
import Logo from "./static/img/city.png";

import "./static/css/index.scss";

const App = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(resetImage(Logo));
	}, [dispatch]);
	return (
		<Router>
			<Switch>
				<Route path='/login'>
					<LogedOut>
						<Login />
					</LogedOut>
				</Route>
				<Route path='/facture'>
					<Admin>
						<Default>
							<Bills />
						</Default>
					</Admin>
				</Route>
				<Route path='/profile'>
					<Admin>
						<Default>
							<EditProfile />
						</Default>
					</Admin>
				</Route>
				<Route path='/'>
					<Admin>
						<Default>
							<RecentClients />
						</Default>
					</Admin>
				</Route>
			</Switch>
		</Router>
	);
};

export default App;
