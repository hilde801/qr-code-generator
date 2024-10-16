// =============================================================================
// Copyright 2024 Hilde801 (https://github.com/hilde801)
// This file is a part of qr-code-generator
// =============================================================================

import React from "react";
import Styles from "./styles.module.css";

import { useTranslation } from "react-i18next";
import Favicon from "../../vectors/favicon";

const Header: React.FC = () => {
	const { t } = useTranslation();

	return (
		<header className={Styles.header}>
			<Favicon className={Styles.icon} />
			<h1 className={Styles.titleText}>{t("headerPrimary")}</h1>
			<p>{t("headerSecondary")}</p>
		</header>
	);
};

export default Header;
