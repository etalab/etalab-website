import type { AppProps } from "next/app";
import { createNextDsfrIntegrationApi } from "@codegouvfr/react-dsfr/next";
import { DsfrLangProvider } from "@codegouvfr/react-dsfr";
import { createEmotionSsrAdvancedApproach } from "tss-react/next";
import { withLang, useLang } from "i18n";
import { Header } from "components/Header";
import { addAlertTranslations } from "@codegouvfr/react-dsfr/Alert";

addAlertTranslations({
	"lang": "zh-CN",
	"messages": {
		"hide message": "隐藏消息"
	}
});

const {
	augmentDocumentWithEmotionCache,
	withAppEmotionCache
} = createEmotionSsrAdvancedApproach({ "key": "css" });

export { augmentDocumentWithEmotionCache };

const { withDsfr, dsfrDocumentApi} = createNextDsfrIntegrationApi({
		"defaultColorScheme": "system",
		"doPersistDarkModePreferenceWithCookie": true,
		"preloadFonts": [
			//"Marianne-Light",
			//"Marianne-Light_Italic",
			"Marianne-Regular",
			//"Marianne-Regular_Italic",
			"Marianne-Medium",
			//"Marianne-Medium_Italic",
			"Marianne-Bold",
			//"Marianne-Bold_Italic",
			//"Spectral-Regular",
			//"Spectral-ExtraBold"
		],
});

export { dsfrDocumentApi };

function App({ Component, pageProps }: AppProps) {

	const { lang } = useLang();

	return (
		<DsfrLangProvider lang={lang}>
			<Header />
			<Component {...pageProps} />
		</DsfrLangProvider>
	);
}

// The composition order doesn't affect the behavior.
export default withDsfr(withLang(withAppEmotionCache(App)));
