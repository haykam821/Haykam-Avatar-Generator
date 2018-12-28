class App extends React.Component {
	render() {
		return elem("div", {
			children: [
				card("Preview", "canvas", {
					width: size,
					height: size,
					id: "canvas",
					style: {
						backgroundColor: "white",
						border: "1px solid black",
					},
				}),
				card("Settings", Controls, {
					controls: [{
						key: "bgColor",
						default: "#cdcdcd",
					}, {
						key: "lineSpacing",
						default: 16,
					}, {
						key: "lineColor",
						default: "#c6c6c6",
					}, {
						key: "squareColor",
						default: "#8aff69",
					}, {
						key: "pentagonColor",
						default: "#768cfc",
					}, {
						key: "triangleColor",
						default: "#f177dd",
					}, {
						key: "size",
					}],
				}),
				card("Theme", "div", {
					children: [
						elem(Paragraph, {
							text: "You can select a theme.",
						}),
						elem(ThemeSelector),
					],
				}),
			],
			style: {
				margin: "32px",
			}
		});
	}
}