class Controls extends React.Component {
	constructor(props) {
		super(props);
		this.fields = {};
	}

	render() {
		const inputs = this.props.controls.map(control => {
			this.fields[control.key] = control.default;
			return elem("input", {
				...control.props,
				style: {
					display: "block",
					margin: "auto",
					marginTop: 0,
					marginBottom: 24,
					...control.props && control.props.style,
				},
				default: control.default,
				id: control.key,
				onChange: event => this.fields[event.target.id] = event.target.value || control.default,
			});
		});
		return elem("div", {
			children: [
				inputs,
				elem(Button, {
					onClick: () => generate(document.getElementById("canvas").getContext("2d"), this.fields),
					label: "Render",
				}),
			],
		});
	}
}
Controls.defaultProps = {
	controls: [],
};