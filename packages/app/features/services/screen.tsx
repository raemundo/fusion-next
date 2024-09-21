"use client";

import ExpandedInfoSection from "app/components/ExpandedInfoSection";
import ScreenWrapper from "app/components/ScreenWrapper";
import MainTitle from "app/components/MainTitle";
import { useTranslation } from "react-i18next";
import Poster from "app/components/Poster";
import PosterImage from "app/components/Poster/PosterImage";
import { services as servicesData } from "app/features/services/config";

const ServicesScreen = () => {
	const { t } = useTranslation();

	const services = {
		title: t("services_title"),
		description: t("services_description"),
		content: servicesData.map((item) => ({
			...item,
			title: t(item.title),
			description: t(item.description),
			list: item?.list?.map((listItem) => t(listItem)),
			buttonString: t(item.buttonString),
		})),
	};

	const servicesBottomPoster = {
		title: t("services_bottom_poster_title"),
		subtitle: t("services_bottom_poster_subtitle"),
		buttonString: t("services_bottom_poster_button"),
		buttonLink: "/contact-us",
		display: (
			<PosterImage
				source="/images/image-13.jpg"
				alt={t("services_bottom_poster_title")}
				tw="object-none object-bottom"
			/>
		),
	};

	const mainTitle = t("services_main_title");

	return (
		<ScreenWrapper>
			<ExpandedInfoSection expandedInfoSectionProp={services} />
			<MainTitle title={mainTitle} />
			<Poster posterProp={servicesBottomPoster} />
		</ScreenWrapper>
	);
};

export { ServicesScreen };
