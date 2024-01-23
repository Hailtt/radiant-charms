import React from "react";
import { Header } from "../components";

function main({ children }) {
	return (
		<div className="RC-container">
			<Header />
			{children}
			footer
		</div>
	);
}

export default main;
