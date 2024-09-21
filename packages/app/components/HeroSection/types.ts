interface HeroSectionProps {
	heroSectionProp: {
		title?: string;
		titleGradient?: boolean;
		secondTitle?: string;
		secondTitleGradient?: boolean;
		text?: string;
		description?: string;
		primaryButtonString?: string;
		primaryButtonLink?: string;
		secondaryButtonString?: string;
		secondaryButtonLink?: string;
		display?: React.ReactNode;
		startAligned?: boolean;
		lightText?: boolean;
	};
}

interface ImageHeroSectionProps {
	imageHeroSectionProp: {
		title: string;
		secondTitle?: string;
		text?: string;
		description?: string;
		primaryButtonString?: string;
		primaryButtonLink?: string;
		secondaryButtonString?: string;
		secondaryButtonLink?: string;
		display: React.ReactNode;
		startAligned?: boolean;
		lightText?: boolean;
		explainerLink?: string;
		explainerLinkText?: string;
	};
}

export type { HeroSectionProps, ImageHeroSectionProps };
