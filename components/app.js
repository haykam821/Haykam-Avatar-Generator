class App extends React.Component {
	render() {
		return elem("div", {
			children: [
				card("Preview", "canvas", {
					width: size,
					height: size,
				}),
				card("Settings", Controls, {
					controls: [
						"hi"
					],
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