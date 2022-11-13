import type { AppProps } from "next/app";
import { withAppDsfr } from "@codegouvfr/react-dsfr/next";
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

function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Header />
			<Component {...pageProps} />
		</>
	);
}

export default withAppDsfr(
	withLang(withAppEmotionCache(App)),
	{
		"defaultColorScheme": "system",
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
		]
	}
);

