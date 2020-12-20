import { Theme } from "../themes";
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
	body, html {
		margin: 0;
		background-color: ${props => (props.theme as Theme).background};
	}

	body, html, #app {
		width: 100%;
		height: 100%;
	}

	* {
		box-sizing: border-box;
	}
`;
