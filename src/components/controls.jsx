const React = require("react");
const propTypes = require("prop-types");
const elem = React.createElement;

const Input = require("./input.jsx");
const Button = require("./button.jsx");

class Controls extends React.Component {
	constructor(props) {
		super(props);

		this.handleKeyDown = this.handleKeyDown.bind(this);
	}

	handleKeyDown(event) {
		if (event.nativeEvent.code === "Enter" && event.nativeEvent.metaKey) {
			this.props.renderToCanvas();
		}
	}

	renderInputs() {
		return this.props.controls.map(control => {
			const type = control.type || typeof control.default;
			return <Input
				{...control.props}
				description={control.description}
				id={control.key}
				key={control.key}
				onChange={event => {
					this.props.update(control.key, event.target.value || control.default);
				}}
				placeholder={control.placeholder || control.default}
				style={control.props && control.props.style}
				type={type === "color" ? "string" : type}
			/>;
		});
	}

	render() {
		const inputs = this.renderInputs();

		return <div onKeyDown={this.handleKeyDown}>
			{inputs}
			<Button label="Render" onClick={this.props.renderToCanvas} />
		</div>;
	}
}
Controls.defaultProps = {
	controls: [],
};
Controls.propTypes = {
	controls: propTypes.arrayOf(propTypes.object),
	renderToCanvas: propTypes.func,
	update: propTypes.func,
};

module.exports = Controls;