"use client";

import ScreenWrapper from "app/components/ScreenWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
	faChair,
	faCouch,
	faTable,
	faPeopleGroup,
	faPaintBrush,
	faStarOfLife,
	faShippingFast,
} from "@fortawesome/free-solid-svg-icons";
import { MarketFilled, Heart, Settings } from "@showtime-xyz/universal.icon";
import CardInfoSection from "app/components/CardInfoSection";
import BoxInfoSection from "app/components/BoxInfoSection";
import FeaturesSection from "app/components/FeaturesSection";
import HeroSection from "app/components/HeroSection";
import Display from "app/components/Display";
import { useTranslation } from "react-i18next";
import { useIsDarkMode } from "@showtime-xyz/universal.hooks";
import { Image } from "@showtime-xyz/universal.image";
import { products } from "app/features/products/config";
import { Products, ProductDetails } from "app/features/products/types";
import Poster from "app/components/Poster";
import PictureCardImage from "app/components/CardInfoSection/PictureCard/PictureCardImage";
import PosterImage from "app/components/Poster/PosterImage";
import ImageHeroSection from "app/components/HeroSection/ImageHeroSection";
import MainTitle from "app/components/MainTitle";
import { OurPresence } from "app/features/home/OurPresence";

const HomeScreen = () => {
	const { t } = useTranslation();
	const isDarkMode = useIsDarkMode();

	const firstHeroSectionProp = {
		title: t("company_name"),
		description: t("home_image_hero_section_description"),
		lightText: true,
		primaryButtonString: t("home_image_hero_section_primary_button"),
		primaryButtonLink: "/contact-us",
		secondaryButtonString: t("home_image_hero_section_secondary_button"),
		// secondaryButtonLink: "/products",
		secondaryButtonLink: "/services",
		display: (
			<Image
				source="/images/image-1.jpg"
				alt={t("company_name")}
				width={4000}
				height={4000}
				tw="h-screen w-full object-cover"
			/>
		),
	};

	const secondHeroSectionProp = {
		display: (
			<Display
				variant="image"
				cta
				imageCTA={t("display_image_cta")}
				source="/images/image-2.jpg"
				text={t("about_display_image_text_1")}
				link="/products"
			/>
		),
	};

	const thirdHeroSectionProp = {
		display: (
			<Display
				variant="image"
				cta
				imageCTA={t("display_image_cta")}
				source="/images/image-4.jpg"
				text={t("about_display_image_text_2")}
				link="/services"
			/>
		),
	};

	const getOneProductPerCategory = (productsContent: Products): Products => {
		const productMap = new Map<string, ProductDetails>();

		for (const product of productsContent) {
			if (!productMap.has(product.category)) {
				productMap.set(product.category, product);
			}
		}

		return Array.from(productMap.values());
	};

	const ourCatalog = {
		title: t("home_our_catalog_cards_title"),
		description: t("home_our_catalog_cards_description"),
		cardsContent: [
			{
				title: t("home_our_catalog_card_1_title"),
				icon: (
					<FontAwesomeIcon
						icon={faChair}
						size={92}
						color={isDarkMode ? "white" : "black"}
					/>
				),
			},
			{
				title: t("home_our_catalog_card_2_title"),
				icon: (
					<FontAwesomeIcon
						icon={faCouch}
						size={92}
						color={isDarkMode ? "white" : "black"}
					/>
				),
			},
			{
				title: t("home_our_catalog_card_3_title"),
				icon: (
					<FontAwesomeIcon
						icon={faTable}
						size={92}
						color={isDarkMode ? "white" : "black"}
					/>
				),
			},
			{
				title: t("home_our_catalog_card_4_title"),
				icon: (
					<FontAwesomeIcon
						icon={faPeopleGroup}
						size={92}
						color={isDarkMode ? "white" : "black"}
					/>
				),
			},
		],
		cardsVariant: "small" as "large" | "small" | "picture",
		variant: "normal" as "swipper" | "normal",
	};

	const ourFurniture = {
		title: t("about_us_cards_title"),
		description: t("about_us_cards_description"),
		button: {
			text: t("about_us_cards_button"),
			link: "/products",
		},
		cardsContent: getOneProductPerCategory(products).map((product) => ({
			title: t(product.name),
			description: t(product.tagline),
			image: (
				<PictureCardImage
					source={product.image}
					alt={t(product.name)}
				/>
			),
			link: `/products/${product.slug}`,
		})),
		cardsVariant: "picture" as "large" | "small" | "picture",
		variant: "normal" as "swipper" | "normal",
	};

	const intro = {
		boxesContents: [
			{
				title: t("home_intro_box_title"),
				description: t("home_intro_box_description"),
				image: "/images/image-3.jpg",
				reverse: false,
				buttonText: t("home_intro_box_button"),
				buttonLink: "/about-us",
			},
		],
	};

	const ourServices = {
		title: t("home_our_services_title"),
		description: t("home_our_services_description"),
		cardsContent: [
			{
				title: t("home_our_services_card_1_title"),
				description: t("home_our_services_card_1_description"),
				icon: (
					<FontAwesomeIcon
						icon={faShippingFast}
						size={120}
						color={isDarkMode ? "white" : "black"}
					/>
				),
			},
			{
				title: t("home_our_services_card_2_title"),
				description: t("home_our_services_card_2_description"),
				icon: (
					<Settings
						height={120}
						width={120}
						color={isDarkMode ? "white" : "black"}
					/>
				),
			},
			{
				title: t("home_our_services_card_3_title"),
				description: t("home_our_services_card_3_description"),
				icon: (
					<FontAwesomeIcon
						icon={faCouch}
						size={120}
						color={isDarkMode ? "white" : "black"}
					/>
				),
			},
			{
				title: t("home_our_services_card_4_title"),
				description: t("home_our_services_card_4_description"),
				icon: (
					<FontAwesomeIcon
						icon={faStarOfLife}
						size={120}
						color={isDarkMode ? "white" : "black"}
					/>
				),
			},
		],
		cardsVariant: "large" as "large" | "small" | "picture",
		variant: "swipper" as "swipper" | "normal",
	};

	const features = {
		title: t("home_features_section_title"),
		description: t("home_features_section_description"),
		// startAligned: true,
		featureItemVariant: "centered" as "centered" | "normal",
		features: [
			{
				title: t("home_features_section_feature_1_title"),
				description: t("home_features_section_feature_1_description"),
				icon: (
					<MarketFilled
						height={56}
						width={56}
						color={isDarkMode ? "white" : "black"}
					/>
				),
			},
			{
				title: t("home_features_section_feature_2_title"),
				description: t("home_features_section_feature_2_description"),
				icon: (
					<FontAwesomeIcon
						icon={faPaintBrush}
						size={56}
						color={isDarkMode ? "white" : "black"}
					/>
				),
			},
			{
				title: t("home_features_section_feature_3_title"),
				description: t("home_features_section_feature_3_description"),
				icon: (
					<Heart
						height={56}
						width={56}
						color={isDarkMode ? "white" : "black"}
					/>
				),
			},
		],
	};

	const homePoster = {
		title: t("home_poster_title"),
		subtitle: t("home_poster_subtitle"),
		buttonString: t("home_image_hero_section_primary_button"),
		buttonLink: "/contact-us",
		display: (
			<PosterImage
				source="/images/image-5.jpg"
				alt={t("home_poster_title")}
			/>
		),
	};

	const mainTitle = t("home_main_title");

	return (
		<>
			<ImageHeroSection imageHeroSectionProp={firstHeroSectionProp} />
			<ScreenWrapper>
				{/* <HeroSection heroSectionProp={secondHeroSectionProp} /> */}
				<BoxInfoSection boxInfoSectionProp={intro} />
				{/* <HeroSection heroSectionProp={secondHeroSectionProp} /> */}
				<CardInfoSection cardInfoSectionProp={ourCatalog} />
				{/* <CardInfoSection cardInfoSectionProp={ourFurniture} /> */}
				<HeroSection heroSectionProp={thirdHeroSectionProp} />
				<CardInfoSection cardInfoSectionProp={ourServices} />
				<FeaturesSection featuresSectionProp={features} />
				<MainTitle title={mainTitle} />
				<Poster posterProp={homePoster} />
				<OurPresence />
			</ScreenWrapper>
		</>
	);
};

export { HomeScreen };
