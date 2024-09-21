import { MetadataRoute } from "next";
import { products } from "app/features/products/config";

const BASE_URL = "https://www.skyartfurniture.com";

export default function sitemap(): MetadataRoute.Sitemap {
	const productUrls = products.map((product) => ({
		url: `${BASE_URL}/products/${product.slug}`,
		lastModified: new Date(),
		changeFrequency: "monthly" as "monthly", // "monthly" is a valid type for "changeFrequency"
		priority: 0.5,
	}));

	return [
		{
			url: BASE_URL,
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 1,
		},
		// {
		// 	url: `${BASE_URL}/products`,
		// 	lastModified: new Date(),
		// 	changeFrequency: "weekly",
		// 	priority: 0.9,
		// },
		{
			url: `${BASE_URL}/services`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.8,
		},
		{
			url: `${BASE_URL}/about-us`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.7,
		},
		{
			url: `${BASE_URL}/contact-us`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.6,
		},
		// ...productUrls,
	];
}
