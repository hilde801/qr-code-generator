// =============================================================================
// Copyright 2024 Hilde801 (https://github.com/hilde801)
// This file is a part of qr-code-generator
// =============================================================================

import React from "react";

import Styles from "./styles.module.css";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
	const { t } = useTranslation();

	return (
		<footer className={Styles.footer}>
			<p>Copyright &copy; 2024 hilde801</p>

			<a href="https://github.com/hilde801/qr-code-generator">
				<p>{t("githubRepoText")}</p>
			</a>
		</footer>
	);
};

export default Footer;
