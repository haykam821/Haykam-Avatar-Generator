const React = require("react");
const elem = React.createElement;

const Header = require("./header.jsx");

class Card extends React.Component {
	render() {
		if (this.props.header) {
			this.props.children.unshift(<Header text={this.props.header} />);
		}

		return <div style={{
			backgroundColor: themeProp("cardBg"),
			padding: "16px",
			borderRadius: 8,
			marginTop: "24px",
			marginBottom: "24px",
		}}>
			{this.props.children}
		</div>;
	}
}

function card(header, child, ...opts) {
	return <Card header={header}>
		{[React.createElement(child, opts)]}
	</Card>;
}
module.exports = card;