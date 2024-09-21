interface Card {
	title: string;
	description?: string;
	icon?: React.ReactNode;
	image?: React.ReactNode;
	link?: string;
}

interface CardInfoSectionProps {
	cardInfoSectionProp: {
		title?: string;
		description?: string;
		divider?: boolean;
		display?: React.ReactNode;
		startAligned?: boolean;
		titleTW?: string;
		descriptionTW?: string;
		button?: {
			text: string;
			link: string;
		};
		cardsContent: Card[];
		cardsVariant: "large" | "small" | "picture";
		variant?: "swipper" | "normal";
	};
}

export { CardInfoSectionProps, Card };
