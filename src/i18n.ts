// This file is a part of QR Code Generator (https://github.com/hilde801/qr-code-generator)
// Copyright (c) 2023 Hilder Gill (hilde801) <hildergill@gmail.com>

import i18next from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import TranslationEnglish from "./locales/en.json";

i18next
	.use(I18nextBrowserLanguageDetector)
	.use(initReactI18next)
	.init({
		supportedLngs: ["en"],
		fallbackLng: "en",
		resources: {
			en: TranslationEnglish
		}
	});
