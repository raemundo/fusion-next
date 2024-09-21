import { View } from "@showtime-xyz/universal.view";
import { Text } from "@showtime-xyz/universal.text";
import { LargeCardProps } from "./types";

const LargeCard = (props: LargeCardProps) => {
	const { title, description, icon, variant } = props;

	const variantValue = variant ? variant : "normal";

	return (
		<View
			key={title}
			tw={`h-[520px] flex-grow items-start gap-8 border-t border-[#6a6d7833] bg-white px-7 py-10 ${
				variantValue === "normal" ? "last:border-b" : "border-b"
			} dark:border-[#434651] dark:bg-black ${
				variantValue === "normal"
					? "w-screen sm:w-[320px]"
					: "w-[320px]"
			} ${variantValue === "normal" ? "sm:rounded-3xl" : "rounded-3xl"} ${
				variantValue === "normal" ? "sm:border-x" : "border-x"
			} ${variantValue === "normal" ? "sm:border-b" : "border-b"} ${
				variantValue === "normal" ? "sm:p-12" : "p-12"
			} xl:w-[380px] 2xl:w-[420px]`}
		>
			<View>{icon}</View>
			<View tw="items-start gap-4">
				<Text
					tw="font-secondary line-clamp-2 text-2xl font-semibold text-black dark:text-white lg:text-3xl"
					role="heading"
					aria-level={2}
				>
					{title}
				</Text>
				<Text
					tw="font-secondary text-lg font-normal text-black dark:text-[#b2b5be]"
					role="paragraph"
				>
					{description}
				</Text>
			</View>
		</View>
	);
};

export default LargeCard;
