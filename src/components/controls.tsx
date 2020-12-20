import Button from "./button";
import OptionManager from "../option/option-manager";
import OptionRow from "./option-row";
import React from "react";
import propTypes from "prop-types";

interface ControlsProps {
	className?: string;
	optionManager: OptionManager;
	renderToCanvas: () => void;
	update: (key: string, value: unknown) => void;
}
interface ControlsState {}

export default class Controls extends React.Component<ControlsProps, ControlsState> {
	public static readonly propTypes = {
		renderToCanvas: propTypes.func,
		update: propTypes.func,
	};

	constructor(props: Readonly<ControlsProps>) {
		super(props);
		this.handleKeyDown = this.handleKeyDown.bind(this);
	}

	handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>): void {
		if (event.nativeEvent.code === "Enter" && event.nativeEvent.metaKey) {
			this.props.renderToCanvas();
		}
	}

	renderInputs(): JSX.Element[] {
		return this.props.optionManager.getOptionArray().map(option => {
			return <OptionRow key={option.key} option={option} update={this.props.update} />;
		});
	}

	render(): JSX.Element {
		const inputs = this.renderInputs();

		return <div onKeyDown={this.handleKeyDown}>
			{inputs}
			<Button label="Render" onClick={this.props.renderToCanvas} />
		</div>;
	}
}