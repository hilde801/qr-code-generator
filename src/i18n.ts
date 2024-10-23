// =============================================================================
// Copyright 2024 Hilde801 (https://github.com/hilde801)
// This file is a part of qr-code-generator
// =============================================================================

import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";

i18next
	.use(I18nextBrowserLanguageDetector)
	.use(initReactI18next)
	.init({
		fallbackLng: "en",
		supportedLngs: ["en"],
		resources: { en },
		detection: {
			order: ["querystring", "navigator"],
		},
	});

export default i18next;
