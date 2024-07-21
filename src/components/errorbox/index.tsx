// =============================================================================
// Copyright 2024 Hilde801 (https://github.com/hilde801)
// This file is a part of qr-code-generator
// =============================================================================

import React from "react";

import Props from "./props";

const ErrorBox: React.FC<Props> = (props: Props) => {
	return (
		<output>
			<strong>Error</strong>
			<p>{props.error.message}</p>
		</output>
	);
};

export default ErrorBox;
