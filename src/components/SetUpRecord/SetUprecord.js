import React, { useState } from "react";

import "./SetUprecord.css";

import Header from "../Header/Header";

import CardSelect from "../CardSelect/CardSelect";

import Record from "../Record/Record";

import Casa from "../../img/casa.png";
import Parque from "../../img/parque.png";
import Chico from "../../img/nino.png";
import Chica from "../../img/nina.png";

const SetUprecord = ({ callbackSelectEscenario, callbackSelectPersonaje }) => {
	const [current, setCurrent] = useState("escenario");

	const setPage = (page) => {
		setCurrent(page);
	};

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
							callBackPage={setPage}
							page={"personajes"}
							id={1}
						/>
						<CardSelect
							imageRoute={Parque}
							callbackSet={callbackSelectEscenario}
							callBackPage={setPage}
							page={"personajes"}
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
							callBackPage={setPage}
							page={"record"}
							id={1}
						/>
						<CardSelect
							imageRoute={Chica}
							callbackSet={callbackSelectPersonaje}
							callBackPage={setPage}
							page={"record"}
							id={2}
						/>
					</div>
				</div>
			)}

			{current === "record" && (
				<div className="set-up-escenario">
					<Record background={1} />
				</div>
			)}
		</div>
	);
};

export default SetUprecord;
