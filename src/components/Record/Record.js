import React from "react";
import { useReactMediaRecorder } from "react-media-recorder";

import "./Record.css";

import Canvas from "../Canvas/Canvas";

const Record = () => {
	const { status, startRecording, stopRecording, mediaBlobUrl } =
		useReactMediaRecorder({ screen: true });

	return (
		<div className="preview">
			<div className="preview-container">
				<Canvas />
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
