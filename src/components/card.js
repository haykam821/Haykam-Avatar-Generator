class Card extends React.Component {
	render() {
		if (this.props.header) {
			this.props.children.unshift(elem(Header, {
				text: this.props.header,
			}));
		}

		return elem("div", {
			style: {
				backgroundColor: themeProp("cardBg"),
				padding: "16px",
				borderRadius: 8,
				marginTop: "24px",
				marginBottom: "24px",
			},
			children: this.props.children,
		});
	}
}

function card(header, child, ...opts) {
	return elem(Card, {
		children: [
			elem(child, ...opts),
		],
		header,
	});
}