// This file is a part of QR Code Generator (https://github.com/hilde801/qr-code-generator)
// Copyright (c) 2023 Hilder Gill (hilde801) <hildergill@gmail.com>

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
