import React, { useState, useEffect } from "react";

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

		<>
			<Home/>
		</>
    // <p>
    //   It's <time dateTime={response}>{response}</time>
    // </p>
  );
}

export default App;