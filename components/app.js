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
				card("Theme", ThemeSelector),
			],
			style: {
				margin: "32px",
			}
		});
	}
}