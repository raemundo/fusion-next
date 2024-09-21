import { View } from "@showtime-xyz/universal.view";
import { Text } from "@showtime-xyz/universal.text";
import { ChevronRight } from "@showtime-xyz/universal.icon";
import { Pressable } from "@showtime-xyz/universal.pressable";
import { useIsDarkMode } from "@showtime-xyz/universal.hooks";
import { useLink } from "solito/navigation";
import { LinkItemProps } from "./types";

const LinkItem = (props: LinkItemProps) => {
	const { link, display, title, text, linkText } = props;
	const isDarkMode = useIsDarkMode();
	const elementLink = link
		? useLink({
				href: link,
		  })
		: {};

	return (
		<Pressable
			{...elementLink}
			tw="basis-1/2 items-start px-5 py-8 md:p-8 lg:px-16 lg:py-12"
		>
			<View tw="items-start gap-12">
				<View tw="relative items-start justify-center">
					<View tw="absolute blur-[30px] md:blur-[40px]">
						{display}
					</View>
					{display}
				</View>
				<View tw="items-start gap-4">
					<View tw="gap-3">
						<Text tw="font-secondary text-3xl font-semibold text-black dark:text-white lg:text-4xl">
							{title}
						</Text>
						<Text tw="font-secondary text-lg text-black dark:text-[#b2b5be]">
							{text}
						</Text>
					</View>
					<View tw="flex-row items-center">
						<Text tw="font-secondary text-lg font-semibold text-black dark:text-white">
							{linkText}
						</Text>
						<ChevronRight
							width={24}
							height={24}
							color={isDarkMode ? "white" : "black"}
						/>
					</View>
				</View>
			</View>
		</Pressable>
	);
};

export default LinkItem;
