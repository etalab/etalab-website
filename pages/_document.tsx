import { Html, Head, Main, NextScript, DocumentProps } from 'next/document'
import { augmentDocumentWithEmotionCache, dsfrDocumentApi } from "./_app";

const {
	getColorSchemeHtmlAttributes,
	augmentDocumentForDsfr
} = dsfrDocumentApi;

export default function Document(props: DocumentProps) {
	return (
		<Html {...getColorSchemeHtmlAttributes(props)}>
			<Head />
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}

//NOTE: The order in which those augmentations are made doesn't affect the behavior.

augmentDocumentForDsfr(Document);

augmentDocumentWithEmotionCache(Document);
