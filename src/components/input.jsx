const React = require("react");
const propTypes = require("prop-types");

const styled = require("styled-components").default;

const Paragraph = require("./paragraph.jsx");

class InputUnstyled extends React.Component {
	render() {
		return <div className={this.props.className}>
			{this.props.description && <Paragraph text={this.props.description} />}
			<input {...this.props} />
		</div>;
	}
}
InputUnstyled.propTypes = {
	className: propTypes.string,
	description: propTypes.string,
	style: propTypes.object,
};

const Input = styled(InputUnstyled)`
	padding: 8px;
	padding-top: 0;

	& > input {
		background-color: #333;
		border: none;
		color: white;
		display: block;
		font-family: 'Ubuntu';
		font-size: 1.1em;
		padding: 8px;
		width: 100%;
	}
`;
module.exports = Input;