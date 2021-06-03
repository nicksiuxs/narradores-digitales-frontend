import React from "react";

import { Link } from "react-router-dom";

import "./Home.css";

const Home = () => {
	return (
		<div className="home">
			<div className="home-card">
				<h1>Narradores Digitales</h1>
				<Link to="/iniciar">
					<button>Iniciar grabación</button>
				</Link>
			</div>
		</div>
	);
};

export default Home;
