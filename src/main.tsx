import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/app";

const rootElement = document.getElementById("root")!!,
	root = createRoot(rootElement);

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
