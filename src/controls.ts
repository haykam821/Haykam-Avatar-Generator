export interface Options extends Record<string, unknown> {
	bgColor: string;
	borderColor: string;
	cornerRadius: number;
	lineCount: number;
	lineWidth: number;
	lineColor: string;
	squareColor: string;
	pentagonColor: string;
	triangleColor: string;
}

export interface Control {
	default?: unknown;
	description: string;
	key: string;
	placeholder?: string;
	props?: Record<string, unknown>;
	type: string;
}

const controls: Control[] = [{
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
	default: 0,
	description: "The size of the corners to clip.",
	key: "cornerRadius",
	type: "number",
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
}, {
	default: "#8aff69",
	description: "The color of the outer square.",
	key: "squareColor",
	type: "color",
}, {
	default: "#768cfc",
	description: "The color of the middle pentagon.",
	key: "pentagonColor",
	type: "color",
}, {
	default: "#f177dd",
	description: "The color of the inner triangle.",
	key: "triangleColor",
	type: "color",
}];
export default controls;