const controls = [{
	default: "#cdcdcd",
	description: "The color of the background.",
	key: "bgColor",
	type: "color",
}, {
	description: "The color of the shapes' borders. If left blank, uses the 'new' border style in Diep.io.",
	key: "borderColor",
	placeholder: "#525252",
	type: "color",
}, {
	default: 16,
	description: "The amount of lines in the background.",
	key: "lineCount",
	type: "number",
}, {
	default: 1,
	description: "The width of the lines in the background.",
	key: "lineWidth",
	type: "number",
}, {
	default: "#c6c6c6",
	description: "The color of the background's lines.",
	key: "lineColor",
	type: "color",
}];
module.exports = controls;