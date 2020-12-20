import OptionManager from "../option/option-manager";
import Paragraph from "./paragraph";
import RawInput from "./raw-input";
import React from "react";
import styled from "styled-components";

interface SharingLinkProps {
	className?: string;
	location: Location;
	optionManager: OptionManager;
}
interface SharingLinkState {
	link: string;
}

class SharingLinkUnstyled extends React.Component<SharingLinkProps, SharingLinkState> {
	constructor(props: Readonly<SharingLinkProps>) {
		super(props);

		this.state = {
			link: this.getLink(),
		};

		this.updateLink = this.updateLink.bind(this);
		this.props.optionManager.addEventListener("update", this.updateLink);
	}

	componentWillUnmount() {
		this.props.optionManager.removeEventListener("update", this.updateLink);
	}

	private getLink(): string {
		const url = new URL(this.props.location.href);

		const options = Object.entries(this.props.optionManager.getAll());
		for (const [key, value] of options) {
			if (value !== undefined && !this.props.optionManager.isDefault(key)) {
				url.searchParams.set(key, value + "");
			}
		}

		return url.toString();
	}

	private updateLink(): void {
		this.setState({
			link: this.getLink(),
		});
	}

	render(): JSX.Element {
		return <div className={this.props.className}>
			<Paragraph text="Copy the following link to share the avatar with others:" />
			<RawInput readOnly value={this.state.link} />
		</div>;
	}
}
export default styled(SharingLinkUnstyled)`
	padding: 8px;
	padding-top: 0;
`;