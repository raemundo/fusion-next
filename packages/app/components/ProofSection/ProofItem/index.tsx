import { View } from "@showtime-xyz/universal.view";
import { Text } from "@showtime-xyz/universal.text";
import { ProofItemProps } from "./types";

const ProofItem = ({
	item,
	headingTW,
	subheadingTW,
	centered,
}: ProofItemProps) => {
	const { heading, subheading, graphic } = item;

	return (
		<View
			tw={`mt-8 w-full flex-grow items-center justify-center gap-3 md:w-[280px] ${
				centered ? "" : "md:items-start"
			} lg:flex-1`}
		>
			<View tw="relative flex h-16 items-center justify-center">
				{graphic && (
					<>
						<View tw="absolute -right-6 -top-6 md:-right-8">
							{graphic}
						</View>
						<View tw="absolute -right-1 top-0 h-14 w-14 rounded-[48px] bg-white text-4xl font-bold blur-[6px] dark:bg-black dark:text-white md:text-6xl" />
					</>
				)}
				<Text
					tw={`font-primary text-center text-4xl font-semibold text-black dark:text-white md:text-6xl ${
						centered ? "" : "md:text-start"
					} ${headingTW}`}
					role="heading"
					aria-level={2}
				>
					{heading}
				</Text>
			</View>
			<Text
				tw={`text-wrap font-secondary text-center text-lg font-semibold text-black dark:text-white xl:text-xl ${
					centered ? "" : "md:text-start"
				} ${subheadingTW}`}
				role="paragraph"
			>
				{subheading}
			</Text>
		</View>
	);
};

export default ProofItem;
