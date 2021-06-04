import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./components/Home/Home";
import SetUprecord from "./components/SetUpRecord/SetUprecord";

// import socketIOClient from "socket.io-client";
// const ENDPOINT = "http://127.0.0.1:4001";

function App() {
	// const [response, setResponse] = useState("");

	// useEffect(() => {
	//   const socket = socketIOClient(ENDPOINT);
	//   socket.on("data", data => {
	// 		console.log(data)
	//     setResponse(data);
	//   });
	// }, []);

	const setEscenario = (data) => {
		console.log("escenario", data);
	};

	const setPersonaje = (data) => {
		console.log("personaje", data);
	};

	return (
		<Router>
			<Switch>
				<Route path="/iniciar">
					<SetUprecord callbackSelectEscenario={setEscenario} />
				</Route>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
