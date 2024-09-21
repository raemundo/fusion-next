import { FluidBoxProps } from "./FluidBox/types";

interface ExpandedInfoSectionProps {
	expandedInfoSectionProp: {
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
		content: FluidBoxProps["fluidBoxProp"][];
	};
}

export { ExpandedInfoSectionProps };
