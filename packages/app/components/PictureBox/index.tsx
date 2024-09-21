import { View } from "@showtime-xyz/universal.view";
import { Text } from "@showtime-xyz/universal.text";
import { Pressable } from "@showtime-xyz/universal.pressable";
import { useLink } from "solito/navigation";
import { PictureBoxProps } from "./types";

const PictureBox = (props: PictureBoxProps) => {
	const { text, image, link } = props;

	const elementLink = link
		? useLink({
				href: link,
		  })
		: {};

	return (
		<Pressable
			{...elementLink}
			tw="w-full items-start gap-2 rounded-2xl bg-[#2a2e39] bg-opacity-0 p-2 transition duration-300 ease-in-out hover:bg-opacity-10 dark:hover:bg-opacity-100 dark:hover:text-white sm:w-fit"
		>
			<View tw="aspect-square h-[216px] overflow-hidden rounded-xl xl:h-[280px] 2xl:h-[304px]">
				{image}
			</View>
			{text && (
				<Text
					tw="text-md font-secondary font-normal text-black dark:text-[#b2b5be]"
					role="paragraph"
				>
					{text}
				</Text>
			)}
		</Pressable>
	);
};

export default PictureBox;
