const React = require("react");
const propTypes = require("prop-types");

const styled = require("styled-components").default;

const Paragraph = require("./paragraph.jsx");

class InputUnstyled extends React.Component {
	render() {
		return <div className={this.props.className}>
			<label htmlFor={this.props.id}>
				{this.props.description && <Paragraph text={this.props.description} />}
			</label>
			<input {...this.props} />
		</div>;
	}
}
InputUnstyled.propTypes = {
	className: propTypes.string,
	description: propTypes.string,
	id: propTypes.string,
	style: propTypes.object,
};

const Input = styled(InputUnstyled)`
	padding: 8px;
	padding-top: 0;

	& > input {
		background-color: ${props => props.theme.inputBackground};
		color: ${props => props.theme.inputText};

		border: none;
		border-radius: 8px;
		display: block;
		font-family: 'Ubuntu';
		font-size: 1.1em;
		padding: 8px;
		width: 100%;

		&::placeholder {
			color: ${props => props.theme.inputPlaceholderText};
		}
	}
`;
module.exports = Input;