"use client";

import Header from "app/components/Header";
import Footer from "app/components/Footer";
import { Instagram } from "@showtime-xyz/universal.icon";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";
import { useIsDarkMode } from "@showtime-xyz/universal.hooks";
import { Text } from "@showtime-xyz/universal.text";

const Layout = ({ children }) => {
	const { t } = useTranslation();
	const isDark = useIsDarkMode();

	const headerProp = {
		companyInfo: {
			// name: t("company_name"),
			logo: (
				// <Image
				// 	tw="dark:invert"
				// 	source="/images/LOGO 1.webp"
				// 	alt="InstaCodigo Logo"
				// 	width={24}
				// 	height={24}
				// />
				<Text tw="font-primary text-2xl font-bold text-black dark:text-white">
					{t("company_name")}
				</Text>
			),
		},
		headerLinks: [
			// { text: t("header_link_1_text"), link: "/" },
			{ text: t("header_link_2_text"), link: "/services" },
			// { text: t("header_link_3_text"), link: "/products" },
			{ text: t("header_link_4_text"), link: "/about-us" },
			{
				text: t("header_primary_button_text"),
				link: "/contact-us",
			},
		],
		// headerButtons: {
		// 	primaryButton: {
		// 		text: t("header_primary_button_text"),
		// 		link: "/contact-us",
		// 	},
		// },
	};

	const footerProp = {
		// centered: true,
		companyInfo: {
			// logo: (
			// 	<Image
			// 		source="/images/LOGO 1.webp"
			// 		tw="dark:invert"
			// 		alt="InstaCodigo Logo"
			// 		width={24}
			// 		height={24}
			// 	/>
			// ),
			name: t("company_name"),
			email: t("company_email"),
			// phone: t("company_phone"),
		},
		footerLinks: [
			{
				title: t("footer_link_title_1"),
				links: [
					{ text: t("footer_link_3_text"), link: "/about-us" },
					{ text: t("footer_link_4_text"), link: "/contact-us" },
				],
			},
			{
				title: t("footer_link_title_2"),
				links: [
					{ text: t("footer_link_1_text"), link: "/services" },
					// { text: t("footer_link_2_text"), link: "/products" },
				],
			},
		],
		// socialLinks: [
		// 	{
		// 		text: t("footer_social_link_1_text"),
		// 		link: "https://www.linkedin.com/company/zov-furniture-l-l-c/",
		// 		icon: (
		// 			<FontAwesomeIcon
		// 				icon={faLinkedin}
		// 				size={20}
		// 				color={isDark ? "white" : "black"}
		// 			/>
		// 		),
		// 	},
		// 	{
		// 		text: t("footer_social_link_2_text"),
		// 		link: "https://www.instagram.com/zov.furniture.llc/",
		// 		icon: (
		// 			<Instagram
		// 				width={20}
		// 				height={20}
		// 				color={isDark ? "white" : "black"}
		// 			/>
		// 		),
		// 	},
		// ],
	};

	return (
		<>
			<Header headerProp={headerProp} />
			{children}
			<Footer footerProp={footerProp} />
		</>
	);
};

export { Layout };
