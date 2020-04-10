const React = require("react");

const { theme: log } = require("../debug.js");

const ThemeProvider = require("styled-components").ThemeProvider;
const themes = require("../themes.js");

const GlobalStyle = require("./global-style.jsx");
const App = require("./app.jsx");

class ThemedApp extends React.Component {
	constructor(props) {
		super(props);

		// Set initial theme
		this.match = window.matchMedia("(prefers-color-scheme: dark)");
		this.state = {
			theme: this.match.matches ? "dark" : "light",
		};
		log("set initial theme to '%s'", this.state.theme);

		// Change theme if color scheme preference is changed
		this.changeListener = this.match.addEventListener("change", event => {
			this.changeTheme(event.matches);
		});
	}

	componentWillUnmount() {
		this.match.removeListener(this.changeListener);
	}

	changeTheme(isDarkPreferred = false) {
		const newTheme = isDarkPreferred ? "dark" : "light";
		log("changed theme to '%s'", newTheme);

		return this.setState({
			theme: newTheme,
		});
	}

	getTheme() {
		return {
			...themes.default,
			...themes[this.state.theme],
		};
	}

	render() {
		return <ThemeProvider theme={this.getTheme()}>
			<React.Fragment>
				<GlobalStyle/>
				<App/>
			</React.Fragment>
		</ThemeProvider>;
	}
}
module.exports = ThemedApp;