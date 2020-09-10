import React, { useState, useEffect } from "react";

import { Header } from "./header.js";
import { InputTask } from "./input-task.js";
import { Task } from "./task.js";
import { TasksCounter } from "./tasks-counter.js";
import { DeleteButton } from "./delete-button.js";

// core of the app
export function Home() {
	const NO_TASKS_MESSAGE = "No tasks, add a task";
	const [tasks, updateTasks] = useState([]);

	let arr = [
		{ label: "Make the bed", done: false },
		{ label: "Walk the dog", done: false },
		{ label: "Do the replits", done: false },
		{ label: "lol", done: false }
	];

	const deleteTask = index => {
		let filteredTasks = tasks.filter(function(task, idx) {
			return idx != index;
		});
		updateTaskFetch(filteredTasks);
		//updateTasks(filteredTasks);
	};

	const addTask = e => {
		const newTasks = [...tasks, e.target.value];
		updateTaskFetch(newTasks);

		//		updateTasks(newTasks);
	};

	console.log("cucu");
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
		//deleteTaskFetch();
		readTasks();
		//diegoRead();
		//diego();
		//diegoCreate();
		//updateTaskFetch();
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

	// read, update, delete, create
	// OK
	async function readTasks() {
		console.log("readTasks");
		fetch("https://assets.breatheco.de/apis/fake/todos/user/alesanchezr")
			.then(response => {
				if (response.ok) {
					console.log("Images Loaded!!");
				} else {
					console.log("Uh-oh something went wrong");
					// TODO: aquí poner crear usuario
					console.log(response.status);
					console.log(response.statusText);
					if (response.status == 404) {
						diegoCreate();
					}
				}
				console.log(response);
				return response.json();
			})
			.then(json => {
				//here is were your code should start after the fetch finishes
				console.log(json); //this will print on the console the exact object received from the server
				let jsonMap = json.map((task, index) => {
					console.log(typeof task.label);
					return task.label;
				});
				console.log("-> jsonMap");
				console.log(jsonMap);
				updateTasks(jsonMap);
			});
	}

	async function readTasksDiego() {
		console.log("readTasksDiego");
		fetch("https://assets.breatheco.de/apis/fake/todos/user/diego")
			.then(response => {
				if (response.ok) {
					console.log("Images Loaded!!");
				} else {
					console.log("Uh-oh something went wrong");
				}
				console.log(response);
				return response.json();
			})
			.then(json => {
				//here is were your code should start after the fetch finishes
				console.log(json); //this will print on the console the exact object received from the server
				let jsonMap = json.map((task, index) => {
					console.log(typeof task.label);
					return task.label;
				});
				console.log("-> jsonMap");
				console.log(jsonMap);
				updateTasks(jsonMap);
			});
	}

	/* ok */
	async function deleteTasks() {
		console.log("deleteTasks");
		fetch("https://assets.breatheco.de/apis/fake/todos/user/alesanchezr", {
			method: "DELETE", // or 'POST'
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(res => res.json())
			.then(response => console.log("Success:", JSON.stringify(response)))
			.catch(error => console.error("Error:", error));
	}

	/* OK */
	async function updateTaskFetch(newTasks) {
		console.log("updateTaskFetch");

		let arrUpdate = newTasks.map((task, index) => {
			return { label: task, done: false };
		});

		console.log(arrUpdate);

		fetch("https://assets.breatheco.de/apis/fake/todos/user/alesanchezr", {
			method: "PUT", // or 'POST'
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

	/* ok */
	function diegoCreate() {
		console.log("diego");
		fetch("https://assets.breatheco.de/apis/fake/todos/user/alesanchezr", {
			method: "POST",
			body: JSON.stringify(arr),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(response => {
				if (response.ok) {
					console.log("Images Loaded!!");
				} else {
					console.log("Uh-oh something went wrong");
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

	function diegoRead() {
		console.log("diegoRead");
		fetch("https://assets.breatheco.de/apis/fake/todos/user/diego", {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(response => {
				if (response.ok) {
					console.log("Images Loaded!!");
				} else {
					console.log("Uh-oh something went wrong");
				}
				console.log(response);
				return response.json();
			})
			.then(json => {
				//here is were your code should start after the fetch finishes
				console.log(json); //this will print on the console the exact object received from the server
				let jsonMap = json.map((task, index) => {
					console.log(typeof task.label);
					return task.label;
				});
				console.log("-> jsonMap");
				console.log(jsonMap);
				updateTasks(jsonMap);
			});
	}
}
