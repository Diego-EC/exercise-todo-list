import React from "react";
import { Task } from "./task.js";
import { TasksCounter } from "./tasks-counter.js";
/* 
* no borro este componente por que quería hacer que otro
* componente formatease la lista de tareas 
*/
import { InputTask } from "./input-task.js";
import PropTypes from "prop-types";

export function ListContainer(props) {
	/*return (
		<div className="m-5">
			<InputTask />
			<Task />
			<Task />
			<Task />
			<TasksCounter />
		</div>
    );*/
	/*
	const NO_TASKS_MESSAGE = "No tasks, add a task";
	let tasksMap = tasks.map((task, index) => {
		<Task
			key={index}
			index={index}
			description={task}
			deleteTask={deleteTask}
		/>;
	});
	if (tasksMap.length == 0) {
		tasksMap = <div className="card task">{NO_TASKS_MESSAGE}</div>;
	}
    return tasksMap;
    */
}

ListContainer.propTypes = {
	tasks: PropTypes.array
};
