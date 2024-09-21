interface ProductDetails {
	name: string;
	slug: string;
	tagline: string;
	category: string;
	description?: string;
	media: {
		type: "image" | "video";
		source: string;
	}[];
	image: string | { uri: string };
}

type Products = ProductDetails[];

export type { Products, ProductDetails };
