import { Html, Head, Main, NextScript } from 'next/document'
import { getColorSchemeSsrUtils } from "@codegouvfr/react-dsfr/next";
import { augmentDocumentWithEmotionCache } from "./_app";

const {
	getColorSchemeHtmlAttributes,
	augmentDocumentByReadingColorSchemeFromCookie
} = getColorSchemeSsrUtils();

export default function Document() {
	return (
		<Html {...getColorSchemeHtmlAttributes()}>
			<Head />
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}

augmentDocumentByReadingColorSchemeFromCookie(Document);

augmentDocumentWithEmotionCache(Document);
