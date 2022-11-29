import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
	body, html {
		margin: 0;
		background-color: #fafafa;
	}

	body, html, #app {
		width: 100%;
		height: 100%;
	}

	* {
		box-sizing: border-box;
	}

	@media (prefers-color-scheme: dark) {
		body, html {
			background-color: #1b1b1b;
		}
	}
`;
