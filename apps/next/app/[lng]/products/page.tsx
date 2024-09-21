"use client";

import React from "react";
import { ProductsScreen } from "app/features/products/screen";
import { WithContext, WebPage } from "schema-dts";
import { useTranslation } from "react-i18next";
import jsonLd, { BASE_URL } from "../../jsonLd";

const ProductsPage = () => {
	const { t } = useTranslation();

	const baseJsonLd = JSON.parse(JSON.stringify(jsonLd));

	baseJsonLd.publisher.name = t(baseJsonLd.publisher.name);
	baseJsonLd.publisher.contactPoint.telephone = t(
		baseJsonLd.publisher.contactPoint.telephone,
	);

	const productsPageJsonLd: WithContext<WebPage> = {
		"@context": "https://schema.org",
		"@type": "WebPage",
		name: t("products_page_title"),
		description: t("products_page_description"),
		url: `${BASE_URL}/products`,
		...baseJsonLd,
	};

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(productsPageJsonLd),
				}}
			/>
			<ProductsScreen />
		</>
	);
};

export default ProductsPage;
