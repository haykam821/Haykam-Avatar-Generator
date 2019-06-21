const React = require("react");
const elem = React.createElement;

class Paragraph extends React.Component {
	render() {
		return elem("p", {
			style: {
				color: themeProp("text"),
				textAlign: "left",
				margin: 8,
				...this.props.style,
			},
		}, this.props.text);
	}
}
module.exports = Paragraph;