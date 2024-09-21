interface FeaturesSectionProps {
	featuresSectionProp: {
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
		featureItemVariant?: "normal" | "centered";
		features: {
			icon: React.ReactNode;
			title: string;
			description: string;
		}[];
	};
}

export { FeaturesSectionProps };
