import React from "react";

import "./CardSelect.css";
const CardSelect = ({ imageRoute, callbackSet, id }) => {
	return (
		<div className="card-select" onClick={() => callbackSet(id)}>
			<img src={imageRoute} alt={"select"} className="card-image" />
		</div>
	);
};

export default CardSelect;
