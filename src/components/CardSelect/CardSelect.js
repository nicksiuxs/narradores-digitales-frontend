import React from "react";

import "./CardSelect.css";
const CardSelect = ({ imageRoute, callbackSet, callBackPage, page, id }) => {
	return (
		<div
			className="card-select"
			onClick={() => {
				callbackSet(id);
				callBackPage(page);
			}}
		>
			<img src={imageRoute} alt={"select"} className="card-image" />
		</div>
	);
};

export default CardSelect;
