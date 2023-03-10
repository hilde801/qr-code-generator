// This file is a part of QR Code Generator (https://github.com/hilde801/qr-code-generator)
// Copyright (c) 2023 Hilder Gill (hilde801) <hildergill@gmail.com>

import { FC } from "react";

const IconDownload: FC = () => (
	<svg
		role={"presentation"}
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
		<path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"></path>
		<path d="M7 11l5 5l5 -5"></path>
		<path d="M12 4l0 12"></path>
	</svg>
);

export default IconDownload;
