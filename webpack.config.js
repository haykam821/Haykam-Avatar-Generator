module.exports = {
	entry: "./src/index.js",
	mode: process.env.WEBPACK_MODE || "production",
	output: {
		path: __dirname + "/dist",
		filename: "index.js",
	},
};