require("file-loader?name=[name].[ext]!html-minify-loader!./index.html");

require("./theming.js");

const ReactDOM = require("react-dom");

const React = require("react");
const { size, elem } = require("./magic.js");

const App = require("./components/app.js");

const chroma = require("chroma-js");

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
	return opts.borderColor || chroma(chroma(opts[type]).rgb().map(channel => {
		return Math.round(channel * factor);
	})).hex();
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
global.generate = generate;

document.body.style.textAlign = "center";

function render() {
	document.body.style.backgroundColor = themeProp("bg");
	return ReactDOM.render(elem(App), document.getElementById("app"));
}
render();
global.render = render;