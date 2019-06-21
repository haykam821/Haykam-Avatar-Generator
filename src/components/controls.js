const React = require("react");
const elem = React.createElement;

const Input = require("./input.js");
const Button = require("./button.js");

class Controls extends React.Component {
	constructor(props) {
		super(props);
		this.fields = {};
	}

	render() {
		const inputs = this.props.controls.map(control => {
			this.fields[control.key] = control.default;
			return elem(Input, {
				...control.props,
				style: control.props && control.props.style,
				placeholder: control.placeholder || control.default,
				id: control.key,
				description: control.description,
				onChange: event => this.fields[event.target.id] = event.target.value || control.default,
			});
		});
		return elem("div", {
			children: [
				inputs,
				elem(Button, {
					onClick: this.renderToCanvas(),
					label: "Render",
				}),
			],
			onKeyDown: event => {
				if (event.nativeEvent.code === "Enter" && event.nativeEvent.metaKey) {
					this.renderToCanvas();
				}
			},
		});
	}

	componentDidMount() {
		this.renderToCanvas();
	}

	renderToCanvas() {
		const canvasElem = document.getElementById("canvas");
		if (canvasElem) {
			generate(canvasElem.getContext("2d"), this.fields);
		}
	}
}
Controls.defaultProps = {
	controls: [],
};
module.exports = Controls;