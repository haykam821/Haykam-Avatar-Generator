class ThemeSelector extends React.Component {
	render() {
		return elem("select", {
			children: Object.entries(themes).map(opt => {
				return elem("option", {
					value: opt[0],
				}, opt[1].name);
			}),
			defaultValue: themeID,
			onChange: event => {
				localStorage.setItem("haykam-avatar-generator:theme", event.target.value);
				location.reload();
			}
		});
	}
}