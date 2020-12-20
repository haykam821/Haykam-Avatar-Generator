import Button from "./button";
import { Control } from "../controls";
import Input from "./input";
import React from "react";
import propTypes from "prop-types";

interface ControlsProps {
	controls: Control[];
	className?: string;
	renderToCanvas: () => void;
	update: (key: string, value: unknown) => void;
}
interface ControlsState {}

export default class Controls extends React.Component<ControlsProps, ControlsState> {
	public static readonly defaultProps = {
		controls: [] as Control[],
	};
	public static readonly propTypes = {
		controls: propTypes.arrayOf(propTypes.object),
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
				placeholder={control.placeholder || control.default as string}
				style={control.props && control.props.style as Record<string, unknown>}
				type={type === "color" ? "string" : type}
			/>;
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