import { PictureBoxProps } from "../PictureBox/types";

interface PictureBoxSectionProps {
	pictureBoxSectionProp: {
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
		variant?: "normal" | "swipper";
		pictureBoxesContent: PictureBoxProps[];
	};
}

export { PictureBoxSectionProps };
