import { fallbackLng, languages } from "app/lib/i18n/settings";
import { getTranslation } from "app/lib/i18n";

export async function generateStaticParams() {
	return languages.map((lng) => ({ lng }));
}

export async function generateMetadata({ params: { lng } }) {
	if (languages.indexOf(lng) < 0) lng = fallbackLng;
	const { t, _, resources } = await getTranslation(lng, ["common"]);
	return {
		title: t("services_page_title"),
		description: t("services_page_description"),
	};
}

export default async function Layout({ children }) {
	return children;
}
