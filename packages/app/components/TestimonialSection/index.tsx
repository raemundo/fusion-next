import { View } from "@showtime-xyz/universal.view";
import MainTitle from "app/components/MainTitle";
import { TestimonialSectionProps } from "./types";
import TestimonialCard from "app/components/TestimonialSection/TestimonialCard";
import SectionContainer from "app/components/SectionContainer";

const TestimonialSection = (props: TestimonialSectionProps) => {
	const { testimonials, ...rest } = props.testimonialSectionProp;

	return (
		<SectionContainer>
			{(rest.title || rest.description || rest.display) && (
				<MainTitle {...rest} />
			)}{" "}
			<View tw="w-full flex-row flex-wrap items-stretch justify-center md:gap-6 xl:gap-8">
				{testimonials.map((testimonial) => (
					<TestimonialCard
						key={testimonial.heading}
						testimonial={testimonial}
					/>
				))}
			</View>
		</SectionContainer>
	);
};

export default TestimonialSection;
