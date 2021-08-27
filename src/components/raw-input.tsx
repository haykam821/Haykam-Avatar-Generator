import React from "react";
import styled from "styled-components";

interface RawInputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {}
interface RawInputState {}

class RawInputUnstyled extends React.Component<RawInputProps, RawInputState> {
	render(): JSX.Element {
		return <input {...this.props} />;
	}
}
export default styled(RawInputUnstyled)`
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
`;
