const React = require("react");
const propTypes = require("prop-types");

const styled = require("styled-components").default;

class ButtonUnstyled extends React.Component {
	render() {
		return <button {...this.props} className={this.props.className} style={this.props.style}>
			{this.props.label}
		</button>;
	}
}
ButtonUnstyled.propTypes = {
	className: propTypes.string,
	label: propTypes.string,
	style: propTypes.object,
};

const Button = styled(ButtonUnstyled)`
	background-color: #4473f4;
	color: white;

	border: none;
	display: block;

	font-family: 'Ubuntu';
	font-size: 1.2em;
	font-weight: bold;

	margin: 0 8px;
	margin-top: 16px;
	padding: 8px;
	width: calc(100% - 16px);
`;
module.exports = Button;