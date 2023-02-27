import { FC } from "react";
import WatermarkLinkProps from "./props";
import Style from "./style.module.css";

const WatermarkLink: FC<WatermarkLinkProps> = (props: WatermarkLinkProps) => {
	return (
		<a href={props.href} download={props.download} className={Style.watermarkLink}>
			<props.icon />
			<p>{props.text}</p>
			<props.icon />
		</a>
	);
};

export default WatermarkLink;
