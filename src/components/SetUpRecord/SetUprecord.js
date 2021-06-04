import React, { useState } from "react";

import "./SetUprecord.css";

import Header from "../Header/Header";

import CardSelect from "../CardSelect/CardSelect";

import Casa from "../../img/casa.png";
import Parque from "../../img/parque.png";
import Chico from "../../img/nino.png";
import Chica from "../../img/nina.png";

const SetUprecord = ({ callbackSelectEscenario, callbackSelectPersonaje }) => {
	const [current, setCurrent] = useState("personajes");
	return (
		<div className="set-up-record">
			<Header />
			{current === "escenario" && (
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
			)}
			{current === "personajes" && (
				<div className="set-up-escenario">
					<h2>Selecciona un personaje</h2>
					<div className="set-up-escenarios">
						<CardSelect
							imageRoute={Chico}
							callbackSet={callbackSelectPersonaje}
							id={1}
						/>
						<CardSelect
							imageRoute={Chica}
							callbackSet={callbackSelectPersonaje}
							id={2}
						/>
					</div>
				</div>
			)}
		</div>
	);
};

export default SetUprecord;
