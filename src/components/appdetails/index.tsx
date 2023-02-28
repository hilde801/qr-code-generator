// This file is a part of QR Code Generator (https://github.com/hilde801/qr-code-generator)
// Copyright (c) 2023 Hilder Gill (hilde801) <hildergill@gmail.com>

import { FC } from "react";
import WatermarkLink from "../watermarklink";
import Package from "../../../package.json";
import IconGithub from "../../icons/icongithub";
import Style from "./style.module.css";
import { useTranslation } from "react-i18next";

const AppDetails: FC = () => {
	const { t } = useTranslation();

	return (
		<footer className={Style.appDetails}>
			<h1 className={Style.appTitle}>{Package.displayName}</h1>

			<WatermarkLink href={Package.author.url} text={t("authorLink")} icon={IconGithub} openInNewTab={true} />
			<WatermarkLink href={Package.repository} text={t("repoLink")} icon={IconGithub} openInNewTab={true} />

			<p>{t("copyrightText")}</p>
		</footer>
	);
};

export default AppDetails;
