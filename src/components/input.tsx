import React, { ChangeEventHandler } from "react";

import Paragraph from "./paragraph";
import propTypes from "prop-types";
import styled from "styled-components";

interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	className?: string;
	description: string;
	id: string;
	onChange: ChangeEventHandler<HTMLInputElement>;
	style?: Record<string, unknown>;
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
			<input {...this.props} />
		</div>;
	}
}
export default styled(InputUnstyled)`
	padding: 8px;
	padding-top: 0;

	& > input {
		background-color: ${props => props.theme.inputBackground};
		color: ${props => props.theme.inputText};

		border: none;
		border-radius: 8px;
		display: block;
		font-family: 'Ubuntu';
		font-size: 1.1em;
		padding: 8px;
		width: 100%;

		&::placeholder {
			color: ${props => props.theme.inputPlaceholderText};
		}
	}
`;