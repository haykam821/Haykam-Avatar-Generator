import { loggers } from "./debug";

export interface Theme {
	readonly background?: string;
	readonly buttonBackground?: string;
	readonly buttonText?: string;
	readonly canvasBackground?: string;
	readonly canvasBorder?: string;
	readonly cardBackground?: string;
	readonly horizontalRule?: string;
	readonly inputBackground?: string;
	readonly inputPlaceholderText?: string;
	readonly inputText?: string;
	readonly text?: string;
}

export const themes: Record<string, Theme> = {
	get custom(): Theme {
		try {
			const customThemeJSON = localStorage.getItem("haykam-avatar-generator:custom-theme");
			const customParent = localStorage.getItem("haykam-avatar-generator:custom-parent");

			const customTheme = JSON.parse(customThemeJSON);

			if (themes[customParent]) {
				return {
					...themes[customParent],
					...customTheme,
				};
			} else if (customTheme) {
				return customTheme;
			}

			return {};
		} catch (error) {
			loggers.theme("encountered error when retrieving custom theme:", error);
			return {};
		}
	},
	dark: {
		background: "#1b1b1b",
		canvasBackground: "white",
		canvasBorder: "black",
		cardBackground: "#424242",
		inputBackground: "#1b1b1b",
		inputText: "white",
		text: "white",
	},
	default: {
		buttonBackground: "#1976d2",
		buttonText: "white",
		horizontalRule: "#333",
		inputPlaceholderText: "#aaa",
	},
	light: {
		background: "#fafafa",
		canvasBackground: "black",
		canvasBorder: "gray",
		cardBackground: "#c7c7c7",
		inputBackground: "white",
		inputText: "#555",
		text: "#222",
	},
};
