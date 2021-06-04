import React from "react";
import { useReactMediaRecorder } from "react-media-recorder";

import Casa from "../../img/casa.png";
import Parque from "../../img/parque.png";
import Chico from "../../img/nino.png";
import Chica from "../../img/nina.png";

import "./Record.css";

import Canvas from "../Canvas/Canvas";

const Record = ({ data }) => {
	console.log(data);
	const { status, startRecording, stopRecording, mediaBlobUrl } =
		useReactMediaRecorder({ screen: true });

	const handleCharacter = (id) => {
		switch (id) {
			case 1:
				return Chico;
			case 2:
				return Chica;
			default:
				return "";
		}
	};

	const handleEnviroment = (id) => {
		switch (id) {
			case 1:
				return Casa;
			case 2:
				return Parque;
			default:
				return "";
		}
	};

	return (
		<div className="preview">
			<div className="preview-container">
				<div
					className="image-preview"
					style={{
						backgroundImage: `url(${handleEnviroment(data.escenario)})`,
					}}
				>
					<div
						style={{
							backgroundImage: `url(${handleCharacter(data.personaje)})`,
						}}
						className="personaje"
						alt="personaje"
					></div>
				</div>
				<div className="preview-buttons">
					<button onClick={startRecording}>Play</button>
					<button onClick={stopRecording}>Stop</button>
				</div>
			</div>
			<video
				src={mediaBlobUrl}
				controls
				autoPlay
				loop
				height={500}
				width={600}
			/>
		</div>
	);
};

export default Record;
