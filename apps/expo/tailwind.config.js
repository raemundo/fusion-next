// @ts-check

const { theme } = require("app/design/tailwind/theme");

/**
 * @type {import('tailwindcss').Config}
 */
module.exports = {
	content: [
		"./App.tsx",
		"../../packages/**/*.{js,ts,jsx,tsx}",
		"../../node_modules/@showtime-xyz/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		...theme,
	},
	plugins: [],
};
