interface Testimonial {
	name: string;
	heading: string;
	title: string;
	description: string;
	avatar?: string | { uri: string };
}

interface TestimonialCardProps {
	testimonial: Testimonial;
}

export { TestimonialCardProps, Testimonial };
