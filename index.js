const size = 300;
const elem = React.createElement;

const style = styled.default;

function polygon(radius, pointCount, xPos, yPos, rotation) {
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

function generate(ctx) {
	// bg
	ctx.fillStyle = "#cdcdcd";
	ctx.fillRect(0, 0, size, size);

	// lines
	ctx.strokeStyle = "#c6c6c6";
	ctx.lineWidth = 1;
	for (m = 0; m < size; m += (size / 16)) {
		ctx.beginPath();
		ctx.moveTo(m, 0)
		ctx.lineTo(m, size)
		ctx.closePath();
		ctx.stroke();
	}
	for (m = 0; m < size; m += (size / 16)) {
		ctx.beginPath();
		ctx.moveTo(0, m)
		ctx.lineTo(size, m)
		ctx.closePath();
		ctx.stroke();
	}

	ctx.lineWidth = 10;
	ctx.lineJoin = "round";

	// green square
	ctx.fillStyle = "#8aff69";
	ctx.fillRect(40, 40, size - 80, size - 80);
	ctx.strokeStyle = "#6cbe55";
	ctx.strokeRect(40, 40, size - 80, size - 80);

	// pentagon
	ctx.fillStyle = "#768cfc";
	polygon(80, 5, size / 2, size / 2, -0.32);
	ctx.fill();
	ctx.strokeStyle = "#5869bd";
	ctx.stroke();

	// pentagon
	ctx.fillStyle = "#f177dd";
	polygon(40, 3, size / 2, size / 2 + 6, 0.52);
	ctx.fill();
	ctx.strokeStyle = "#b459a5";
	ctx.stroke();
}

document.body.style.textAlign = "center";

function render() {
	document.body.style.backgroundColor = themeProp("bg");
	return ReactDOM.render(elem(App), document.getElementById("app"));
}
render();