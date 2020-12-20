import Paragraph from "./paragraph";
import RawInput from "./raw-input";
import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";

interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	className?: string;
	description: string;
}
interface InputState {}

class InputUnstyled extends React.Component<InputProps, InputState> {
	public static readonly propTypes = {
		className: propTypes.string,
		description: propTypes.string,
		id: propTypes.string,
		style: propTypes.object,
	};

	render(): JSX.Element {
		return <div className={this.props.className}>
			<label htmlFor={this.props.id}>
				{this.props.description && <Paragraph text={this.props.description} />}
			</label>
			<RawInput id={this.props.id} onChange={this.props.onChange} style={this.props.style} type={this.props.type} placeholder={this.props.placeholder} />
		</div>;
	}
}
export default styled(InputUnstyled)`
	padding: 8px;
	padding-top: 0;
`;