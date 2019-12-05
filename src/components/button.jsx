const React = require("react");
const elem = React.createElement;

class Button extends React.Component {
	render() {
		return <button {...this.props} style={{
			display: "block",
			backgroundColor: "#4473f4",
			color: "white",
			margin: [
				0,
				"auto",
			],
			padding: 8,
			width: "100%",
			border: "none",
			fontFamily: "Ubuntu",
			fontWeight: "bold",
			fontSize: 14,
			...this.props.style,
		}}>
			{this.props.label}
		</button>;
	}
}
module.exports = Button;