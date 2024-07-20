import React from "react";
import ReactDOM from "react-dom/client";

const rootElement = document.getElementById("root")!,
	root: ReactDOM.Root = ReactDOM.createRoot(rootElement);

root.render(
	<React.StrictMode>
		<h1>Hello, World!</h1>
		<p>This application is still under development...</p>
	</React.StrictMode>,
);
