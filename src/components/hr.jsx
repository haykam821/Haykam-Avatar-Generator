const React = require("react");
const elem = React.createElement;

class HR extends React.Component {
	render() {
		return <div style={{
			minHeight: "0px",
			clear: "both",
			width: "100%",
			borderTop: "0.5px solid",
			borderBottom: "0.5px solid",
			borderColor: "#333",
			height: "0px",
			marginTop: "10px",
			marginBottom: "10px",
		}} />;
	}
}
module.exports = HR;