const React = require("react");

class Paragraph extends React.Component {
	render() {
		return <p style={{
			color: themeProp("text"),
			textAlign: "left",
			margin: 8,
			...this.props.style,
		}}>
			{this.props.text}
		</p>;
	}
}
module.exports = Paragraph;