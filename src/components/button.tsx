import React, { MouseEventHandler } from "react";

import propTypes from "prop-types";
import styled from "styled-components";

interface ButtonProps {
	className?: string;
	label: string;
	onClick: MouseEventHandler<HTMLButtonElement>;
	style?: Record<string, unknown>;
}
interface ButtonState {}

class ButtonUnstyled extends React.Component<ButtonProps, ButtonState> {
	public static readonly propTypes = {
		className: propTypes.string,
		label: propTypes.string,
		style: propTypes.object,
	};

	render() {
		return <button onClick={this.props.onClick} className={this.props.className} style={this.props.style}>
			{this.props.label}
		</button>;
	}
}
export default styled(ButtonUnstyled)`
	background-color: ${props => props.theme.buttonBackground};
	color: ${props => props.theme.buttonText};
	font-weight: 500;

	border: none;
	border-radius: 8px;
	display: block;

	font-family: 'Ubuntu';
	font-size: 1.2em;

	margin: 0 8px;
	margin-top: 16px;
	padding: 8px;
	width: calc(100% - 16px);
`;