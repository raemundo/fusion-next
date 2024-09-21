"use client";

import React from "react";
import { ProductDetailsScreen } from "app/features/product-details/screen";
import { WithContext, Product } from "schema-dts";
import { useTranslation } from "react-i18next";
import jsonLd, { BASE_URL } from "../../../jsonLd";
import { products } from "app/features/products/config";
import { notFound } from "next/navigation";
// import { useParams } from "solito/navigation";

const ProductDetailsPage = ({ params }) => {
	// const { slug } = useParams();
	const { slug } = params;
	const { t } = useTranslation();

	const product = products.find((product) => product.slug === slug);

	if (!product) {
		return notFound();
	}

	const baseJsonLd = JSON.parse(JSON.stringify(jsonLd));

	baseJsonLd.publisher.name = t(baseJsonLd.publisher.name);
	baseJsonLd.publisher.contactPoint.telephone = t(
		baseJsonLd.publisher.contactPoint.telephone,
	);

	const productDetailsPageJsonLd: WithContext<Product> = {
		"@context": "https://schema.org",
		"@type": "Product",
		name: t(product?.name || ""),
		description: t(product?.tagline || ""),
		url: `${BASE_URL}/products/${product?.slug}`,
		...baseJsonLd,
	};

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(productDetailsPageJsonLd),
				}}
			/>
			<ProductDetailsScreen />
		</>
	);
};

export default ProductDetailsPage;
