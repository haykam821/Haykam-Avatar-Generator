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
				placeholder: control.default,
				id: control.key,
				description: control.description,
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