import React from "react";

interface CustomersSectionProps {
	customersSectionProp: {
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
		customers: {
			name?: string;
			logo: React.ReactNode;
		}[];
		variant?: "marquee" | "normal" | "swipper";
	};
}

export { CustomersSectionProps };
