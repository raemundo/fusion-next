import { WithContext, WebPage, Product } from "schema-dts";

const BASE_URL = "https://www.skyartfurniture.com/";

const jsonLd: Partial<WithContext<WebPage | Product>> = {
	publisher: {
		"@type": "Organization",
		name: "company_name",
		contactPoint: {
			"@type": "ContactPoint",
			// telephone: "company_phone",
			contactType: "Customer Service",
		},
	},
	// sameAs: [
	// 	"https://www.linkedin.com/company/zov-furniture-l-l-c/",
	// 	"https://www.instagram.com/zov.furniture.llc/",
	// ],
};

export { BASE_URL };
export default jsonLd;
