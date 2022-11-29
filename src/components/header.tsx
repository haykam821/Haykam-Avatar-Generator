import React from "react";
import styled from "styled-components";

interface HeaderProps {
	className?: string;
	text: string;
}
interface HeaderState {}

class HeaderUnstyled extends React.Component<HeaderProps, HeaderState> {
	render() {
		return <h2 className={this.props.className}>
			{this.props.text}
		</h2>;
	}
}
export default styled(HeaderUnstyled)`
	text-align: left;
	font-family: "Ubuntu", sans-serif;
	font-size: 1.8em;
	text-transform: capitalize;
	margin: 0;
	padding-bottom: 0.3em;
`;
