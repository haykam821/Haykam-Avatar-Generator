const { size, elem } = require("../magic.js");
const card = require("./card.js");
const React = require("react");

const Controls = require("./controls.js");
const Paragraph = require("./paragraph.js");
const ThemeSelector = require("./theme-selector.js");

class App extends React.Component {
	render() {
		return elem("div", {
			children: [
				card("Preview", "canvas", {
					width: size,
					height: size,
					id: "canvas",
					style: {
						backgroundColor: "white",
						border: "1px solid black",
					},
				}),
				card("Settings", Controls, {
					controls: [{
						key: "bgColor",
						default: "#cdcdcd",
						description: "The color of the background.",
						type: "color",
					}, {
						key: "borderColor",
						placeholder: "#525252",
						description: "The color of the shapes' borders. If left blank, uses the 'new' border style in Diep.io.",
						type: "color",
					}, {
						key: "lineCount",
						default: 16,
						description: "The amount of lines in the background.",
						type: "number",
					}, {
						key: "lineWidth",
						default: 1,
						description: "The width of the lines in the background.",
						type: "number",
					}, {
						key: "lineColor",
						default: "#c6c6c6",
						description: "The color of the background's lines.",
						type: "color",
					}, {
						key: "squareColor",
						default: "#8aff69",
						description: "The color of the outer square.",
						type: "color",
					}, {
						key: "pentagonColor",
						default: "#768cfc",
						description: "The color of the middle pentagon.",
						type: "color",
					}, {
						key: "triangleColor",
						default: "#f177dd",
						description: "The color of the inner triangle.",
						type: "color",
					}],
				}),
				card("Theme", "div", {
					children: [
						elem(Paragraph, {
							text: "You can select a theme.",
						}),
						elem(ThemeSelector),
					],
				}),
			],
			style: {
				margin: "32px",
			}
		});
	}
}
module.exports = App;