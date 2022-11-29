/* eslint-disable-next-line @typescript-eslint/no-var-requires */
const withPWA = require("next-pwa")({
	dest: "public",
});

/**
 * @type {import('next').NextConfig}
 */
module.exports = withPWA({
	compiler: {
		styledComponents: true,
	},
	reactStrictMode: true,
});
