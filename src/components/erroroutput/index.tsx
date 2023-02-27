import { FC } from "react";
import IconWarningTriangle from "../../icons/iconwarningtriangle";
import ErrorOutputProps from "./erroroutputprops";
import Style from "./style.module.css";

const ErrorOutput: FC<ErrorOutputProps> = (props: ErrorOutputProps) => {
	return (
		<>
			<div className={Style.errorTitle}>
				<IconWarningTriangle className={Style.warningIcon} />
				<p>Error</p>
			</div>

			<p>{props.errorMessage}</p>
		</>
	);
};

export default ErrorOutput;
