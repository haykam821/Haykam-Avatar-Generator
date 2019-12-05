const size = 300;

const React = require("react");

const Card = require("./card.jsx");
const Controls = require("./controls.jsx");
const Paragraph = require("./paragraph.jsx");

const styled = require("styled-components").default;
const chroma = require("chroma-js");

const controls = require("../controls.js");

function polygon(radius, pointCount, xPos, yPos, rotation, ctx) {
	// Start path and save
	ctx.save();
	ctx.beginPath();

	// Set position and rotation
	ctx.translate(xPos, yPos);
	ctx.rotate(rotation);

	ctx.moveTo(radius, 0);

	for (i = 0; i <= pointCount; i++) {
		ctx.rotate(2 * Math.PI / pointCount);
		ctx.lineTo(radius, 0);
	}
	ctx.rotate(-2 * Math.PI / pointCount);

	// End path and restore
	ctx.closePath();
	ctx.restore();
}

function darken(type, opts, factor = 0.75) {
	try {
		if (opts.borderColor) return opts.borderColor;

		const value = opts[type];
		if (value === undefined) return "#000000";
	;
		const color = chroma(value);
		const rgb = chroma(color).rgb();

		return chroma(rgb.map(channel => {
			return Math.round(channel * factor);
		})).hex();
	} catch (error) {
		return "#ffffff";
	}
}

function generate(ctx, opts = {}) {
	console.log("Generating with opts:", opts);

	// bg
	ctx.fillStyle = opts.bgColor;
	ctx.fillRect(0, 0, size, size);

	// lines
	ctx.strokeStyle = opts.lineColor;
	ctx.lineWidth = opts.lineWidth;
	for (m = 0; m < size; m += (size / opts.lineCount)) {
		ctx.beginPath();
		ctx.moveTo(m, 0)
		ctx.lineTo(m, size)
		ctx.closePath();
		ctx.stroke();
	}
	for (m = 0; m < size; m += (size / opts.lineCount)) {
		ctx.beginPath();
		ctx.moveTo(0, m)
		ctx.lineTo(size, m)
		ctx.closePath();
		ctx.stroke();
	}

	ctx.lineWidth = 10;
	ctx.lineJoin = "round";

	// green square
	ctx.fillStyle = opts.squareColor;
	ctx.fillRect(60, 60, size - 120, size - 120);
	ctx.strokeStyle = darken("squareColor", opts);
	ctx.strokeRect(60, 60, size - 120, size - 120);

	// pentagon
	ctx.fillStyle = opts.pentagonColor;
	polygon(70, 5, size / 2, size / 2, -0.32, ctx);
	ctx.fill();
	ctx.strokeStyle = darken("pentagonColor", opts);
	ctx.stroke();

	// pentagon
	ctx.fillStyle = opts.triangleColor;
	polygon(35, 3, size / 2, size / 2 + 6, 0.52, ctx);
	ctx.fill();
	ctx.strokeStyle = darken("triangleColor", opts);
	ctx.stroke();
}

const App = styled(class App extends React.Component {
	constructor(props) {
		super(props);
		this.canvas = React.createRef();
		this.state = {
			options: Object.fromEntries(controls.map(control => {
				return [control.key, control.default];
			})),
		};

		this.update = this.update.bind(this);
	}

	renderToCanvas() {
		if (this.canvas) {
			generate(this.canvas.current.getContext("2d"), this.state.options);
		}
	}

	update(option, value) {
		console.log(option, value)
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
		</div>
	}
})`
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
	}
`;
module.exports = App;