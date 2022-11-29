import React from "react";
import styled from "styled-components";

interface ParagraphProps {
	className?: string;
	style?: Record<string, unknown>;
	text: string;
}
interface ParagraphState {}

class ParagraphUnstyled extends React.Component<ParagraphProps, ParagraphState> {
	render() {
		return <p className={this.props.className} style={this.props.style}>
			{this.props.text}
		</p>;
	}
}
export default styled(ParagraphUnstyled)`
	text-align: left;
	font-size: 1.2em;

	margin: 0;
	padding: 12px 0;
	padding-bottom: 8px;
`;
