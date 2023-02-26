import { FC } from "react";
import WatermarkLink from "../watermarklink";
import Package from "../../../package.json";
import IconGithub from "../../icons/icongithub";

const AppDetails: FC = () => {
	return (
		<footer>
			<h1>{Package.displayName}</h1>

			<WatermarkLink href={Package.author.url} text={"By Hilder Gill (hilde801)"} icon={IconGithub} />
			<WatermarkLink href={Package.repository} text={"View repository on Github"} icon={IconGithub} />

			<p>Copyright &copy; 2023 {Package.author.name}</p>
		</footer>
	);
};

export default AppDetails;
