const size = 300;
const scale = 6;

const React = require("react");
const propTypes = require("prop-types");

const Card = require("./card.jsx");
const Controls = require("./controls.jsx");

const styled = require("styled-components").default;
const chroma = require("chroma-js");

const { editor: editorLog, render: renderLog } = require("../debug.js");
const controls = require("../controls.js");

/**
 * Draws a polygon.
 * @param {number} radius The radius of the polygon.
 * @param {number} pointCount The number of points on the polygon.
 * @param {number} xPos The X coordinate of the polygon's center.
 * @param {number} yPos The Y coordinate of the polygon's center.
 * @param {number} rotation The offset of the polygon's angle.
 * @param {CanvasRenderingContext2D} ctx The context to render the polygon on.
 */
function polygon(radius, pointCount, xPos, yPos, rotation, ctx) {
	// Start path and save
	ctx.save();
	ctx.beginPath();

	// Set position and rotation
	ctx.translate(xPos, yPos);
	ctx.rotate(rotation);

	ctx.moveTo(radius, 0);

	for (let point = 0; point <= pointCount; point++) {
		ctx.rotate(2 * Math.PI / pointCount);
		ctx.lineTo(radius, 0);
	}
	ctx.rotate(-2 * Math.PI / pointCount);

	// End path and restore
	ctx.closePath();
	ctx.restore();
}

/**
 * Darkens a color in Diep.io style for use as a border.
 * @param {string} type The key for the color in the options object.
 * @param {Object} opts The options object to get the color from.
 * @param {number} factor The factor to darken by.
 * @returns {string} The color to use.
 */
function darken(type, opts, factor = 0.75) {
	try {
		if (opts.borderColor) return opts.borderColor;

		const value = opts[type];
		if (value === undefined) return "#000000";

		const color = chroma(value);
		const rgb = chroma(color).rgb();

		return chroma(rgb.map(channel => {
			return Math.round(channel * factor);
		})).hex();
	} catch (error) {
		return "#ffffff";
	}
}

/**
 * Clips the corners of the rendering context based on the corner radius.
 * @param {CanvasRenderingContext2D} ctx The context to render the avatar to.
 * @param {Object} opts The options to generate the avatar with.
 */
function clipCorners(ctx, opts = {}) {
	ctx.moveTo(size / 2, 0);

	ctx.arcTo(size, 0, size, size, Math.min(size / 2, opts.cornerRadius));
	ctx.arcTo(size, size, 0, size, Math.min(size / 2, opts.cornerRadius));
	ctx.arcTo(0, size, 0, 0, Math.min(size / 2, opts.cornerRadius));
	ctx.arcTo(0, 0, opts.cornerRadius, 0, Math.min(size / 2, opts.cornerRadius));

	ctx.lineTo(size / 2, 0);
	ctx.clip();
}

/**
 * Renders an avatar.
 * @param {CanvasRenderingContext2D} ctx The context to render the avatar to.
 * @param {Object} opts The options to generate the avatar with.
 */
function generate(ctx, opts = {}) {
	renderLog("rendering avatar to canvas with options: %o", opts);

	ctx.save();
	ctx.scale(scale, scale);

	ctx.clearRect(0, 0, size, size);
	clipCorners(ctx, opts);

	// Bg
	ctx.fillStyle = opts.bgColor;
	ctx.fillRect(0, 0, size, size);

	// Lines
	ctx.strokeStyle = opts.lineColor;
	ctx.lineWidth = opts.lineWidth;
	for (let line = 0; line < size; line += (size / opts.lineCount)) {
		ctx.beginPath();
		ctx.moveTo(line, 0);
		ctx.lineTo(line, size);
		ctx.closePath();
		ctx.stroke();
	}
	for (let line = 0; line < size; line += (size / opts.lineCount)) {
		ctx.beginPath();
		ctx.moveTo(0, line);
		ctx.lineTo(size, line);
		ctx.closePath();
		ctx.stroke();
	}

	ctx.lineWidth = 10;
	ctx.lineJoin = "round";

	// Green square
	ctx.fillStyle = opts.squareColor;
	ctx.fillRect(60, 60, size - 120, size - 120);
	ctx.strokeStyle = darken("squareColor", opts);
	ctx.strokeRect(60, 60, size - 120, size - 120);

	// Pentagon
	ctx.fillStyle = opts.pentagonColor;
	polygon(70, 5, size / 2, size / 2, -0.32, ctx);
	ctx.fill();
	ctx.strokeStyle = darken("pentagonColor", opts);
	ctx.stroke();

	// Pentagon
	ctx.fillStyle = opts.triangleColor;
	polygon(35, 3, size / 2, size / 2 + 6, 0.52, ctx);
	ctx.fill();
	ctx.strokeStyle = darken("triangleColor", opts);
	ctx.stroke();

	ctx.restore();
}

class AppUnstyled extends React.Component {
	constructor(props) {
		super(props);
		this.canvas = React.createRef();

		const defaultOptions = Object.fromEntries(controls.map(control => {
			return [control.key, control.default];
		}));
		editorLog("setting default options to %o", defaultOptions);
		this.state = {
			options: defaultOptions,
		};

		this.renderToCanvas = this.renderToCanvas.bind(this);
		this.update = this.update.bind(this);
	}

	renderToCanvas() {
		if (this.canvas) {
			generate(this.canvas.current.getContext("2d"), this.state.options);
		}
	}

	update(option, value) {
		editorLog("setting option '%s' to '%s'", option, value);
		this.setState({
			options: {
				...this.state.options,
				[option]: value,
			},
		}, () => {
			this.renderToCanvas();
		});
	}

	componentDidMount() {
		this.renderToCanvas();
	}

	render() {
		return <div className={this.props.className}>
			<div>
				<Card header="Preview">
					<canvas width={size * scale} height={size * scale} ref={this.canvas}></canvas>
				</Card>
				<Card header="Settings">
					<Controls update={this.update} renderToCanvas={this.renderToCanvas} controls={controls} />
				</Card>
			</div>
		</div>;
	}
}
AppUnstyled.propTypes = {
	className: propTypes.string,
};

const App = styled(AppUnstyled)`
	font-family: sans-serif;
	text-align: center;

	& > div {
		padding: 24px;
	}

	canvas {
		background-color: ${props => props.theme.canvasBackground};
		border: 1px solid ${props => props.theme.canvasBorder};
		max-width: 300px;
	}

	color: ${props => props.theme.text};
`;
module.exports = App;