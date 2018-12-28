const themes = {
	default: {
		name: "(Defaults)",
		hidden: true,
	},
	dark: {
		name: "Dark",
		bg: "#333",
		text: "#ddd",
		cardBg: () => chroma(themeProp("bg")).brighten(0.5),
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
	random: {
		name: "Random",
		every: () => chroma.random(),
	},
};

let themeID = "dark";
function updateTheme() {
	return themeID = localStorage.getItem("haykam-avatar-generator:theme") || "dark";
}
updateTheme();

function themeProp(prop) {
	const val = themes[themeID][prop] || themeProp("every") || themes.dark[prop] || themes.default[prop];
	return typeof val === "function" ? val() : val;
}