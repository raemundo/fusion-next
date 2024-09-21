interface PortfolioSelectionProps {
	portfolioSelectionProp: {
		title: string;
		description: string;
		portfolioContent: {
			title: string;
			description: string;
			image: string | { uri: string };
			link: string;
		}[];
	};
}

export { PortfolioSelectionProps };
