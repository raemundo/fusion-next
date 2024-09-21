"use client";

import React from "react";
import { HomeScreen } from "app/features/home/screen";
import { WithContext, WebPage } from "schema-dts";
import { useTranslation } from "react-i18next";
import jsonLd, { BASE_URL } from "../jsonLd";

const HomePage = () => {
	const { t } = useTranslation();

	const baseJsonLd = JSON.parse(JSON.stringify(jsonLd));

	baseJsonLd.publisher.name = t(baseJsonLd.publisher.name);
	baseJsonLd.publisher.contactPoint.telephone = t(
		baseJsonLd.publisher.contactPoint.telephone,
	);

	const homePageJsonLd: WithContext<WebPage> = {
		"@context": "https://schema.org",
		"@type": "WebPage",
		name: t("home_page_title"),
		description: t("home_page_description"),
		url: BASE_URL,
		...baseJsonLd,
	};

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(homePageJsonLd),
				}}
			/>
			<HomeScreen />
		</>
	);
};

export default HomePage;
