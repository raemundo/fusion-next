import { createInstance } from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { initReactI18next } from "react-i18next/initReactI18next";
import { fallbackLng, getOptions, languages } from "./settings";

export const initI18next = async (lng, ns) => {
	// on server side we create a new instance for each render, because during compilation everything seems to be executed in parallel
	const i18nInstance = createInstance();
	await i18nInstance
		.use(initReactI18next)
		.use(
			resourcesToBackend((language, namespace) =>
				import(`./locales/${language}/${namespace}.json`),
			),
		)
		.init(getOptions(lng, ns));
	return i18nInstance;
};

export async function getTranslation(lng, ns, options = {}) {
	const i18nextInstance = await initI18next(lng, ns);
	return {
		t: i18nextInstance.getFixedT(
			lng,
			Array.isArray(ns) ? ns[0] : ns,
			options.keyPrefix,
		),
		resources: i18nextInstance.services.resourceStore.data,
		i18n: i18nextInstance,
	};
}

export default async function initTranslations(
	locale,
	namespaces,
	i18nInstance,
	resources,
) {
	i18nInstance = i18nInstance || createInstance();

	i18nInstance.use(initReactI18next);

	if (!resources) {
		i18nInstance.use(
			resourcesToBackend((language, namespace) =>
				import(`./locales/${language}/${namespace}.json`),
			),
		);
	}

	await i18nInstance.init({
		lng: locale,
		resources,
		fallbackLng: fallbackLng,
		supportedLngs: languages,
		defaultNS: namespaces[0],
		fallbackNS: namespaces[0],
		ns: namespaces,
		preload: resources ? [] : languages,
	});

	return {
		i18n: i18nInstance,
		resources: i18nInstance.services.resourceStore.data,
		t: i18nInstance.t,
	};
}
