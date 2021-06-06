import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Login, RecentClients, EditeProfile, Bills } from "./views";
import Default from "./layouts";

import Admin from "./controllers/Admin";
import LogedOut from "./controllers/LogedOut";

import "./static/css/index.scss";

const App = () => {
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
							<EditeProfile />
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
