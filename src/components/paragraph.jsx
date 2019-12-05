const React = require("react");

class Paragraph extends React.Component {
	render() {
		return <p style={{
			color: "#ddd",
			margin: 8,
			textAlign: "left",
			...this.props.style,
		}}>
			{this.props.text}
		</p>;
	}
}
module.exports = Paragraph;