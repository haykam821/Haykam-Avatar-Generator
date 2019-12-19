const React = require("react");
const propTypes = require("prop-types");

const styled = require("styled-components").default;

class HeaderUnstyled extends React.Component {
	render() {
		return <h2 className={this.props.className}>
			{this.props.text}
		</h2>;
	}
}
HeaderUnstyled.propTypes = {
	className: propTypes.string,
	text: propTypes.string,
};

const Header = styled(HeaderUnstyled)`
	text-align: left;
	font-family: "Ubuntu", sans-serif;
	font-size: 1.8em;
	text-transform: capitalize;
	margin: 0;
	padding-bottom: 0.3em;
`;
module.exports = Header;