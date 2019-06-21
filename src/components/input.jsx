const React = require("react");
const elem = React.createElement;
React.__spread = Object.assign;

const Paragraph = require("./paragraph.jsx");

class Input extends React.Component {
	render() {
		return <div style={{
			padding: 8,
		}}>
			{this.props.description ? elem(Paragraph, {
				text: this.props.description,
			}) : ""}
			<input {...this.props} style={{
				display: "block",
				backgroundColor: themeProp("bg"),
				color: "white",
				padding: 8,
				width: "100%",
				border: "none",
				fontFamily: "Ubuntu",
				fontSize: 14,
				...this.props.style,
			}} />
		</div>;
	}
}
module.exports = Input;