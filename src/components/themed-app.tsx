import { Theme, themes } from "../themes";

import App from "./app";
import GlobalStyle from "./global-style";
import React from "react";
import { ThemeProvider } from "styled-components";
import { loggers } from "../debug";

interface ThemedAppProps {}
interface ThemedAppState {
	theme: string;
}

export default class ThemedApp extends React.Component<ThemedAppProps, ThemedAppState> {
	private match: MediaQueryList;

	constructor(props: Readonly<ThemedAppProps>) {
		super(props);

		// Set initial theme
		this.match = window.matchMedia("(prefers-color-scheme: dark)");
		this.state = {
			theme: this.match.matches ? "dark" : "light",
		};
		loggers.theme("set initial theme to '%s'", this.state.theme);

		// Change theme if color scheme preference is changed
		this.onPrefersColorSchemeChanged = this.onPrefersColorSchemeChanged.bind(this);
		this.match.addEventListener("change", this.onPrefersColorSchemeChanged);
	}

	componentWillUnmount(): void {
		this.match.removeEventListener("change", this.onPrefersColorSchemeChanged);
	}

	private onPrefersColorSchemeChanged(event: MediaQueryListEvent): void {
		this.changeTheme(event.matches);
	}

	changeTheme(isDarkPreferred = false): void {
		const newTheme = isDarkPreferred ? "dark" : "light";
		loggers.theme("changed theme to '%s'", newTheme);

		this.setState({
			theme: newTheme,
		});
	}

	getTheme(): Theme {
		return {
			...themes.default,
			...themes[this.state.theme],
			...themes.custom,
		};
	}

	render(): JSX.Element {
		return <ThemeProvider theme={this.getTheme()}>
			<React.Fragment>
				<GlobalStyle/>
				<App/>
			</React.Fragment>
		</ThemeProvider>;
	}
}
