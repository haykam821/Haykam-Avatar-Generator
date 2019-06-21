const React = require("react");
const elem = React.createElement;

class ThemeSelector extends React.Component {
	render() {
		return <select defaultValue={themeID} onChange={this.updateTheme.bind(this)}>
			{Object.entries(themes).map(opt => {
				if (opt[1].hidden) return;

				return elem("option", {
					value: opt[0],
				}, opt[1].name);
			})}
		</select>
	}

	updateTheme(event) {
		localStorage.setItem("haykam-avatar-generator:theme", event.target.value);
		try {
			updateTheme();
			render();
		} catch (error) {
			console.error("Failed to re-render with new theme, but that's okay. We can just reload.", error);
			location.reload();
		}
	}
}
module.exports = ThemeSelector;