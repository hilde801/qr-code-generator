// =============================================================================
// Copyright 2024 Hilde801 (https://github.com/hilde801)
// This file is a part of qr-code-generator
// =============================================================================

import React from "react";
import Props from "./props";
import Styles from "./styles.module.css";

const ErrorBox: React.FC<Props> = (props: Props) => {
	return (
		<output className={Styles.errorBox}>
			<strong>Error</strong>
			<p>{props.error.message}</p>
		</output>
	);
};

export default ErrorBox;
