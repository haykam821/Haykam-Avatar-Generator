import React from "react";
import styled from "styled-components";

interface HRProps {
	className?: string;
}
interface HRState {}

class HRUnstyled extends React.Component<HRProps, HRState> {
	render(): JSX.Element {
		return <div className={this.props.className} />;
	}
}
export default styled(HRUnstyled)`
	border-color: #333;
	border-top: 0.5px solid;
	border-bottom: 0.5px solid;

	margin-top: 10px;
	margin-bottom: 10px;

	clear: both;

	height: 0px;
	min-height: 0px;
	width: 100%;
`;
