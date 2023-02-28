// This file is a part of QR Code Generator (https://github.com/hilde801/qr-code-generator)
// Copyright (c) 2023 Hilder Gill (hilde801) <hildergill@gmail.com>

import { FC } from "react";
import WatermarkLinkProps from "./props";
import Style from "./style.module.css";

const WatermarkLink: FC<WatermarkLinkProps> = (props: WatermarkLinkProps) => {
	return (
		<a href={props.href} download={props.download} tabIndex={0} className={Style.watermarkLink} target={props.openInNewTab ? "_blank" : "_self"}>
			<props.icon />
			<p>{props.text}</p>
			<props.icon />
		</a>
	);
};

export default WatermarkLink;
