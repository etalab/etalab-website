import { declareComponentKeys } from "i18nifty";
import { createI18nApi } from "i18nifty/next";
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
	| typeof import("pages/test").i18n
	| typeof import("components/Header").i18n
>()(
    { languages, fallbackLanguage },
    {
	/* spell-checker: disable */
	"fr": {
			"Test": {
				"currently in what mode": ({ isDark }) => `Actuellement en mode ${isDark ? "sombre" : "clair"}`,
				"set to dark mode": "Passer en mode 🌑",
				"set to light mode": "Passer en mode 🌕"
			},
			"Header": {
				"intitulé officiel": <>République<br/>Francaise</>,
				"menu": "Menu",
				"nom du site / service": "Etalab",
				"baseline - précisions sur l'organisation": "Politique publique des donées et des codes sources",
				"qui sommes-nous": "Qui sommes-nous",
				"nous contacter": "Nous contacter",
				"close": "fermer"
			}
        },
	/* spell-checker: enable */
        "en": {
			"Test": {
				"currently in what mode": ({ isDark }) => `Currently in ${isDark ? "dark" : "light"} mode`,
				"set to dark mode": "Set to 🌑 mode",
				"set to light mode": "Set to 🌕 mode"
			},
			"Header": {
				"intitulé officiel": undefined,
				"menu": undefined,
				"nom du site / service": undefined,
				"baseline - précisions sur l'organisation": undefined,
				"qui sommes-nous": "Who are we",
				"nous contacter": "Contact us",
				"close": "close"
			}
        },
    }
);