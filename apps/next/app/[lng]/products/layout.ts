import {
	fallbackLng,
	languages,
} from "../../../../../packages/app/lib/i18n/settings";
import { getTranslation } from "../../../../../packages/app/lib/i18n";

export async function generateStaticParams() {
	return languages.map((lng) => ({ lng }));
}

export async function generateMetadata({ params: { lng } }) {
	if (languages.indexOf(lng) < 0) lng = fallbackLng;
	const { t, _, resources } = await getTranslation(lng, ["common"]);
	return {
		title: {
			default: t("products_page_title"),
			template: "%s | " + t("company_name"),
		},
		description: t("products_page_description"),
	};
}

export default async function Layout({ children }) {
	return children;
}
