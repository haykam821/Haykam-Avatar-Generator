import { Ubuntu } from "@next/font/google";

export const FONT = Ubuntu({
	fallback: [
		"sans-serif",
	],
	subsets: [
		"latin",
	],
	weight: [
		"400",
		"500",
	],
});
