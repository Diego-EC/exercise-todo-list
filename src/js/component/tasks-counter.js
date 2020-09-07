import React from "react";
import PropTypes from "prop-types";

export function TasksCounter(props) {
	return (
		<div className="card tasks-counter">{props.tasksCount} item left</div>
	);
}

TasksCounter.propTypes = {
	tasksCount: PropTypes.number
};
