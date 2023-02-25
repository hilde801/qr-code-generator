import { FC } from "react";
import IconDownload from "../../icons/icondownload";
import WatermarkLink from "../watermarklink";
import QRCodeOutputProps from "./props";

const QRCodeOutput: FC<QRCodeOutputProps> = (props: QRCodeOutputProps) => {
	return (
		<>
			<img src={props.dataURL} />

			<WatermarkLink text="Download QR Code" href={props.dataURL} download={Date.now() + ".png"} icon={IconDownload} />
		</>
	);
};

export default QRCodeOutput;
