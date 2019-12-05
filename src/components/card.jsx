const React = require("react");
const propTypes = require("prop-types");

const styled = require("styled-components").default;

const Header = require("./header.jsx");

class CardUnstyled extends React.Component {
	render() {
		return <div className={this.props.className}>
			{this.props.header && <Header text={this.props.header} />}
			{this.props.children}
		</div>;
	}
}
CardUnstyled.propTypes = {
	children: propTypes.node,
	className: propTypes.string,
	header: propTypes.string,
};

const Card = styled(CardUnstyled)`
	background-color: gray;
	padding: 16px;
	border-radius: 8px;
	margin-bottom: 24px;
`;
module.exports = Card;