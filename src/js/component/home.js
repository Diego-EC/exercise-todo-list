//import React from "react";

import { Header } from "./header.js";
import { ListContainer } from "./list-container.js";
import { Task } from "./task.js";
import { InputTask } from "./input-task.js";
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
		console.log("deleteTask");
		console.log(index);
		/*
		let temp = tasks;
		temp.splice(index, 1);
		updateTasks(temp);
        */

		let bigCities = tasks.filter(function(el, i) {
			console.log("index");
			console.log(i);
			return i != index;
		});
		updateTasks(bigCities);
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
		/*
		<div className="wrapper centered-on-window bg-light">
			<div className="contaier">
				<div className="flex-column">
					<Header />
					<ListContainer />
				</div>
			</div>
        </div>
        */
		<div>
			<input type="text" />
			<input
				type="button"
				value="Save"
				onClick={() => updateTasks(["eat", "sleep", "eat", "sleep"])}
			/>
			<div>{tasksMap}</div>
		</div>
	);
}
