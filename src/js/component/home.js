import React from "react";

import { Header } from "./header.js";
import { ListContainer } from "./list-container.js";
import { Task } from "./task.js";

//create your first component
export function Home() {
	return (
		<div className="wrapper centered-on-window bg-light">
			<div className="contaier">
				<div className="d-flex flex-column">
					<Header />
					<ListContainer />
				</div>
			</div>
		</div>
	);
}
