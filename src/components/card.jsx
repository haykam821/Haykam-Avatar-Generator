const React = require("react");
const styled = require("styled-components").default;

const Header = require("./header.jsx");

const Card = styled(class Card extends React.Component {
	render() {
		return <div className={this.props.className}>
			{this.props.header && <Header text={this.props.header} />}
			{this.props.children}
		</div>;
	}
})`
	background-color: gray;
	padding: 16px;
	border-radius: 8px;
	margin-bottom: 24px;
`;
module.exports = Card;