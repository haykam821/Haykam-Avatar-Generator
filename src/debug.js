const debug = require("debug");

const log = debug("haykam-avatar-generator");
module.exports = {
	editor: log.extend("editor"),
	main: log,
	render: log.extend("render"),
	theme: log.extend("theme"),
};