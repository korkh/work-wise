import i18next from "i18next";
import { initReactI18next } from "react-i18next";
i18next.use(initReactI18next).init({
    lng: "en",
    fallbackLng: "en",
    debug: false,
    interpolation: {
        escapeValue: false, // not needed for react!!
    },
});
export default i18next;
