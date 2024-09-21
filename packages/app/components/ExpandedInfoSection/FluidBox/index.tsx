import { Text } from "@showtime-xyz/universal.text";
import { View } from "@showtime-xyz/universal.view";
import { Image } from "@showtime-xyz/universal.image";
import { Button } from "@showtime-xyz/universal.button";
import { Check } from "@showtime-xyz/universal.icon";
import { Link } from "solito/link";
import { FluidBoxProps } from "./types";

const FluidBox = (props: FluidBoxProps) => {
	const { image, title, description, list, link, buttonString, reverse } =
		props.fluidBoxProp;

	return (
		<View
			tw={`w-screen items-center justify-between gap-8 overflow-hidden border-t border-[#6a6d7833] bg-white px-5 py-12 last:border-b dark:border-[#434651] dark:bg-black sm:max-w-full sm:rounded-3xl sm:border-x sm:border-b sm:p-14 xl:gap-24 ${
				reverse ? "xl:flex-row-reverse" : "xl:flex-row"
			}`}
		>
			<View tw="w-full items-start gap-8 xl:max-w-[500px]">
				<Text
					tw="font-secondary text-3xl font-bold text-black dark:text-white md:text-5xl"
					role="heading"
					aria-level={2}
				>
					{title}
				</Text>
				<Text
					tw="font-secondary font-normal text-black dark:text-[#b2b5be] md:text-lg"
					role="paragraph"
				>
					{description}
				</Text>
				{list && (
					<View tw="flex-row">
						<View tw="flex gap-4">
							{list.map((item) => (
								<View
									key={item}
									tw="flex-row items-center gap-2"
								>
									<Check
										color="#b2b5be"
										height={28}
										width={28}
									/>
									<Text
										tw="font-secondary font-semibold text-black dark:text-white md:text-lg"
										role="paragraph"
									>
										{item}
									</Text>
								</View>
							))}
						</View>
					</View>
				)}
				<View tw="flex-row">
					<Link href={link}>
						<Button
							variant="outlined"
							labelTW="font-secondary"
							size="regular"
							disabled
						>
							{buttonString}
						</Button>
					</Link>
				</View>
			</View>
			<View tw="w-screen flex-grow overflow-hidden max-sm:-mx-5 sm:max-w-full sm:rounded-3xl xl:w-1/2">
				<Image
					source={image}
					alt={title}
					height={1000}
					width={4000}
					resizeMode="cover"
					tw="sm:rounded-3xl"
				/>
			</View>
		</View>
	);
};

export default FluidBox;
