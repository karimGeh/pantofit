import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { Provider } from "react-redux";
import store from "./db";
// import reportWebVitals from './reportWebVitals';

function handleChange() {
	let state = store.getState();
	localStorage.setItem("state", JSON.stringify(state));
	// console.log(state);
}

store.subscribe(handleChange);

// process.env.DEV_MODE = true;

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
