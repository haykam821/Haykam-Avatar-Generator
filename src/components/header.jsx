const React = require("react");
const styled = require("styled-components").default;

const Header = styled(class Header extends React.Component {
	render() {
		return <h2 className={this.props.className}>
			{this.props.text}
		</h2>;
	}
})`
	text-align: left;
	font-family: "Ubuntu", sans-serif;
	color: "#ddd";
	text-transform: capitalize;
	margin: 0;
`;
module.exports = Header;