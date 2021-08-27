/* eslint-disable @typescript-eslint/no-var-requires */
const { resolve } = require("path");

const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const ManifestPlugin = require("webpack-pwa-manifest");

module.exports = {
	entry: "./src/index.tsx",
	mode: process.env.WEBPACK_MODE || "production",
	module: {
		rules: [{
			include: resolve(__dirname, "./src"),
			loader: "ts-loader",
			options: {
				transpileOnly: true,
			},
			test: /\.tsx?$/,
		}],
	},
	output: {
		filename: "index.js",
		path: resolve(__dirname, "./dist"),
	},
	plugins: [
		new ForkTsCheckerWebpackPlugin(),
		new ManifestPlugin({
			/* eslint-disable camelcase */
			display: "standalone",
			fingerprints: false,
			inject: false,
			lang: "en",
			name: "Haykam Avatar Generator",
			short_name: "Haykam Avatar",
			/* eslint-enable camelcase */
		}),
	],
	resolve: {
		extensions: [
			".js",
			".ts",
			".tsx",
		],
	},
};
