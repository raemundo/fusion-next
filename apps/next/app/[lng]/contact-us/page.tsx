"use client";

import React from "react";
import { ContactUsScreen } from "app/features/contact-us/screen";
import { WithContext, WebPage } from "schema-dts";
import { useTranslation } from "react-i18next";
import jsonLd, { BASE_URL } from "../../jsonLd";

const ContactUsPage = () => {
	const { t } = useTranslation();

	const baseJsonLd = JSON.parse(JSON.stringify(jsonLd));

	baseJsonLd.publisher.name = t(baseJsonLd.publisher.name);
	baseJsonLd.publisher.contactPoint.telephone = t(
		baseJsonLd.publisher.contactPoint.telephone,
	);

	const contactUsPageJsonLd: WithContext<WebPage> = {
		"@context": "https://schema.org",
		"@type": "WebPage",
		name: t("contact_us_page_title"),
		description: t("contact_us_page_description"),
		url: `${BASE_URL}/contact-us`,
		...baseJsonLd,
	};

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(contactUsPageJsonLd),
				}}
			/>
			<ContactUsScreen />
		</>
	);
};

export default ContactUsPage;
