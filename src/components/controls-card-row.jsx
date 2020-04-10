const React = require("react");
const propTypes = require("prop-types");

const styled = require("styled-components").default;

const Card = require("./card.jsx");
const Controls = require("./controls.jsx");

class ControlsCardRowUnstyled extends React.Component {
	render() {
		return <div className={this.props.className}>
			{this.props.cards.map(([ key, controls ]) => {
				const header = key[0].toUpperCase() + key.slice(1, Infinity);
				return <Card header={header} key={key}>
					<Controls update={this.props.update} renderToCanvas={this.props.renderToCanvas} controls={controls} />
				</Card>;
			})}
		</div>;
	}
}
ControlsCardRowUnstyled.propTypes = {
	cards: propTypes.arrayOf(propTypes.array),
	className: propTypes.string,
	renderToCanvas: propTypes.func,
	update: propTypes.func,
};

const ControlsCardRow = styled(ControlsCardRowUnstyled)`
	display: flex;
	
	margin-bottom: 24px;

	& > ${Card} {
		flex: 1;
 
		margin-bottom: 0;

		&:not(:last-child) {
			margin-right: 24px;
		}
	}
`;
module.exports = ControlsCardRow;