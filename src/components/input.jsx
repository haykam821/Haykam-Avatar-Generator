const React = require("react");
const elem = React.createElement;
React.__spread = Object.assign;

const styled = require("styled-components").default;

const Paragraph = require("./paragraph.jsx");

class InputUnstyled extends React.Component {
	render() {
		return <div className={this.props.className}>
			{this.props.description ? <Paragraph text={this.props.description} /> : null}
			<input {...this.props} style={{
				backgroundColor: "#333",
				border: "none",
				color: "white",
				display: "block",
				fontFamily: "Ubuntu",
				fontSize: 14,
				padding: 8,
				width: "100%",
				...this.props.style,
			}} />
		</div>;
	}
}

const Input = styled(InputUnstyled)`
	padding: 8px;
`;
module.exports = Input;