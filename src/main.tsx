import React from "react";
import ReactDOM from "react-dom/client";

import App from "./components/app";

const rootElement = document.getElementById("root")!,
	root: ReactDOM.Root = ReactDOM.createRoot(rootElement);

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
