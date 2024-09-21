import { View } from "@showtime-xyz/universal.view";
import { Text } from "@showtime-xyz/universal.text";
import { Avatar } from "@showtime-xyz/universal.avatar";
import { UserCircle } from "@showtime-xyz/universal.icon";
import { useIsDarkMode } from "@showtime-xyz/universal.hooks";
import { TestimonialCardProps } from "./types";

const TestimonialCard = (props: TestimonialCardProps) => {
	const { testimonial } = props;
	const isDarkMode = useIsDarkMode();

	return (
		<View tw="min-h-64 flex w-screen flex-grow flex-col items-start justify-between gap-4 border-t border-[#6a6d7833] bg-white p-8 last:border-b dark:border-[#434651] dark:bg-black sm:w-full sm:rounded-3xl sm:border-x sm:border-b md:w-96">
			<Text
				tw="font-secondary text-2xl font-bold text-black dark:text-white lg:text-3xl"
				role="heading"
				aria-level={3}
			>
				{testimonial.heading}
			</Text>
			<Text
				tw="font-secondary text-lg text-black dark:text-[#b2b5be]"
				role="paragraph"
			>
				{'"'}
				{testimonial.description}
				{'"'}
			</Text>
			<View tw="flex flex-row items-center justify-center gap-4">
				{testimonial.avatar ? (
					<Avatar
						size={48}
						url={testimonial.avatar}
						alt={testimonial.name}
					/>
				) : (
					<UserCircle
						width={48}
						height={48}
						color={isDarkMode ? "white" : "black"}
					/>
				)}
				<View tw="flex items-start">
					<Text
						tw="black font-secondary text-lg font-semibold dark:text-white"
						role="heading"
						aria-level={4}
					>
						{testimonial.name}
					</Text>
					<Text
						tw="text-md font-secondary text-black dark:text-[#b2b5be]"
						role="paragraph"
					>
						{testimonial.title}
					</Text>
				</View>
			</View>
		</View>
	);
};

export default TestimonialCard;
