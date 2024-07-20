import React from "react";

import Props from "./props";

const ErrorBox: React.FC<Props> = (props: Props) => {
	return (
		<output>
			<strong>Error</strong>
			<p>{props.error.name}</p>
		</output>
	);
};

export default ErrorBox;
