import React from "react";

import "./SetUprecord.css";

import Header from "../Header/Header";
import { useReactMediaRecorder } from "react-media-recorder";

const SetUprecord = () => {
	const { status, startRecording, stopRecording, mediaBlobUrl } =
		useReactMediaRecorder({ screen: true });
	return (
		<div className="set-up-record">
			<Header />
			Selecciona un escenario
			<div>
				<p>{status}</p>
				<button onClick={startRecording}>Start Recording</button>
				<button onClick={stopRecording}>Stop Recording</button>
				<video src={mediaBlobUrl} controls autoplay loop />
			</div>
		</div>
	);
};

export default SetUprecord;
