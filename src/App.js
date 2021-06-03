import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './components/Home/Home'

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

  return (

		<Router>
      <Switch>
        <Route path="/iniciar">
            <div>hola</div>
        </Route>
        <Route path="/">
            <Home />
        </Route>
      </Switch>
		</Router>
    // <p>
    //   It's <time dateTime={response}>{response}</time>
    // </p>
  );
}

export default App;