//import React from "react";

import { Header } from "./header.js";
import { InputTask } from "./input-task.js";
import { Task } from "./task.js";
import { TasksCounter } from "./tasks-counter.js";
import React, { useState, useEffect } from "react";
// https://stackoverflow.com/questions/57341541/removing-object-from-array-using-hooks-usestate
//create your first component
export function Home() {
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

	/*useEffect(() => {
		console.log("UPDATE");
	});*/

	return (
		<div className="wrapper centered-on-window bg-light">
			<div>
				<Header />
				<input type="text" />
				<input
					type="button"
					value="Save"
					onClick={() =>
						updateTasks(["eat", "sleep", "clean", "sleep", "code"])
					}
				/>
				<div>{tasksMap}</div>
				<TasksCounter tasksCount={tasks.length} />
			</div>
		</div>
	);
}
