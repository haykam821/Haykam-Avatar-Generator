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