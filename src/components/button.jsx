const React = require("react");
const elem = React.createElement;

class Button extends React.Component {
	render() {
		return <button {...this.props} style={{
			backgroundColor: "#4473f4",
			border: "none",
			color: "white",
			display: "block",
			fontFamily: "Ubuntu",
			fontSize: 14,
			fontWeight: "bold",
			margin: [
				0,
				"auto",
			],
			padding: 8,
			width: "100%",
			...this.props.style,
		}}>
			{this.props.label}
		</button>;
	}
}
module.exports = Button;