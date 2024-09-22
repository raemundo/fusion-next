import "raf/polyfill";
import "setimmediate";
import React from "react";
import "../../global.css";

import { Provider } from "app/provider";
import { Layout } from "app/features/layout";

import { dir } from "i18next";
import { fallbackLng, languages } from "app/lib/i18n/settings";
import { getTranslation } from "app/lib/i18n";
import TranslationsProvider from "app/lib/i18n/TranslationProvider";

import { Playfair_Display, DM_Sans, Noto_Sans_HK } from "next/font/google";
// HK Grotesk - 600


const playfairDisplay = Noto_Sans_HK({
	subsets: ["latin"],
	style: "normal",
	variable: "--font-playfair-display",
});

const dmSans = DM_Sans({
	subsets: ["latin"],
	style: "normal",
	variable: "--font-dm-sans",
});

export async function generateStaticParams() {
	return languages.map((lng) => ({ lng }));
}

export async function generateMetadata({ params: { lng } }) {
	if (languages.indexOf(lng) < 0) lng = fallbackLng;
	const { t } = await getTranslation(lng, ["common"]);
	return {
		title: {
			default: t("company_name"),
			template: "%s | " + t("company_name"),
		},
		description: t("home_page_description"),
	};
}

export default async function RootLayout({ children, params: { lng } }) {
	const { t, resources } = await getTranslation(lng, ["common"]);
	return (
		<html
			lang={lng}
			dir={dir(lng)}
			className={`${playfairDisplay.variable} ${dmSans.variable}`}
		>
			<body>
				<TranslationsProvider
					namespaces={["common"]}
					locale={lng}
					resources={resources}
				>
					<Provider>
						<Layout>{children}</Layout>
					</Provider>
				</TranslationsProvider>
			</body>
		</html>
	);
}
