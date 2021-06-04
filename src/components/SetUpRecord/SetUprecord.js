import React from "react";

import "./SetUprecord.css";

import Header from "../Header/Header";

import CardSelect from "../CardSelect/CardSelect";

import Casa from "../../img/casa.png";
import Parque from "../../img/parque.png";

const SetUprecord = ({ callbackSelectEscenario, callbackSelectPersonaje }) => {
	return (
		<div className="set-up-record">
			<Header />
			<div className="set-up-escenario">
				<h2>Selecciona un escenario</h2>
				<div className="set-up-escenarios">
					<CardSelect
						imageRoute={Casa}
						callbackSet={callbackSelectEscenario}
						id={1}
					/>
					<CardSelect
						imageRoute={Parque}
						callbackSet={callbackSelectEscenario}
						id={2}
					/>
				</div>
			</div>
		</div>
	);
};

export default SetUprecord;
