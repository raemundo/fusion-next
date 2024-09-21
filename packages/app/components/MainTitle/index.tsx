import { Text } from "@showtime-xyz/universal.text";
import { View } from "@showtime-xyz/universal.view";
import { Divider } from "@showtime-xyz/universal.divider";
import { Button } from "@showtime-xyz/universal.button";
import { Link } from "solito/link";
import { MainTitleProps } from "./types";

const index = (props: MainTitleProps) => {
	const {
		title,
		description,
		button,
		startAligned,
		display,
		divider,
		titleTW,
		descriptionTW,
	} = props;

	return (
		<View
			tw={`w-full ${
				startAligned ? "items-start" : "items-center"
			} gap-4 xl:gap-6`}
		>
			{title && (
				<Text
					tw={`font-primary max-w-[1000px] ${
						startAligned ? "text-start" : "text-center"
					} text-4xl font-semibold text-black dark:text-white md:text-6xl lg:text-8xl ${titleTW}`}
					role="heading"
					aria-level={1}
				>
					{title}
				</Text>
			)}
			{description && (
				<Text
					tw={`font-secondary max-w-[1000px] ${
						startAligned ? "text-start" : "text-center"
					} text-xl font-normal text-black dark:text-[#d1d4dc] md:text-2xl lg:text-3xl ${descriptionTW}`}
					role="paragraph"
				>
					{description}
				</Text>
			)}
			{button && (
				<View
					tw={`flex-row items-center ${
						startAligned ? "justify-start" : "justify-center"
					}`}
				>
					<Link href={button.link}>
						<Button
							variant="outlined"
							size="regular"
							labelTW="font-secondary"
							disabled
						>
							{button.text}
						</Button>
					</Link>
				</View>
			)}
			{display && (
				<View
					tw={`w-full flex-row items-center ${
						startAligned ? "justify-start" : "justify-center"
					}`}
				>
					{display}
				</View>
			)}
			{divider && <Divider />}
		</View>
	);
};

export default index;
