import { declareComponentKeys } from "i18nifty";
import { createI18nApi } from "i18nifty/ssr";
export { declareComponentKeys };

//List the languages you with to support
export const languages = ["fr", "en"] as const;

//If the user's browser language doesn't match any 
//of the languages above specify the language to fallback to:  
export const fallbackLanguage = "fr";

export type Language = typeof languages[number];

export type LocalizedString = Parameters<typeof resolveLocalizedString>[0];

export const { 
	useTranslation, 
	resolveLocalizedString, 
	useLang, 
	$lang,
	useResolveLocalizedString,
	/** For use outside of React */
	getTranslation,
	withLang
} = createI18nApi<
	| typeof import("pages/index").i18n
>()(
    { languages, fallbackLanguage },
    {
	/* spell-checker: disable */
	"fr": {
			"Home": {
				"currently in what mode": ({ isDark }) => `Actuellement en mode ${isDark ? "sombre" : "clair"}`,
				"set to dark mode": "Passer en mode 🌑",
				"set to light mode": "Passer en mode 🌕"
			}
        },
	/* spell-checker: enable */
        "en": {
			"Home": {
				"currently in what mode": ({ isDark }) => `Currently in ${isDark ? "dark" : "light"} mode`,
				"set to dark mode": "Set to 🌑 mode",
				"set to light mode": "Set to 🌕 mode"
			}
        },
    }
);