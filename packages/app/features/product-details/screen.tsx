"use client";

import ScreenWrapper from "app/components/ScreenWrapper";
import { products } from "app/features/products/config";
import ContactUs from "app/components/ContactUs";
import { useParams } from "solito/navigation";
import PortfolioMedia from "app/components/Portfolio/PortfolioMedia";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Instagram, Facebook, Twitter } from "@showtime-xyz/universal.icon";
import MainTitle from "app/components/MainTitle";
import { useIsDarkMode } from "@showtime-xyz/universal.hooks";
import HeroSection from "app/components/HeroSection";
import Display from "app/components/Display";
import PosterImage from "app/components/Poster/PosterImage";
import { Image } from "@showtime-xyz/universal.image";
import Poster from "app/components/Poster";

type ProductDetailsScreenParams = {
	slug: string;
};

const ProductDetailsScreen = () => {
	const { slug } = useParams<ProductDetailsScreenParams>();

	const { t } = useTranslation();
	const isDarkMode = useIsDarkMode();

	const product = products.find((item) => item.slug === slug);

	const heroSectionProp = {
		title: t(product?.name || ""),
		description: t(product?.tagline || ""),
	};

	const posterProp = {
		title: t(product?.name || ""),
		subtitle: t(product?.tagline || ""),
		display: (
			<PosterImage
				source={product?.image || ""}
				alt={t(product?.name || "")}
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

	const mainTitle = t("product_details_main_title");

	return (
		product && (
			<ScreenWrapper small>
				<Poster posterProp={posterProp} />
				{/* <HeroSection heroSectionProp={heroSectionProp} /> */}
				{product?.media?.map((media, index: number) => (
					<Display
						variant={media.type}
						key={index}
						source={media.source}
					/>
				))}
				<MainTitle title={mainTitle} />
				<ContactUs {...contactUs} />
			</ScreenWrapper>
		)
	);
};

export { ProductDetailsScreen };
