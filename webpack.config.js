module.exports = {
	entry: "./src/index.jsx",
	mode: process.env.WEBPACK_MODE || "production",
	module: {
		rules: [{
			test: /\.jsx$/,
			use: "jsx-loader",
		}],
	},
	output: {
		path: __dirname + "/dist",
		filename: "index.js",
	},
};