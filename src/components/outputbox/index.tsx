// =============================================================================
// Copyright 2024 Hilde801 (https://github.com/hilde801)
// This file is a part of qr-code-generator
// =============================================================================

import React from "react";
import Props from "./props";
import Styles from "./styles.module.css";
import { useTranslation } from "react-i18next";

const OutputBox: React.FC<Props> = (props: Props) => {
	const previewBox = React.createRef<HTMLDivElement>();

	React.useEffect(() => {
		previewBox.current!.innerHTML = props.previewContent;
		document.querySelector("svg")!.setAttribute("role", "none");
	});

	const { t } = useTranslation();

	return (
		<output className={Styles.outputBox}>
			<div className={Styles.qrCodePreview} ref={previewBox} />

			<a className={Styles.downloadLink} href={props.dataUri} download>
				<p>{t("downloadLinkText")}</p>
			</a>
		</output>
	);
};

export default OutputBox;
