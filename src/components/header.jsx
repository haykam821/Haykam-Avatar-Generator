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
	color: "#ddd";
	text-transform: capitalize;
	margin: 0;
`;
module.exports = Header;