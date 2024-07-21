// =============================================================================
// Copyright 2024 Hilde801 (https://github.com/hilde801)
// This file is a part of qr-code-generator
// =============================================================================

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
