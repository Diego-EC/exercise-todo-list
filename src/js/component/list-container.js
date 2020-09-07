import React from "react";
import { Task } from "./task.js";
import { TasksCounter } from "./tasks-counter.js";
import { InputTask } from "./input-task.js";
import PropTypes from "prop-types";

export function ListContainer(props) {
	return (
		<div className="m-5">
			<InputTask />
			<Task />
			<Task />
			<Task />
			<TasksCounter />
		</div>
	);
}

ListContainer.propTypes = {
	tasks: PropTypes.array,
};