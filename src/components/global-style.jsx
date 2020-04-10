const { createGlobalStyle } = require("styled-components");

const GlobalStyle = createGlobalStyle`
	body, html {
		margin: 0;
		background-color: ${props => props.theme.background};
	}

	body, html, #app {
		width: 100%;
		height: 100%;
	}

	* {
		box-sizing: border-box;
	}
`;
module.exports = GlobalStyle;