// =============================================================================
// Copyright 2024 Hilde801 (https://github.com/hilde801)
// This file is a part of qr-code-generator
// =============================================================================

import React from "react";
import Props from "./props";

const OutputBox: React.FC<Props> = (props: Props) => {
	const previewBox = React.createRef<HTMLDivElement>();

	React.useEffect(() => {
		previewBox.current!.innerHTML = props.previewContent;
	});

	return (
		<output>
			<div ref={previewBox} />

			<a href={props.dataUri} download>
				Download QR Code!
			</a>
		</output>
	);
};

export default OutputBox;
