import { View } from "@showtime-xyz/universal.view";
import { Text } from "@showtime-xyz/universal.text";
import { SmallCardProps } from "./types";

const SmallCard = (props: SmallCardProps) => {
	const { title, icon, variant } = props;

	const variantValue = variant ? variant : "normal";

	return (
		<View
			key={title}
			tw={`h-[240px] items-center gap-4 border-t border-[#6a6d7833] bg-white p-12 ${
				variantValue === "normal" ? "last:border-b" : "border-b"
			} dark:border-[#434651] dark:border-gray-800 dark:bg-black ${
				variantValue === "normal"
					? "w-screen sm:w-[240px]"
					: "w-[240px]"
			} ${variantValue === "normal" ? "sm:rounded-3xl" : "rounded-3xl"} ${
				variantValue === "normal" ? "sm:border-x" : "border-x"
			} ${variantValue === "normal" ? "sm:border-b" : "border-b"} `}
		>
			<View tw="mb-2 items-center justify-center">{icon}</View>
			<Text
				tw="font-secondary text-center text-xl font-bold text-black dark:text-white"
				role="heading"
				aria-level={2}
			>
				{title}
			</Text>
		</View>
	);
};

export default SmallCard;
