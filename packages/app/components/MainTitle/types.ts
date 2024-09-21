interface MainTitleProps {
	title?: string;
	description?: string;
	titleTW?: string;
	descriptionTW?: string;
	button?: {
		text: string;
		link: string;
	};
	divider?: boolean;
	display?: React.ReactNode;
	startAligned?: boolean;
}

export { MainTitleProps };
