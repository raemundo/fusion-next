import { View } from "@showtime-xyz/universal.view";
import { Pressable } from "@showtime-xyz/universal.pressable";
import { Text } from "@showtime-xyz/universal.text";
import { PictureCardProps } from "./types";
import { useLink } from "solito/navigation";

const PictureCard = (props: PictureCardProps) => {
	const { title, subtitle, image, link, variant } = props;

	const variantValue = variant ? variant : "normal";

	const elementLink = link
		? useLink({
				href: link,
		  })
		: {};

	return (
		<Pressable
			{...elementLink}
			tw={`flex-grow items-start gap-4 bg-white dark:bg-black max-xl:my-4 ${
				variantValue == "normal" ? "w-full xl:w-[380px]" : "w-[380px]"
			} 2xl:w-[420px]`}
		>
			<View tw="h-[260px] w-full overflow-hidden rounded-3xl md:h-[300px] xl:h-[550px] xl:min-w-[383px]">
				{image}
			</View>
			<View tw="items-start gap-1">
				<Text
					tw="font-secondary text-2xl font-semibold text-black dark:text-white lg:text-3xl"
					role="heading"
					aria-level={2}
				>
					{title}
				</Text>
				<Text
					tw="font-secondary font-normal text-black dark:text-[#b2b5be]"
					role="paragraph"
				>
					{subtitle}
				</Text>
			</View>
		</Pressable>
	);
};

export default PictureCard;
