import type { AppProps } from "next/app";
import { createDsfrLinkProvider } from "@codegouvfr/react-dsfr";
import { createNextDsfrIntegrationApi } from "@codegouvfr/react-dsfr/next";
import { DsfrLangProvider } from "@codegouvfr/react-dsfr";
import { createEmotionSsrAdvancedApproach } from "tss-react/next";
import { withLang, useLang } from "i18n";
import { Header } from "@codegouvfr/react-dsfr/Header";
import { Display, headerQuickAccessDisplay } from "@codegouvfr/react-dsfr/Display";
import Link from "next/link";

const { DsfrLinkProvider } = createDsfrLinkProvider({ Link });

// Only in TypeScript projects
declare module "@codegouvfr/react-dsfr" {
	interface RegisterLink {
		Link: typeof Link;
	}
}

const {
	augmentDocumentWithEmotionCache,
	withAppEmotionCache
} = createEmotionSsrAdvancedApproach({ "key": "css" });

export { augmentDocumentWithEmotionCache };

const { withDsfr, dsfrDocumentApi } = createNextDsfrIntegrationApi({
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
		<DsfrLinkProvider>
			<DsfrLangProvider lang={lang}>
				<Header
					brandTop={<>INTITULE<br />OFFICIEL</>}
					homeLinkProps={{
						href: '/',
						title: 'Accueil - Nom de l’entité (ministère, secrétariat d‘état, gouvernement)'
					}}
					serviceTagline="baseline - précisions sur l'organisation"
					serviceTitle="Nom du site / service"
					quickAccessItems={[headerQuickAccessDisplay]}
				/>
				<Component {...pageProps} />
				<Display />
			</DsfrLangProvider>
		</DsfrLinkProvider>
	);
}

// The composition order doesn't affect the behavior.
export default withDsfr(withLang(withAppEmotionCache(App)));
