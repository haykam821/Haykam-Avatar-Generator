import Button from "./button";
import OptionManager from "../option/option-manager";
import Paragraph from "./paragraph";
import RawInput from "./raw-input";
import React from "react";
import styled from "styled-components";

enum OptionFilter {
	DEFAULTED,
	FULL,
}

const defaultFilter: OptionFilter = OptionFilter.DEFAULTED;

interface SharingLinkProps {
	className?: string;
	location: Location;
	optionManager: OptionManager;
}
interface SharingLinkState {
	filter: OptionFilter;
	link: string;
}

class SharingLinkUnstyled extends React.Component<SharingLinkProps, SharingLinkState> {
	constructor(props: Readonly<SharingLinkProps>) {
		super(props);

		this.state = {
			filter: defaultFilter,
			link: this.getLink(defaultFilter),
		};

		this.updateLink = this.updateLink.bind(this);
		this.props.optionManager.addEventListener("update", this.updateLink);

		this.invertFilter = this.invertFilter.bind(this);
		this.attemptShare = this.attemptShare.bind(this);
	}

	componentWillUnmount() {
		this.props.optionManager.removeEventListener("update", this.updateLink);
	}

	private getLink(filter: OptionFilter): string {
		const url = new URL(this.props.location.href);

		const options = Object.entries(this.props.optionManager.getAll());
		for (const [key, value] of options) {
			if (value === undefined) continue;
			if (filter === OptionFilter.DEFAULTED && this.props.optionManager.isDefault(key)) continue;

			url.searchParams.set(key, value + "");
		}

		return url.toString();
	}

	private updateLink(): void {
		this.setState({
			link: this.getLink(this.state.filter),
		});
	}

	private invertFilter(): void {
		const filter = this.state.filter === OptionFilter.DEFAULTED ? OptionFilter.FULL : OptionFilter.DEFAULTED;
		this.setState({
			filter,
			link: this.getLink(filter),
		});
	}

	private canShare(): boolean {
		return typeof navigator.share === "function";
	}

	private attemptShare(): void {
		if (this.canShare()) {
			navigator.share({
				title: "Avatar",
				url: this.state.link,
			});
		}
	}

	render(): JSX.Element {
		return <div className={this.props.className} onDoubleClick={this.invertFilter}>
			<Paragraph text="Copy the following link to share the avatar with others:" />
			<RawInput readOnly value={this.state.link} />
			{this.canShare() && <Button label="Share" onClick={this.attemptShare} />}
		</div>;
	}
}
export default styled(SharingLinkUnstyled)`
	padding: 8px;
	padding-top: 0;

	& > ${Button} {
		margin-left: unset;
		margin-right: unset;
	}
`;
