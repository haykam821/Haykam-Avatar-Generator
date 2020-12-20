import Header from "./header";
import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";

interface CardProps {
	className?: string;
	header: string;
}
interface CardState {}

class CardUnstyled extends React.Component<CardProps, CardState> {
	public static readonly propTypes = {
		children: propTypes.node,
		className: propTypes.string,
		header: propTypes.string,
	};

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

	background-color: ${props => props.theme.cardBackground};
`;