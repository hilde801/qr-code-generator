// This file is a part of QR Code Generator (https://github.com/hilde801/qr-code-generator)
// Copyright (c) 2023 Hilder Gill (hilde801) <hildergill@gmail.com>

import { FC } from "react";
import IconProps from "./iconprops";

const IconWarningTriangle: FC<IconProps> = (props: IconProps) => (
	<svg
		role={"presentation"}
		className={props.className}
		xmlns="http://www.w3.org/2000/svg"
		width={24}
		height={24}
		viewBox="0 0 24 24"
		strokeWidth={2}
		stroke="currentColor"
		fill="none"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
		<path d="M12 9v2m0 4v.01"></path>
		<path d="M5 19h14a2 2 0 0 0 1.84 -2.75l-7.1 -12.25a2 2 0 0 0 -3.5 0l-7.1 12.25a2 2 0 0 0 1.75 2.75"></path>
	</svg>
);

export default IconWarningTriangle;
