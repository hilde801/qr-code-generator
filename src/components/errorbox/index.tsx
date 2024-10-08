// =============================================================================
// Copyright 2024 Hilde801 (https://github.com/hilde801)
// This file is a part of qr-code-generator
// =============================================================================

import React from "react";
import Props from "./props";
import Styles from "./styles.module.css";
import { useTranslation } from "react-i18next";

const ErrorBox: React.FC<Props> = (props: Props) => {
	const { t } = useTranslation();

	return (
		<output className={Styles.errorBox}>
			<strong>{t("errorTitle")}</strong>
			<p>{t(props.error.message)}</p>
		</output>
	);
};

export default ErrorBox;
