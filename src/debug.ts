import debug from "debug";

const log = debug("haykam-avatar-generator");
export const loggers = {
	editor: log.extend("editor"),
	main: log,
	render: log.extend("render"),
};
