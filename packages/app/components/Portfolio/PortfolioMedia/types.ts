interface PortfolioMediaProps {
	media: {
		type: "image" | "video";
		source: string | { uri: string };
	}[];
}

export { PortfolioMediaProps };
