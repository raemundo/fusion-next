import { View } from "@showtime-xyz/universal.view";
import { Text } from "@showtime-xyz/universal.text";
import { Button } from "@showtime-xyz/universal.button";
import { useIsDarkMode } from "@showtime-xyz/universal.hooks";
import { Link } from "solito/link";
import { PosterProps } from "./types";

const Poster = (props: PosterProps) => {
	const { title, subtitle, buttonString, buttonLink, display } =
		props.posterProp;

	const isDarkMode = useIsDarkMode();

	return (
		<View tw="h-[400px] w-screen gap-16 overflow-hidden bg-white bg-white dark:bg-black sm:w-full sm:rounded-[32px] md:h-[500px]">
			<View tw="absolute z-20 h-full max-w-[650px] items-center justify-center gap-3 px-10 md:items-start">
				<Text
					tw="font-primary text-center text-4xl font-bold text-white md:text-start md:text-6xl"
					role="heading"
					aria-level={1}
				>
					{title}
				</Text>
				<Text
					tw="font-secondary text-center text-2xl font-normal text-white md:text-start md:text-3xl"
					role="paragraph"
				>
					{subtitle}
				</Text>
				{buttonLink && buttonString && (
					<View tw="mt-5 md:flex-row">
						<Link href={buttonLink}>
							<Button
								variant={isDarkMode ? "primary" : "secondary"}
								size="regular"
								labelTW="font-secondary"
								disabled
							>
								{buttonString}
							</Button>
						</Link>
					</View>
				)}
			</View>
			<View tw="h-full w-full overflow-hidden brightness-50">
				{display}
			</View>
		</View>
	);
};

export default Poster;
