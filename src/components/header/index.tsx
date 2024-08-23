// =============================================================================
// Copyright 2024 Hilde801 (https://github.com/hilde801)
// This file is a part of qr-code-generator
// =============================================================================

import React from "react";
import Styles from "./styles.module.css";

const Header: React.FC = () => {
	return (
		<header className={Styles.header}>
			<img className={Styles.icon} src="icons/icon.png" />
			<h1 className={Styles.titleText}>QR Code Generator</h1>
			<p>A simple web application to generate QR codes</p>
		</header>
	);
};

export default Header;
