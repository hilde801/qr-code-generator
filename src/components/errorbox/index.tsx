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
