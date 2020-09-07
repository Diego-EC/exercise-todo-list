import React, { useState, useEffect } from "react";

import { Header } from "./header.js";
import { InputTask } from "./input-task.js";
import { Task } from "./task.js";
import { TasksCounter } from "./tasks-counter.js";

// core of the app
export function Home() {
	const NO_TASKS_MESSAGE = "No tasks, add a task";
	const [tasks, updateTasks] = useState([
		"eat",
		"sleep",
		"eat",
		"clean",
		"eat"
	]);

	const deleteTask = index => {
		let filteredTasks = tasks.filter(function(task, idx) {
			return idx != index;
		});
		updateTasks(filteredTasks);
	};

	const addTask = e => {
		const newTasks = [...tasks, e.target.value];
		updateTasks(newTasks);
	};

	let tasksMap = tasks.map((task, index) => {
		return (
			<Task
				key={index}
				index={index}
				description={task}
				deleteTask={deleteTask}
			/>
		);
	});
	if (tasksMap.length == 0) {
		tasksMap = <div className="card task">{NO_TASKS_MESSAGE}</div>;
	}

	return (
		<div className="wrapper centered-on-window bg-light">
			<div className="container">
				<Header />
				<InputTask addTask={addTask} />
				<div>{tasksMap}</div>
				<TasksCounter tasksCount={tasks.length} />
				<div className="task align-bottom">bottom</div>
			</div>
		</div>
	);
}
