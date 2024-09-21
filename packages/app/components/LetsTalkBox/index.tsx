import { View } from "@showtime-xyz/universal.view";
import { Text } from "@showtime-xyz/universal.text";
import { Button } from "@showtime-xyz/universal.button";
import { Link } from "solito/link";
import { LetsTalkBoxProps } from "./types";

const LetsTalkBox = (props: LetsTalkBoxProps) => {
	const { title, subtitle, buttonString, buttonLink, display } =
		props.letsTalkBoxProp;

	return (
		<View tw="w-screen items-center justify-around gap-16 overflow-hidden border-y border-[#6a6d7833] bg-white bg-white px-4 py-8 dark:border-[#434651] dark:bg-black sm:w-full sm:rounded-3xl sm:border-x sm:p-14 lg:flex-row">
			<View tw="flex-shrink items-start gap-3">
				<Text
					tw="font-secondary text-3xl font-bold text-black dark:text-white md:text-5xl"
					role="heading"
					aria-level={1}
				>
					{title}
				</Text>
				<Text
					tw="font-secondary text-lg font-normal text-black dark:text-[#b2b5be] md:text-xl"
					role="paragraph"
				>
					{subtitle}
				</Text>
				<View tw="mt-5 md:flex-row">
					<Link href={buttonLink}>
						<Button
							variant="primary"
							size="regular"
							labelTW="font-secondary"
							disabled
						>
							{buttonString}
						</Button>
					</Link>
				</View>
			</View>
			{display}
		</View>
	);
};

export default LetsTalkBox;
