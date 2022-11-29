import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from "next/document";

import React from "react";
import { ServerStyleSheet } from "styled-components";

export default class StyledDocument extends Document {
	static async getInitialProps(context: DocumentContext): Promise<DocumentInitialProps> {
		const sheet = new ServerStyleSheet();
		const parentRenderPage = context.renderPage;

		try {
			context.renderPage = () => {
				return parentRenderPage({
					enhanceApp: App => props => {
						return sheet.collectStyles(<App {...props} />);
					},
				});
			};

			const initialProps = await Document.getInitialProps(context);
			return {
				...initialProps,
				styles: [
					initialProps.styles,
					sheet.getStyleElement(),
				],
			};
		} finally {
			sheet.seal();
		}
	}

	render(): JSX.Element {
		return <Html lang="en">
			<Head />
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>;
	}
}
