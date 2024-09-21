import { Testimonial } from "./TestimonialCard/types";

interface TestimonialSectionProps {
	testimonialSectionProp: {
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
		testimonials: Testimonial[];
	};
}

export { TestimonialSectionProps };
