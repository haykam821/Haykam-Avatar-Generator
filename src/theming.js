const chroma = require("chroma-js");

const themes = {
	default: {
		name: "(Defaults)",
		primary: "blue",
		hidden: true,
	},
	dark: {
		name: "Dark",
		bg: "#333",
		text: "#ddd",
		cardBg: () => chroma(themeProp("bg")).brighten(0.5),
		primary: "#4473f4",
		secondary: "#44cbf4",
	},
	light: {
		name: "Light",
		bg: "white",
		text: "#444",
		cardBg: () => chroma(themeProp("bg")).darken(0.5),
	},
	hotdog: {
		name: "Hot Dog",
		bg: "red",
		text: "orangered",
		cardBg: "yellow",
	},
};
global.themes = themes;

let themeID = "dark";
global.themeID = themeID;
function updateTheme() {
	return themeID = localStorage.getItem("haykam-avatar-generator:theme") || "dark";
}
global.updateTheme = updateTheme;
updateTheme();

function themeProp(prop) {
	const val = themes[themeID][prop] || themes.dark[prop] || themes.default[prop];
	return typeof val === "function" ? val() : val;
}
global.themeProp = themeProp;