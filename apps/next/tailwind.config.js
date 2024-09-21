const { theme } = require("app/design/tailwind/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: [
		"./pages/**/*.{js,jsx,ts,tsx}",
		"./app/**/*.{js,jsx,ts,tsx}",
		"./src/**/*.{js,ts,jsx,tsx}",
		"../../packages/**/*.{js,ts,jsx,tsx}",
		"../../node_modules/@showtime-xyz/**/*.{js,ts,jsx,tsx}",
	],
	plugins: [require("nativewind/tailwind/css")],
	important: "html",
	theme: {
		...theme,
	},
};
