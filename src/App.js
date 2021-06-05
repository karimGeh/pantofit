import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login, RecentClients, EditeProfile, Bills } from "./views";

import Admin from "./controllers/Admin";
import LogedOut from "./controllers/LogedOut";

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
						<Bills />
					</Admin>
				</Route>
				<Route path='/profile'>
					<Admin>
						<EditeProfile />
					</Admin>
				</Route>
				<Route path='/'>
					<Admin>
						<RecentClients />
					</Admin>
				</Route>
			</Switch>
		</Router>
	);
};

export default App;
