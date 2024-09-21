interface CTASectionProps {
	ctaSectionProp: {
		heading: string;
		subheading?: string;
		text: string;
		display?: React.ReactNode;
		primaryButtonString: string;
		primaryButtonLink: string;
		secondayButtonString?: string;
		secondaryButtonLink?: string;
		lightText?: boolean;
	};
}

export { CTASectionProps };
