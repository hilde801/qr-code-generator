// This file is a part of QR Code Generator (https://github.com/hilde801/qr-code-generator)
// Copyright (c) 2023 Hilder Gill (hilde801) <hildergill@gmail.com>

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/app";
import "./i18n";

const rootElement = document.getElementById("root")!!,
	root = createRoot(rootElement);

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
