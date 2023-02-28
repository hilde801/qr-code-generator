// This file is a part of QR Code Generator (https://github.com/hilde801/qr-code-generator)
// Copyright (c) 2023 Hilder Gill (hilde801) <hildergill@gmail.com>

import { FC } from "react";
import { useTranslation } from "react-i18next";
import IconDownload from "../../icons/icondownload";
import WatermarkLink from "../watermarklink";
import QRCodeOutputProps from "./props";

const QRCodeOutput: FC<QRCodeOutputProps> = (props: QRCodeOutputProps) => {
	const { t } = useTranslation();

	return (
		<>
			<img src={props.dataURL} role={"presentation"} />
			<WatermarkLink text={t("downloadLink")} href={props.dataURL} download={Date.now() + ".png"} icon={IconDownload} />
		</>
	);
};

export default QRCodeOutput;
