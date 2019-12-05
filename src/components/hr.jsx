const React = require("react");
const elem = React.createElement;

class HR extends React.Component {
	render() {
		return <div style={{
			borderBottom: "0.5px solid",
			borderColor: "#333",
			borderTop: "0.5px solid",
			clear: "both",
			height: "0px",
			marginBottom: "10px",
			marginTop: "10px",
			minHeight: "0px",
			width: "100%",
		}} />;
	}
}
module.exports = HR;