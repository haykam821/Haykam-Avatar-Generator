class Paragraph extends React.Component {
	render() {
		return elem("p", {
			style: {
				color: themeProp("text"),
				textAlign: "left",
			},
		}, this.props.text);
	}
}