const React = require("react");
const styled = require("styled-components").default;

class HRUnstyled extends React.Component {
	render() {
		return <div className={this.props.className} />;
	}
}

const HR = styled(HRUnstyled)`
	border-color: #333;
	border-top: 0.5px solid;
	border-bottom: 0.5px solid;

	margin-top: 10px;
	margin-bottom: 10px;

	clear: both;

	height: 0px;
	min-height: 0px;
	width: 100%;
`;
module.exports = HR;