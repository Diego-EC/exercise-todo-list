import React, { useState, useEffect } from "react";

import { Header } from "./header.js";
import { InputTask } from "./input-task.js";
import { Task } from "./task.js";
import { TasksCounter } from "./tasks-counter.js";
import { DeleteButton } from "./delete-button.js";

// core of the app
export function Home() {
	const USER_NAME = "diego";
	const USER_DOES_NOT_EXIST = 404;
	const NO_TASKS_MESSAGE = "No tasks, add a task";
	const [tasks, updateTasks] = useState([]);

	const deleteTask = index => {
		let filteredTasks = tasks.filter(function(task, idx) {
			return idx != index;
		});
		updateTasksFetch(filteredTasks);
	};

	const addTask = e => {
		const newTasks = [...tasks, e.target.value];
		updateTasksFetch(newTasks);
	};

	let tasksMap = tasks.map((task, index) => {
		return (
			<Task
				key={index}
				index={index}
				label={task}
				deleteTask={deleteTask}
			/>
		);
	});
	if (tasksMap.length == 0) {
		tasksMap = <div className="card task">{NO_TASKS_MESSAGE}</div>;
	}

	useEffect(() => {
		readTasks();
	}, []);

	return (
		<div className="wrapper centered-on-window bg-light">
			<div className="container">
				<Header />
				<InputTask addTask={addTask} />
				<div>{tasksMap}</div>
				<TasksCounter tasksCount={tasks.length} />
				<DeleteButton deleteTasks={deleteTasks} />
			</div>
		</div>
	);

	function readTasksFetch() {
		console.log("readTasks");
		fetch("https://assets.breatheco.de/apis/fake/todos/user/" + USER_NAME)
			.then(response => {
				if (response.ok) {
					console.log("  readTasks OK");
				} else {
					console.log("  readTasks ERR");
					if (response.status == USER_DOES_NOT_EXIST) {
						createUser();
					} else {
						throw Error(response);
					}
				}
				return response.json();
			})
			.then(json => {
				//here is were your code should start after the fetch finishes
				console.log(json); //this will print on the console the exact object received from the server
				let jsonMap = json.map((task, index) => {
					console.log(typeof task.label);
					return task.label;
				});
				updateTasks(jsonMap);
			})
			.catch(error => console.error("Error:", error));
	}

	function deleteTasksFetch() {
		console.log("deleteTasks");
		fetch("https://assets.breatheco.de/apis/fake/todos/user/" + USER_NAME, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(res => res.json())
			.then(response => {
				console.log("Success:", JSON.stringify(response));
				updateTasksFetch([]);
			})
			.catch(error => console.error("Error:", error));
	}

	function updateTasksFetch(newTasks) {
		console.log("updateTaskFetch");

		let arrUpdate = newTasks.map((task, index) => {
			return { label: task, done: false };
		});

		fetch("https://assets.breatheco.de/apis/fake/todos/user/" + USER_NAME, {
			method: "PUT",
			body: JSON.stringify(arrUpdate),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(res => res.json())
			.then(response => {
				console.log("Success:", JSON.stringify(response));
				updateTasks(newTasks);
			})
			.catch(error => console.error("Error:", error));
	}

	function createUserFetch() {
		console.log("createUser");
		fetch("https://assets.breatheco.de/apis/fake/todos/user/" + USER_NAME, {
			method: "POST",
			body: JSON.stringify([]),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(response => {
				if (response.ok) {
					console.log("  createUser OK");
				} else {
					console.log("  createUser ERR");
					throw Error(response.statusText);
				}
				console.log(response);
				return response.json();
			})
			.then(json => {
				//here is were your code should start after the fetch finishes
				console.log(json); //this will print on the console the exact object received from the server
				readTasks();
			})
			.catch(error => {
				//error handling
				console.log(error);
			});
	}
}
