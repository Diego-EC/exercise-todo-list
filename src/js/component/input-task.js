import React from "react";

export function InputTask() {
	let state = {
		value: ""
	};

	return (
		<div className="card">
			<p>InputTask</p>
			<input onChange={e => this.setState({ value: e.target.value })} />
			<br />
			{this.state.value}
		</div>
	);
}
