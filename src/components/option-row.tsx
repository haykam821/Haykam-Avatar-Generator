import Input from "./input";
import Option from "../option/option";
import React from "react";

interface OptionRowProps<T> {
	option: Option<T>;
	update: (key: string, value: unknown) => void;
}
interface OptionRowState {}

export default class OptionRow<T> extends React.Component<OptionRowProps<T>, OptionRowState> {
	constructor(props: Readonly<OptionRowProps<T>>) {
		super(props);
		this.onChange = this.onChange.bind(this);
	}

	onChange(event: React.ChangeEvent<HTMLInputElement>): void {
		this.props.update(this.props.option.key, event.target.value || this.props.option.defaultValue);
	}

	getDefaultValue() : string | number {
		if (String(this.props.option.value) === String(this.props.option.defaultValue)) return null;
		return this.props.option.value as unknown as string | number;
	}

	getType(): string {
		const type = this.props.option.type || typeof this.props.option.value;
		return type === "color" ? "string" : type;
	}

	getStyle(): Record<string, unknown> {
		return this.props.option.props && this.props.option.props.style as Record<string, unknown>;
	}

	render(): JSX.Element {
		return <Input
			{...this.props.option.props}
			description={this.props.option.description}
			id={this.props.option.key}
			key={this.props.option.key}
			onChange={this.onChange}
			placeholder={this.props.option.placeholder}
			defaultValue={this.getDefaultValue()}
			style={this.getStyle()}
			type={this.getType()}
		/>;
	}
}