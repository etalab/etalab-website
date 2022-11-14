import type { AppProps } from "next/app";
import { createNextDsfrIntegrationApi } from "@codegouvfr/react-dsfr/next";
import { createEmotionSsrAdvancedApproach } from "tss-react/next";
import { withLang } from "../i18n";
import "@codegouvfr/react-dsfr/dsfr/dsfr.css";
import "@codegouvfr/react-dsfr/dsfr/utility/icons/icons.css";
import { Header } from "components/Header";

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
	return (
		<>
			<Header />
			<Component {...pageProps} />
		</>
	);
}

// The composition order doesn't affect the behavior.
export default withDsfr(withLang(withAppEmotionCache(App)));

