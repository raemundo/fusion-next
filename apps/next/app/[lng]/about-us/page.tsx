"use client";

import React from "react";
import { AboutUsScreen } from "app/features/about-us/screen";
import { WithContext, WebPage } from "schema-dts";
import { useTranslation } from "react-i18next";
import jsonLd, { BASE_URL } from "../../jsonLd";

const AboutUsPage = () => {
	const { t } = useTranslation();

	const baseJsonLd = JSON.parse(JSON.stringify(jsonLd));

	baseJsonLd.publisher.name = t(baseJsonLd.publisher.name);
	baseJsonLd.publisher.contactPoint.telephone = t(
		baseJsonLd.publisher.contactPoint.telephone,
	);

	const aboutUsPageJsonLd: WithContext<WebPage> = {
		"@context": "https://schema.org",
		"@type": "WebPage",
		name: t("about_us_page_title"),
		description: t("about_us_page_description"),
		url: `${BASE_URL}/about-us`,
		...baseJsonLd,
	};

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(aboutUsPageJsonLd),
				}}
			/>
			<AboutUsScreen />
		</>
	);
};

export default AboutUsPage;
