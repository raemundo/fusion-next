"use client";

import ProofSection from "app/components/ProofSection";
import ScreenWrapper from "app/components/ScreenWrapper";
import CardInfoSection from "app/components/CardInfoSection";
import HeroSection from "app/components/HeroSection";
import Display from "app/components/Display";
import { products } from "app/features/products/config";
import { Products, ProductDetails } from "app/features/products/types";
import { useTranslation } from "react-i18next";
import BoxInfoSection from "app/components/BoxInfoSection";
import PictureCardImage from "app/components/CardInfoSection/PictureCard/PictureCardImage";
import CustomersSection from "app/components/CustomersSection";
import InfoAccordion from "app/components/InfoAccordion";
import { Image } from "@showtime-xyz/universal.image";
import PictureBoxSection from "app/components/PictureBoxSection";

const AboutUsScreen = () => {
	const { t } = useTranslation();

	const firstHeroSectionProp = {
		display: (
			<Display
				variant="image"
				cta
				imageCTA={t("display_image_cta")}
				source="/images/image-6.webp"
				text={t("about_display_image_text_1")}
				link="/products"
			/>
		),
	};

	const secondHeroSectionProp = {
		display: (
			<Display
				variant="image"
				cta
				imageCTA={t("display_image_cta")}
				source="/images/image-7.webp"
				text={t("about_display_image_text_2")}
				link="/services"
			/>
		),
	};

	const thirdHeroSectionProp = {
		title: t("company_name"),
	};

	const proof = {
		title: t("about_us_proof_title"),
		description: t("about_us_proof_description"),
		proofItemCentered: true,
		proof: [
			{
				heading: t("about_us_proof_1_heading"),
				subheading: t("about_us_proof_1_subheading"),
			},
			{
				heading: t("about_us_proof_2_heading"),
				subheading: t("about_us_proof_2_subheading"),
			},
			{
				heading: t("about_us_proof_3_heading"),
				subheading: t("about_us_proof_3_subheading"),
			},
		],
	};

	const ourVision = {
		boxesContents: [
			{
				title: t("about_us_box_1_title"),
				description: t("about_us_box_1_description"),
				image: "/images/image-8.webp",
				reverse: false,
				buttonText: t("about_us_box_1_button"),
				buttonLink: "/services",
			},
		],
	};

	const customersSection = {
		variant: "marquee" as "marquee" | "normal" | "swipper",
		customers: [
			{
				name: "Blum",
				logo: (
					<Image
						source="/images/blum-logo.png"
						alt="Blum"
						width={112}
						height={112}
						tw="grayscale dark:invert"
					/>
				),
			},
			{
				name: "Hettich",
				logo: (
					<Image
						source="/images/hettich-logo.png"
						alt="Hettich"
						width={164}
						height={164}
						tw="grayscale dark:invert"
					/>
				),
			},
			{
				name: "MVP Appliances",
				logo: (
					<Image
						source="/images/mvp-logo.png"
						alt="MVP Appliances"
						width={92}
						height={92}
						tw="grayscale invert dark:invert-0"
					/>
				),
			},
			{
				name: "Involux",
				logo: (
					<Image
						source="/images/involux-logo.png"
						alt="Involux"
						width={164}
						height={164}
						tw="grayscale"
					/>
				),
			},
			{
				name: "Vauth Sagel",
				logo: (
					<Image
						source="/images/vs-logo.png"
						alt="Vauth Sagel"
						width={164}
						height={164}
						tw="grayscale dark:invert"
					/>
				),
			},
			{
				name: "Glaze",
				logo: (
					<Image
						source="/images/glaze-logo.png"
						alt="Glaze"
						width={164}
						height={164}
						tw="grayscale"
					/>
				),
			},
			{
				name: "Notam Lab",
				logo: (
					<Image
						source="/images/notam-lab-logo.png"
						alt="Notam Lab"
						width={128}
						height={128}
						tw="grayscale dark:invert"
					/>
				),
			},
		],
	};

	const ourGoal = {
		boxesContents: [
			{
				title: t("about_us_box_2_title"),
				description: t("about_us_box_2_description"),
				image: "/images/image-9.webp",
				reverse: true,
				// buttonText: t("about_us_box_2_button"),
				// buttonLink: "/products",
			},
		],
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

	const FAQs = {
		title: t("faqs_title"),
		description: t("faqs_description"),
		content: [
			{
				heading: t("faq_1_heading"),
				text: t("faq_1_text"),
			},
			{
				heading: t("faq_2_heading"),
				text: t("faq_2_text"),
			},
			{
				heading: t("faq_3_heading"),
				text: t("faq_3_text"),
			},
			{
				heading: t("faq_4_heading"),
				text: t("faq_4_text"),
			},
			{
				heading: t("faq_5_heading"),
				text: t("faq_5_text"),
			},
			{
				heading: t("faq_6_heading"),
				text: t("faq_6_text"),
			},
			{
				heading: t("faq_7_heading"),
				text: t("faq_7_text"),
			},
		],
	};

	return (
		<ScreenWrapper>
			<HeroSection heroSectionProp={thirdHeroSectionProp} />
			{/* <HeroSection heroSectionProp={firstHeroSectionProp} /> */}
			<BoxInfoSection boxInfoSectionProp={ourGoal} />
			<BoxInfoSection boxInfoSectionProp={ourVision} />
			<ProofSection proofSectionProp={proof} />
			<HeroSection heroSectionProp={secondHeroSectionProp} />
			{/* <CustomersSection customersSectionProp={customersSection} /> */}
			{/* <CardInfoSection cardInfoSectionProp={ourFurniture} /> */}
			<InfoAccordion infoAccordionProp={FAQs} />
		</ScreenWrapper>
	);
};

export { AboutUsScreen };
