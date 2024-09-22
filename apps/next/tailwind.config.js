const { theme } = require("app/design/tailwind/theme");
const {
	default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import("tailwindcss").Config} */
module.exports = {
	darkMode: "class",
	content: [
		"./pages/**/*.{js,jsx,ts,tsx}",
		"./app/**/*.{js,jsx,ts,tsx}",
		"./src/**/*.{js,ts,jsx,tsx}",
		"../../packages/**/*.{js,ts,jsx,tsx}",
		"../../node_modules/@showtime-xyz/**/*.{js,ts,jsx,tsx}",
	],
	plugins: [require("nativewind/tailwind/css"), addVariablesForColors],
	important: "html",
	theme: {
		...theme,
		extend: {
			animation: {
				scroll:
					"scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
			},
			keyframes: {
				scroll: {
					to: {
						transform: "translate(calc(-50% - 0.5rem))",
					},
				},
			},
		},
	},
};

function addVariablesForColors({ addBase, theme }) {
	let allColors = flattenColorPalette(theme("colors"));
	let newVars = Object.fromEntries(
		Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
	);

	addBase({
		":root": newVars,
	});
}
