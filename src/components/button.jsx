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
	background-color: ${props => props.theme.buttonBackground};
	color: ${props => props.theme.buttonText};
	font-weight: 500;

	border: none;
	border-radius: 8px;
	display: block;

	font-family: 'Ubuntu';
	font-size: 1.2em;

	margin: 0 8px;
	margin-top: 16px;
	padding: 8px;
	width: calc(100% - 16px);
`;
module.exports = Button;