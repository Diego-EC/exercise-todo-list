import React from "react";
import PropTypes from "prop-types";

export function InputTask(props) {
	const addTask = e => {
		if (e.keyCode === 13 && e.target.value.replace(/\s/g, "") != "") {
			console.log(e.target.value);
			props.addTask(e);
			e.target.value = "";
		}
	};

	return <input type="text" onKeyUp={addTask} />;
}

InputTask.propTypes = {
	addTask: PropTypes.func
};
