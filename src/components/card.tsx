import React, { ReactNode } from "react";

import Header from "./header";
import styled from "styled-components";

interface CardProps {
	className?: string;
	header: string;
	children?: ReactNode;
}
interface CardState {}

class CardUnstyled extends React.Component<CardProps, CardState> {
	render() {
		return <div className={this.props.className}>
			{this.props.header && <Header text={this.props.header} />}
			{this.props.children}
		</div>;
	}
}
export default styled(CardUnstyled)`
	padding: 16px;
	border-radius: 8px;

	&:not(:last-child) {
		margin-bottom: 24px;
	}

	background-color: #c7c7c7;

	@media (prefers-color-scheme: dark) {
		background-color: #424242;
	}
`;
