const React = require("react");
const elem = React.createElement;

class Header extends React.Component {
	render() {
		return <h2 style={{
			textAlign: "left",
			fontFamily: "Ubuntu, sans-serif",
			color: themeProp("text"),
			textTransform: "capitalize",
			margin: 0,
		}}>
			{this.props.text}
		</h2>;
	}
}
module.exports = Header;