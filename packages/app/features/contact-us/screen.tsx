"use client";

import ScreenWrapper from "app/components/ScreenWrapper";
import ContactUs from "app/components/ContactUs/index";
import MainTitle from "app/components/MainTitle";
import Map from "app/components/Map";
import Poster from "app/components/Poster";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Facebook, Instagram, Twitter } from "@showtime-xyz/universal.icon";
import { useIsDarkMode } from "@showtime-xyz/universal.hooks";
import PosterImage from "app/components/Poster/PosterImage";

const ContactUsScreen = () => {
	const { t } = useTranslation();
	const isDarkMode = useIsDarkMode();

	const poster = {
		title: t("contact_us_poster_title"),
		subtitle: t("contact_us_poster_subtitle"),
		display: (
			<PosterImage
				source="/images/image-10.jpg"
				alt={t("contact_us_poster_title")}
				tw="object-none object-bottom"
			/>
		),
	};

	const contactUs = {
		contactFormProp: {
			email: t("company_email"),
			formTitle: t("contact_form_title"),
			firstNameLabel: t("contact_form_first_name"),
			lastNameLabel: t("contact_form_last_name"),
			emailLabel: t("contact_form_email"),
			phoneLabel: t("contact_form_phone"),
			messageLabel: t("contact_form_message"),
			buttonText: t("contact_form_submit"),
		},
		contactInfoProp: {
			title: t("contact_us_title"),
			subtitle: t("contact_us_subtitle"),
			emailTitle: t("contact_us_email"),
			email: t("company_email"),
			// phoneTitle: t("contact_us_phone"),
			// phone: t("company_phone"),
			// socialTitle: t("contact_us_social"),
			// socialLinks: [
			// 	{
			// 		link: "https://www.linkedin.com/company/zov-furniture-l-l-c/",
			// 		icon: (
			// 			<FontAwesomeIcon
			// 				icon={faLinkedin}
			// 				size={28}
			// 				color={isDarkMode ? "white" : "black"}
			// 			/>
			// 		),
			// 	},
			// 	{
			// 		link: "https://www.instagram.com/zov.furniture.llc/",
			// 		icon: (
			// 			<Instagram
			// 				width={28}
			// 				height={28}
			// 				color={isDarkMode ? "white" : "black"}
			// 			/>
			// 		),
			// 	},
			// ],
		},
	};

	const mainTitle = t("contact_us_main_title");

	return (
		<ScreenWrapper small>
			<Poster posterProp={poster} />
			<MainTitle title={mainTitle} />
			<ContactUs {...contactUs} />
			{/* <Map source="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462561.6574537445!2d55.22748795!3d25.076022449999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2seg!4v1713221493304!5m2!1sen!2seg" /> */}
		</ScreenWrapper>
	);
};

export { ContactUsScreen };
