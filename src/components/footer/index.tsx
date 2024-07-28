// =============================================================================
// Copyright 2024 Hilde801 (https://github.com/hilde801)
// This file is a part of qr-code-generator
// =============================================================================

import React from "react";

import Styles from "./styles.module.css";

const Footer: React.FC = () => {
	return (
		<footer className={Styles.footer}>
			<p>Copyright &copy; 2024 hilde801</p>
			<a href="https://github.com/hilde801/qr-code-generator">Github Repository</a>
		</footer>
	);
};

export default Footer;
