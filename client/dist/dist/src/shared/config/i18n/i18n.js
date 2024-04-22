import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import intervalPlural from "i18next-intervalplural-postprocessor";
i18n
    .use(intervalPlural)
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
    fallbackLng: "en",
    debug: __IS_DEV__,
    keySeparator: false,
    nsSeparator: false,
    interpolation: {
        escapeValue: false,
    },
    backend: {
        loadPath: "/locales/{{lng}}/{{ns}}.json",
        requestOptions: {
            cache: "no-store",
        },
    },
    supportedLngs: ["en", "lt"],
    ns: ["translation"],
});
export default i18n;
