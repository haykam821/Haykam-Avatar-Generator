const React = require("react");
const elem = React.createElement;

const Input = require("./input.jsx");
const Button = require("./button.jsx");

class Controls extends React.Component {
	render() {
		const inputs = this.props.controls.map(control => {
			return elem(Input, {
				...control.props,
				description: control.description,
				id: control.key,
				key: control.key,
				onChange: event => {
					this.props.update(control.key, event.target.value || control.default);
				},
				placeholder: control.placeholder || control.default,
				style: control.props && control.props.style,
			});
		});
		return <div onKeyDown={event => {
			if (event.nativeEvent.code === "Enter" && event.nativeEvent.metaKey) {
				this.props.renderToCanvas();
			}
		}}>
			{inputs}
			<Button label="Render" onClick={this.props.renderToCanvas} />
		</div>;
	}
}
Controls.defaultProps = {
	controls: [],
};
module.exports = Controls;