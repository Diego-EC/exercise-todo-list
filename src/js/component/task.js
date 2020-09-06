import React from "react";
import PropTypes from "prop-types";

export function Task(props) {
	const deleteTask = () => {
		console.log("lol");
		console.log(props.description);
		console.log(props.index);
		props.deleteTask(props.index);
	};
	return (
		<div className="card">
			{props.description}
			{"   "}
			<input type="button" value="Delete" onClick={deleteTask} />
		</div>
	);
}

Task.propTypes = {
	index: PropTypes.number,
	description: PropTypes.string,
	deleteTask: PropTypes.func
};
