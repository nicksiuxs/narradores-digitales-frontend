import React from "react";
import { useReactMediaRecorder } from "react-media-recorder";

const Record = () => {
	const { status, startRecording, stopRecording, mediaBlobUrl } =
		useReactMediaRecorder({ screen: true });
	return (
		<div>
			<p>{status}</p>
			<button onClick={startRecording}>Start Recording</button>
			<button onClick={stopRecording}>Stop Recording</button>
			<video src={mediaBlobUrl} controls autoplay loop />
		</div>
	);
};

export default Record;
