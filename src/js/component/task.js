import React, { useState } from "react";
import PropTypes from "prop-types";

export function Task(props) {
	const [inHover, setHover] = useState(false);

	const deleteTask = () => {
		props.deleteTask(props.index);
	};

	return (
		<div className="card task">
			<div
				className="row"
				onMouseEnter={() => setHover(true)}
				onMouseLeave={() => setHover(false)}>
				<div className="col-10">{props.description}</div>
				<div className="col-2">
					{inHover && (
						<button type="button" onClick={deleteTask}>
							<i className="fas fa-trash-alt" />
						</button>
					)}
				</div>
			</div>
		</div>
	);
}

Task.propTypes = {
	index: PropTypes.number,
	description: PropTypes.string,
	deleteTask: PropTypes.func
};
