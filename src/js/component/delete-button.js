import React from "react";
import PropTypes from "prop-types";

export function DeleteButton(props) {
	DeleteButton.propTypes = {
		deleteTasks: PropTypes.func
	};

	const deleteTasks = () => {
		props.deleteTasks();
	};

	return (
		<div className="m-5">
			<button
				type="button"
				className="btn btn-danger float-right"
				onClick={() => deleteTasks()}>
				Delete ALL
			</button>
		</div>
	);
}
