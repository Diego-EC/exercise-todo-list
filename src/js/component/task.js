import React, { useState } from "react";
import PropTypes from "prop-types";

export function Task(props) {
	const deleteTask = () => {
		props.deleteTask(props.index);
	};

	return (
		<div className="card task trash">
			<div className="row">
				<div className="col-10">{props.label}</div>
				<div className="col-2">
					<button type="button" onClick={deleteTask}>
						<i className="fas fa-trash-alt" />
					</button>
				</div>
			</div>
		</div>
	);
}

Task.propTypes = {
	index: PropTypes.number,
	label: PropTypes.string,
	deleteTask: PropTypes.func,
	done: PropTypes.bool
};
