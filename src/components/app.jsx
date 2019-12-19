const size = 300;

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
 * Renders an avatar.
 * @param {CanvasRenderingContext2D} ctx The context to render the avatar to.
 * @param {Object} opts The options to generate the avatar with.
 */
function generate(ctx, opts = {}) {
	renderLog("rendering avatar to canvas with options: %o", opts);

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
					<canvas width={size} height={size} ref={this.canvas}></canvas>
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
	color: #ddd;

	background: #333;
	text-align: center;

	& > div {
		padding: 24px;
	}

	canvas {
		background-color: white;
		border: 1px solid black;
		max-width: 100%;
	}
`;
module.exports = App;