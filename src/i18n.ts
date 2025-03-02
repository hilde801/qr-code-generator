// =============================================================================
// Copyright 2024 Hilde801 (https://github.com/hilde801)
// This file is a part of qr-code-generator
// =============================================================================

import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en.json";
import es from "./locales/es.json";
import fr from "./locales/fr.json";
import de from "./locales/de.json";
import zh from "./locales/zh.json";
import zh_Hant from "./locales/zh_Hant.json";
import ja from "./locales/ja.json";
import ko from "./locales/ko.json";

i18next
	.use(I18nextBrowserLanguageDetector)
	.use(initReactI18next)
	.init({
		fallbackLng: "en",
		supportedLngs: ["en", "es", "fr", "de", "zh", "zh_Hant", "ja", "ko"],
		resources: { en, es, fr, de, zh, zh_Hant, ja, ko },
		detection: {
			order: ["querystring", "navigator"],
		},
	});

export default i18next;
