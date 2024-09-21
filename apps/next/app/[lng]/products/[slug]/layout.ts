import {
	fallbackLng,
	languages,
} from "../../../../../../packages/app/lib/i18n/settings";
import { getTranslation } from "../../../../../../packages/app/lib/i18n";
import { products } from "app/features/products/config";

export async function generateStaticParams() {
	return languages
		.map((lng) => products.map((product) => ({ lng, slug: product.slug })))
		.flat();
}

export async function generateMetadata({ params: { lng, slug } }) {
	if (languages.indexOf(lng) < 0) lng = fallbackLng;
	const { t, _, resources } = await getTranslation(lng, ["common"]);

	const product = products.find((product) => product.slug === slug);

	return {
		title: t(product?.name || ""),
		description: t(product?.description || ""),
	};
}

export default async function Layout({ children }) {
	return children;
}
