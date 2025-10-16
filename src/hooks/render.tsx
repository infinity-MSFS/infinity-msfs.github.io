import React from "react";
import ReactDOM from "react-dom/client";

export const Render = (node: JSX.Element): void => {
	ReactDOM.createRoot(document.getElementById("root")!).render(
		<React.StrictMode>{node}</React.StrictMode>,
	);
};
