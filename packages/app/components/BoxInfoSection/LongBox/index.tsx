import { Text } from "@showtime-xyz/universal.text";
import { View } from "@showtime-xyz/universal.view";
import { Image } from "@showtime-xyz/universal.image";
import { LongBoxProps } from "./types";
import { Button } from "@showtime-xyz/universal.button";
import { Link } from "solito/link";

const LongBox = (props: LongBoxProps) => {
	const { title, description, image, buttonText, buttonLink } = props;

	return (
		<View tw="w-full gap-8 lg:flex-row">
			<View tw="flex-shrink justify-center rounded-3xl bg-white dark:bg-black md:w-2/3 lg:flex-row">
				<View tw="w-full items-start justify-center gap-8">
					<View tw="flex-col items-start gap-4">
						<Text
							tw="font-secondary text-3xl font-bold text-black dark:text-white md:text-4xl lg:text-5xl"
							role="heading"
							aria-level={2}
						>
							{title}
						</Text>
						<Text
							tw="font-secondary text-lg font-normal text-black dark:text-[#b2b5be] md:text-xl"
							role="paragraph"
						>
							{description}
						</Text>
					</View>
					<View tw="flex-row">
						<Link href={buttonLink}>
							<Button
								variant="outlined"
								size="regular"
								labelTW="font-secondary"
								disabled
							>
								{buttonText}
							</Button>
						</Link>
					</View>
				</View>
			</View>
			<View tw="w-full overflow-hidden rounded-3xl xl:w-1/3">
				<Image
					source={image}
					width={1000}
					height={400}
					resizeMode="cover"
					alt={title}
				/>
			</View>
		</View>
	);
};

export default LongBox;
