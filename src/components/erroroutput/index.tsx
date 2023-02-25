import { FC } from "react";
import IconWarningTriangle from "../../icons/iconwarningtriangle";

const ErrorOutput: FC<Error> = (props: Error) => {
	return (
		<>
			<div>
				<IconWarningTriangle />
				<strong>Error</strong>
			</div>

			<p>{props.message}</p>
		</>
	);
};

export default ErrorOutput;
