const { withExpo } = require("@expo/next-adapter");

/** @type {import('next').NextConfig} */
const nextConfig = {
	// reanimated (and thus, Moti) doesn't work with strict mode currently...
	// https://github.com/nandorojo/moti/issues/224
	// https://github.com/necolas/react-native-web/pull/2330
	// https://github.com/nandorojo/moti/issues/224
	// once that gets fixed, set this back to true
	typescript: {
		ignoreBuildErrors: true,
	},
	reactStrictMode: false,
	images: {
		domains: ["i.pravatar.cc"],
	},
	transpilePackages: [
		"react-native",
		"react-native-web",
		"solito",
		"moti",
		"app",
		"react-native-reanimated",
		"nativewind",
		"react-native-gesture-handler",
		"@showtime-xyz/universal.tailwind",
		"@showtime-xyz/universal.text",
		"@showtime-xyz/universal.image",
		"@showtime-xyz/universal.view",
		"@showtime-xyz/universal.scroll-view",
		"@showtime-xyz/universal.button",
		"@showtime-xyz/universal.color-scheme",
		"@showtime-xyz/universal.safe-area",
		"@showtime-xyz/universal.pressable",
		"@showtime-xyz/universal.pressable-hover",
		"@showtime-xyz/universal.hooks",
		"@showtime-xyz/universal.utils",
		"@showtime-xyz/universal.input",
		"@showtime-xyz/universal.text-input",
		"@showtime-xyz/universal.label",
		"@showtime-xyz/universal.pressable-scale",
		"@showtime-xyz/universal.typography",
		"@showtime-xyz/universal.icon",
		"@showtime-xyz/universal.divider",
		"@showtime-xyz/universal.accordion",
		"@showtime-xyz/universal.avatar",
		"@showtime-xyz/universal.dropdown-menu",
		"@radix-ui/react-dropdown-menu",
		"zeego",
		"expo-linear-gradient",
		"react-native-svg",
		"@fortawesome/react-native-fontawesome",
		"@fortawesome/fontawesome-svg-core",
		"@fortawesome/free-solid-svg-icons",
		"schema-dts",
		"expo-localization",
		"expo-modules-core",
		"react-i18next",
		"i18next",
		"react-native-reanimated-carousel",
		"@vercel/speed-insights/next",
	],
};

module.exports = withExpo(nextConfig);
