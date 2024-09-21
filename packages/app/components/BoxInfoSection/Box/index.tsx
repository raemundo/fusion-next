import { Image } from "@showtime-xyz/universal.image";
import { Text } from "@showtime-xyz/universal.text";
import { View } from "@showtime-xyz/universal.view";
import { Button } from "@showtime-xyz/universal.button";
import { Link } from "solito/link";
import { BoxProps } from "./types";

const Box = (props: BoxProps) => {
	const { title, description, image, buttonText, buttonLink, reverse } =
		props;

	return (
		<View
			tw={`items-center gap-12 xl:h-[340px] xl:items-start xl:justify-between  ${
				reverse ? "xl:flex-row" : "xl:flex-row-reverse"
			}`}
		>
			<View tw="h-full flex-1 flex-col items-start justify-center gap-4 rounded-3xl bg-white dark:bg-black xl:w-1/2">
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
				{buttonText && buttonLink && (
					<View tw="mt-2 flex-row">
						<Link href={buttonLink}>
							<Button variant="outlined" size="regular" disabled>
								{buttonText}
							</Button>
						</Link>
					</View>
				)}
			</View>
			<View tw="w-full items-center justify-center overflow-hidden rounded-3xl  bg-white dark:bg-black xl:h-full  xl:w-1/2">
				<Image
					source={image}
					alt={title}
					width={1000}
					height={400}
					resizeMode="cover"
				/>
			</View>
		</View>
	);
};

export default Box;
