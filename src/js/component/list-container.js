import React from "react";
import { Task } from "./task.js";
import { TasksCounter } from "./tasks-counter.js";
import { InputTask } from "./input-task.js";

export function ListContainer() {
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
