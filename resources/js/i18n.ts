import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import HttpBackend from "i18next-http-backend";

i18n
    .use(HttpBackend)
    .use(initReactI18next)
    .init({
        fallbackLng: "en",
        supportedLngs: ["en", "ka"],
        ns: ["common", "auth", "header", "landing", "layout", "movies", "newsfeed", "profile"],
        defaultNS: "common",
        backend: {
            loadPath: "/js/locales/{{lng}}/{{ns}}.json",
        },
        react: {
            nsMode: "fallback",
        },
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
