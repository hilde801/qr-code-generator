import { FC } from "react";
import WatermarkLink from "../watermarklink";
import Package from "../../../package.json";
import IconGithub from "../../icons/icongithub";
import Style from "./style.module.css";

const AppDetails: FC = () => {
	return (
		<footer className={Style.appDetails}>
			<h1 className={Style.appTitle}>{Package.displayName}</h1>

			<WatermarkLink href={Package.author.url} text={"By Hilder Gill (hilde801)"} icon={IconGithub} openInNewTab={true} />
			<WatermarkLink href={Package.repository} text={"View repository on Github"} icon={IconGithub} openInNewTab={true} />

			<p>Copyright &copy; 2023 {Package.author.name}</p>
		</footer>
	);
};

export default AppDetails;
