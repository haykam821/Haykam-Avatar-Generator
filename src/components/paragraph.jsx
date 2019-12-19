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
	text-align: left;
	font-size: 1.2em;

	margin: 0;
	padding: 12px 0;
	padding-bottom: 8px;
`;
module.exports = Paragraph;