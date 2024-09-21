interface Box {
	title: string;
	description: string;
	image: string | { uri: string };
	reverse?: boolean;
	buttonText?: string;
	buttonLink?: string;
}

interface BoxInfoSectionProps {
	boxInfoSectionProp: {
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
		boxesContents: Box[];
		longEndingBox?: Box;
	};
}

export { BoxInfoSectionProps };
