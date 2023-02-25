import { FC } from "react";
import IconWarningTriangle from "../../icons/iconwarningtriangle";
import ErrorOutputProps from "./erroroutputprops";

const ErrorOutput: FC<ErrorOutputProps> = (props: ErrorOutputProps) => {
	return (
		<>
			<div>
				<IconWarningTriangle />
				<strong>Error</strong>
			</div>

			<p>{props.errorMessage}</p>
		</>
	);
};

export default ErrorOutput;
