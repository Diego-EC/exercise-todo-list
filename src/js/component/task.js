import React, { useState } from "react";
import PropTypes from "prop-types";

export function Task(props) {
	const [inHover, setHover] = useState(false);

	const deleteTask = () => {
		props.deleteTask(props.index);
	};

	return (
		<div
			className="card"
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}>
			{props.description}

			{inHover && (
				<p>
					<button type="button" onClick={deleteTask}>
						<i className="fas fa-trash-alt" />
					</button>
				</p>
			)}
		</div>
	);
}

Task.propTypes = {
	index: PropTypes.number,
	description: PropTypes.string,
	deleteTask: PropTypes.func
};
