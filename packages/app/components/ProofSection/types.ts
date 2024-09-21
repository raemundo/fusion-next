interface ProofSectionProps {
	proofSectionProp: {
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
		headingTW?: string;
		subheadingTW?: string;
		proofItemCentered?: boolean;
		proof: {
			heading: string;
			subheading: string;
			graphic?: React.ReactNode;
		}[];
	};
}

export type { ProofSectionProps };
