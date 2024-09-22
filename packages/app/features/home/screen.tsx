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
import { View } from "@showtime-xyz/universal.view";
import { Boxes  } from "app/features/home/text-hover-effect";
import { cn } from "app/lib/utils";
import { HeroParallax, ImagesSlider } from "app/features/home/hero-parallax";
import { motion } from "framer-motion";
import { InfiniteMovingCards } from "app/features/home/infinite-moving-cards";

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
	const images = [
		"https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		"https://plus.unsplash.com/premium_photo-1681691912442-68c4179c530c?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		"https://images.unsplash.com/photo-1512207736890-6ffed8a84e8d?q=80&w=2859&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		"https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=3552&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		"https://images.unsplash.com/photo-1531431057391-da7a1aabd412?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	];
	return (
		<>



			<ImagesSlider className="h-[40rem]" images={images}>
				<motion.div
					initial={{
						opacity: 0,
						y: -80,
					}}
					animate={{
						opacity: 1,
						y: 0,
					}}
					transition={{
						duration: 0.6,
					}}
					className="z-50 flex flex-col justify-center items-center"
				>
					<motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
					Fusion Next.
					</motion.p>
					<button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
						<span>Join now →</span>
						<div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
					</button>
				</motion.div>
			</ImagesSlider>
			<ScreenWrapper>
				{/* <HeroSection heroSectionProp={secondHeroSectionProp} />*/}
				{/*<BoxInfoSection boxInfoSectionProp={intro} />*/}
				{/* <HeroSection heroSectionProp={secondHeroSectionProp} />*/}
				{/*<CardInfoSection cardInfoSectionProp={ourCatalog} />*/}
				{/* <CardInfoSection cardInfoSectionProp={ourFurniture} />*/}
				{/*<HeroSection heroSectionProp={thirdHeroSectionProp} />*/}
				{/*<CardInfoSection cardInfoSectionProp={ourServices} />*/}
				<FeaturesSection featuresSectionProp={features} />
				{/*<MainTitle title={mainTitle} />*/}
				{/*<Poster posterProp={homePoster} />*/}
				<OurPresence />
				<InfiniteMovingCardsDemo />

			</ScreenWrapper>
			<div
				className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center ">
				<div
					className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

				<Boxes />
				<h1 className={cn("text-7xl font-primary font-bold text-white relative z-20")}>
					Fusion Next.
				</h1>

			</div>
		</>
	);
};






export function InfiniteMovingCardsDemo() {
	return (
		<div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
			<MainTitle title={"What They Say About Us?"} description={"Because our clients opinion matter \n\n"}/>

			<InfiniteMovingCards
				items={testimonials}
				direction="right"
				speed="slow"
			/>
		</div>
	);
}

const testimonials = [
	{
		quote:
			"Fusion Next Engineering delivered exceptional quality in every aspect of our project. Their attention to detail and commitment to deadlines made all the difference. We are beyond satisfied with the results.",
		name: "John Wilson",
		title: "Project Manager, Real Estate Corp",
	},
	{
		quote:
			"The team at Fusion Next Engineering exceeded our expectations. From initial planning to final handover, they worked seamlessly and professionally. I highly recommend their services for any construction project.",
		name: "Emily Thompson",
		title: "CEO, Thompson Enterprises",
	},
	{
		quote:
			"Our experience with Fusion Next was remarkable. They were highly responsive, skilled, and ensured our project stayed within budget without compromising on quality.",
		name: "Michael Carter",
		title: "Operations Director, Global Solutions",
	},
	{
		quote:
			"Working with Fusion Next Engineering was a pleasure. They took the time to understand our needs and delivered a project that perfectly aligned with our vision.",
		name: "Sarah Ahmed",
		title: "Architect, Ahmed & Co.",
	},
	{
		quote:
			"Fusion Next consistently brings innovation and reliability to the table. Their expertise and dedication were key to the successful completion of our commercial complex.",
		name: "David Lee",
		title: "Managing Director, Lee Properties",
	},
];




export { HomeScreen };
