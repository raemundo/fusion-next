"use client";

import React from "react";
import { ServicesScreen } from "app/features/services/screen";
import { WithContext, WebPage } from "schema-dts";
import jsonLd, { BASE_URL } from "../../jsonLd";
import { useTranslation } from "react-i18next";

const ServicesPage = () => {
	const { t } = useTranslation();

	const baseJsonLd = JSON.parse(JSON.stringify(jsonLd));

	baseJsonLd.publisher.name = t(baseJsonLd.publisher.name);
	baseJsonLd.publisher.contactPoint.telephone = t(
		baseJsonLd.publisher.contactPoint.telephone,
	);

	const servicesPageJsonLd: WithContext<WebPage> = {
		"@context": "https://schema.org",
		"@type": "WebPage",
		name: t("services_page_title"),
		description: t("services_page_description"),
		url: `${BASE_URL}/services`,
		...baseJsonLd,
	};

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(servicesPageJsonLd),
				}}
			/>
			<ServicesScreen />
		</>
	);
};

export default ServicesPage;
