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

class Controls extends React.Component {
	render() {
		const inputs = this.props.controls.map(control => {
			return elem("input");
		});
		return elem("div", {
			children: inputs,
		});
	}
}
Controls.defaultProps = {
	controls: [],
};

const themes = {
	default: {
		name: "(Defaults)",
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
	}
};
const themeID = localStorage.getItem("haykam-avatar-generator:theme");
const theme = themes[themeID] || themes.dark;

function themeProp(prop) {
	const val = themes[themeID][prop] || themes.dark[prop] || themes.default[prop];
	return typeof val === "function" ? val() : val;
}

styled.injectGlobal({
	body: {
		backgroundColor: themeProp("bg"),
		textAlign: "center",
	},
});

class ThemeSelector extends React.Component {
	render() {
		return elem("select", {
			children: Object.entries(themes).map(opt => {
				return elem("option", {
					value: opt[0],
				}, opt[1].name);
			}),
			defaultValue: themeID,
			onChange: event => {
				localStorage.setItem("haykam-avatar-generator:theme", event.target.value);
				location.reload();
			}
		});
	}
}

class Card extends React.Component {
	render() {
		if (this.props.header) {
			this.props.children.unshift(elem(Header, {
				text: this.props.header,
			}));
		}

		return elem("div", {
			style: {
				backgroundColor: themeProp("cardBg"),
				padding: "16px",
				borderRadius: 8,
				marginTop: "24px",
				marginBottom: "24px",
			},
			children: this.props.children,
		});
	}
}

function card(header, child, ...opts) {
	return elem(Card, {
		children: [
			elem(child, ...opts),
		],
		header,
	});
}

class HR extends React.Component {
	render() {
		return elem("div", {
			style: {
				minHeight: "0px",
				clear: "both",
				width: "100%",
				borderTop: "0.5px solid",
				borderBottom: "0.5px solid",
				borderColor: themeProp("bg"),
				height: "0px",
				marginTop: "10px",
				marginBottom: "10px",
			},
		});
	}
}

class Header extends React.Component {
	render() {
		return elem("h2", {
			style: {
				textAlign: "left",
				fontFamily: "Ubuntu, sans-serif",
				color: themeProp("text"),
				textTransform: "capitalize",
				margin: 0,
			}
		}, this.props.text);
	}
}
class App extends React.Component {
	render() {
		return elem("div", {
			children: [
				card("Preview", "canvas", {
					width: size,
					height: size,
				}),
				card("Settings", Controls, {
					controls: [
						"hi"
					],
				}),
				card("Theme", ThemeSelector),
			],
			style: {
				margin: "32px",
			}
		});
	}
}

ReactDOM.render(elem(App), document.getElementById("app"));