const React = require("react");
const elem = React.createElement;

const Paragraph = require("./paragraph.js");

class Input extends React.Component {
	render() {
		return elem("div", {
			children: [
				this.props.description ? elem(Paragraph, {
					text: this.props.description,
				}) : "",
				elem("input", {
					...this.props,
					style: {
						display: "block",
						backgroundColor: themeProp("bg"),
						color: "white",
						padding: 8,
						width: "100%",
						border: "none",
						fontFamily: "Ubuntu",
						fontSize: 14,
						...this.props.style,
					},
				}),
			],
			style: {
				padding: 8,
			}
		});
	}
}
module.exports = Input;