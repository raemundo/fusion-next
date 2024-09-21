interface InfoAccordionProps {
	infoAccordionProp: {
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
		content: {
			heading: string;
			text: string;
		}[];
	};
}

export { InfoAccordionProps };
