import React, { MouseEventHandler } from "react";

import { FONT } from "../font";
import styled from "styled-components";

interface ButtonProps {
	className?: string;
	label: string;
	onClick: MouseEventHandler<HTMLButtonElement>;
	style?: Record<string, unknown>;
}
interface ButtonState {}

class ButtonUnstyled extends React.Component<ButtonProps, ButtonState> {
	render() {
		return <button onClick={this.props.onClick} className={this.props.className} style={this.props.style}>
			{this.props.label}
		</button>;
	}
}
export default styled(ButtonUnstyled)`
	background-color: #1976d2;
	color: white;
	font-weight: 500;

	border: none;
	border-radius: 8px;
	display: block;

	${FONT.style}
	font-size: 1.2em;

	margin: 0 8px;
	margin-top: 16px;
	padding: 8px;
	width: calc(100% - 16px);
`;
