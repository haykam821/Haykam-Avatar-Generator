const debug = require("debug");

const log = debug("haykam-avatar-generator");
module.exports = {
	main: log,
	editor: log.extend("editor"),
	render: log.extend("render"),
};