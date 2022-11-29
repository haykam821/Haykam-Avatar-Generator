import { AppProps } from "next/app";
import GlobalStyle from "../components/global-style";
import Head from "next/head";
import React from "react";

const App = ({ Component, pageProps }: AppProps) => {
	return <>
		<Head>
			<title>Haykam Avatar Generator</title>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta name="description" content="A generator for haykam-styled avatars." />
			<link rel="manifest" href="/manifest.json" />
		</Head>
		<GlobalStyle />
		<Component {...pageProps} />
	</>;
};

export default App;
