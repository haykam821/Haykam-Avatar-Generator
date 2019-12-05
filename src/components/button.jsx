const React = require("react");
const styled = require("styled-components").default;

class ButtonUnstyled extends React.Component {
	render() {
		return <button {...this.props} className={this.props.className} style={this.props.style}>
			{this.props.label}
		</button>;
	}
}

const Button = styled(ButtonUnstyled)`
	background-color: #4473f4;
	color: white;

	border: none;
	display: block;

	font-family: 'Ubuntu';
	font-size: 14px;
	font-weight: bold;
	
	margin: 0 auto;
	padding: 8px;
	width: 100%;
`;
module.exports = Button;