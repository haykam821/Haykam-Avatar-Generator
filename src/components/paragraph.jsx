const React = require("react");
const propTypes = require("prop-types");

const styled = require("styled-components").default;

class ParagraphUnstyled extends React.Component {
	render() {
		return <p className={this.props.className} style={this.props.style}>
			{this.props.text}
		</p>;
	}
}
ParagraphUnstyled.propTypes = {
	className: propTypes.string,
	style: propTypes.object,
	text: propTypes.string,
};

const Paragraph = styled(ParagraphUnstyled)`
	color: #ddd;
	margin: 8px;
	text-align: left;
`;
module.exports = Paragraph;