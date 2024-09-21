"use client";

import ScreenWrapper from "app/components/ScreenWrapper";
import { products } from "app/features/products/config";
import { useTranslation } from "react-i18next";
import Poster from "app/components/Poster";
import { Products } from "app/features/products/types";
import CardInfoSection from "app/components/CardInfoSection";
import PictureCardImage from "app/components/CardInfoSection/PictureCard/PictureCardImage";
import MainTitle from "app/components/MainTitle";
import PosterImage from "app/components/Poster/PosterImage";
import HeroSection from "app/components/HeroSection";

const ProductsScreen = () => {
	const { t } = useTranslation();

	const getUniqueCategories = (productsContent: Products) => {
		const categories = productsContent.map((product) => product.category);
		const uniqueCategories = [...new Set(categories)];

		return uniqueCategories;
	};

	const productsSection = {
		title: t("portfolio_title"),
		description: t("portfolio_description"),
		buttonText: t("portfolio_card_button"),
	};

	const productsContent = products.map((item) => ({
		...item,
		title: t(item.name),
		tagline: t(item.tagline),
		category: t(item.category),
		buttonText: productsSection.buttonText,
		link: `/products/${item.slug}`,
	}));

	const topPoster = {
		title: t("products_top_poster_title"),
		subtitle: t("products_top_poster_subtitle"),
		display: (
			<PosterImage
				source="/images/image-11.jpg"
				alt={t("products_top_poster_title")}
			/>
		),
	};

	const bottomPoster = {
		title: t("products_bottom_poster_title"),
		subtitle: t("products_bottom_poster_subtitle"),
		buttonString: t("lets_talk_button"),
		buttonLink: "/contact-us",
		display: (
			<PosterImage
				source="/images/image-12.jpg"
				alt={t("products_bottom_poster_title")}
			/>
		),
	};

	const categories = getUniqueCategories(productsContent);

	const mainTitle = t("home_main_title");

	const topMainTitle = t("products_main_title");

	return (
		<ScreenWrapper small>
			<MainTitle title={topMainTitle} />
			<Poster posterProp={topPoster} />
			{categories.map((category) => (
				<CardInfoSection
					cardInfoSectionProp={{
						title: category,
						cardsContent: productsContent
							.filter((product) => product.category === category)
							.map((product) => ({
								title: product.title,
								description: product.tagline,
								image: (
									<PictureCardImage
										source={product.image}
										alt={product.name}
									/>
								),
								link: product.link,
							})),
						cardsVariant: "picture",
						variant: "normal",
					}}
				/>
			))}
			<MainTitle title={mainTitle} />
			<Poster posterProp={bottomPoster} />
		</ScreenWrapper>
	);
};

export { ProductsScreen };
