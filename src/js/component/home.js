import React, { useState, useEffect } from "react";

import { Header } from "./header.js";
import { InputTask } from "./input-task.js";
import { Task } from "./task.js";
import { TasksCounter } from "./tasks-counter.js";
import { func } from "prop-types";

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
	//let tasksMap = [];
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
	console.log("-> tasksMap");
	console.log(tasksMap);
	// Fetch
	useEffect(() => {
		readTasks();
	}, []);

	return (
		<div className="wrapper centered-on-window bg-light">
			<div className="container">
				<Header />
				<InputTask addTask={addTask} />
				<div>{tasksMap}</div>
				{/*
				<TasksCounter tasksCount={tasks.length} />*/}
			</div>
		</div>
	);

	/* FETCH - INI */
	function FetchUpdate() {
		let data;
		fetch("https://assets.breatheco.de/apis/fake/todos/user/alesanchezr", {
			method: "PUT",
			body: JSON.stringify(data),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(resp => {
				console.log(resp.ok); // will be true if the response is successfull
				console.log(resp.status); // the status code = 200 or code = 400 etc.
				console.log(resp.text()); // will try return the exact result as string
				return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
			})
			.then(data => {
				//here is were your code should start after the fetch finishes
				console.log(data); //this will print on the console the exact object received from the server
			})
			.catch(error => {
				//error handling
				console.log(error);
			});
	}

	function FetchIni_OLD() {
		let data;
		fetch("https://assets.breatheco.de/apis/fake/todos/user/alesanchezr", {
			method: "GET",
			body: JSON.stringify(data),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(resp => {
				console.log("PTO_1");
				console.log(resp.ok); // will be true if the response is successfull
				console.log(resp.status); // the status code = 200 or code = 400 etc.
				console.log(resp.text()); // will try return the exact result as string
				console.log(data);
				console.log("PTO_1_1");
				//return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
			})
			.then(data => {
				console.log("PTO_2");
				//here is were your code should start after the fetch finishes
				console.log(data); //this will print on the console the exact object received from the server
				updateTasks(data);
			})
			.catch(error => {
				console.log("PTO_3");
				//error handling
				console.log(error);
			});
	}

	function fetchingImages() {
		console.log("Load them!");
		fetch("the_url_of_the_image").then(response => {
			if (response.ok) {
				console.log("Images Loaded!!");
			} else {
				console.log("Uh-oh something went wrong");
			}
		});
	}

	// read, update, delete, create
	async function readTasks() {
		console.log("Load them!");
		fetch("https://assets.breatheco.de/apis/fake/todos/user/alesanchezr")
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
				//updateTasks(data);
				let _jsonMap = json.map((task, index) => ({
					key: index,
					label: task.label
				}));
				let jsonMap = json.map((task, index) => {
					console.log(typeof task.label);
					return task.label;
				});
				console.log("-> jsonMap");
				console.log(jsonMap);
				updateTasks(jsonMap);
			});
	}
	/* FETCH - FIN */
}
