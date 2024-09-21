import { Text } from "@showtime-xyz/universal.text";
import { View } from "@showtime-xyz/universal.view";
import { Button } from "@showtime-xyz/universal.button";
import { ChevronDown, Play } from "@showtime-xyz/universal.icon";
import { Link } from "solito/link";
import { ImageHeroSectionProps } from "./types";
import { Pressable } from "@showtime-xyz/universal.pressable";

const ImageHeroSection = (props: ImageHeroSectionProps) => {
	const {
		title,
		secondTitle,
		text,
		description,
		primaryButtonString,
		primaryButtonLink,
		secondaryButtonString,
		secondaryButtonLink,
		display,
		startAligned,
		lightText,
		explainerLink,
		explainerLinkText,
	} = props.imageHeroSectionProp;

	return (
		<View
			tw={`${
				startAligned ? "md:items-start" : ""
			} items-center justify-end gap-8 md:justify-center md:gap-[120px] 2xl:gap-20`}
		>
			<View
				tw={`absolute z-20 w-full ${
					//md:max-w-[75%]
					startAligned ? "md:items-start" : ""
				} items-center gap-8 px-2 pb-64 pt-32 md:px-20  md:py-32 xl:px-[100px] 2xl:px-[200px] min-[2000px]:px-[320px]`} // px-5
			>
				<View
					tw={`flex-col ${
						startAligned ? "md:items-start" : ""
					} items-center`}
				>
					{title && (
						<Text
							tw={`${
								startAligned ? "md:text-start" : ""
							} text-center text-[12vw] font-bold leading-[12vw] md:text-[7vw] md:leading-[7vw] ${
								lightText
									? "text-white"
									: "text-black dark:text-white"
							} font-primary 2xl:text-[100px] 2xl:leading-[100px]`}
							role="heading"
							aria-level={1}
						>
							{title}
						</Text>
					)}
					{secondTitle && (
						<Text
							tw={`font-primary ${
								startAligned ? "md:text-start" : ""
							} text-center text-[12vw] font-bold leading-[12vw] md:text-[7vw] md:leading-[7vw] ${
								lightText
									? "text-white"
									: "text-black dark:text-white"
							} 2xl:text-[100px] 2xl:leading-[100px]`}
							role="heading"
							aria-level={1}
						>
							{secondTitle}
						</Text>
					)}
				</View>
				{text && (
					<Text
						tw={`${
							startAligned ? "md:text-start" : ""
						} text-center text-[24px] font-semibold ${
							lightText
								? "text-white"
								: "text-black dark:text-white"
						} font-secondary leading-[28px] md:text-[48px] md:leading-[56px] lg:w-[70%]`}
						role="paragraph"
					>
						{text}
					</Text>
				)}
				{description && (
					<Text
						tw={`${
							startAligned ? "md:text-start" : ""
						} text-center text-lg font-normal md:text-xl ${
							lightText
								? "text-white"
								: "text-black dark:text-[#d1d4dc]"
						} font-secondary lg:text-3xl xl:w-[80%]`}
						role="paragraph"
					>
						{description}
					</Text>
				)}
				{(primaryButtonLink || secondaryButtonLink) && (
					<View
						tw={`flex flex-row flex-wrap items-center ${
							startAligned ? "md:justify-start" : ""
						} justify-center gap-4`}
					>
						{primaryButtonLink && (
							<Link href={primaryButtonLink}>
								<Button
									variant="primary"
									size="regular"
									labelTW="font-secondary"
									disabled
								>
									{primaryButtonString}
								</Button>
							</Link>
						)}
						{secondaryButtonLink && (
							<Link href={secondaryButtonLink}>
								<Button
									variant="secondary"
									size="regular"
									labelTW="font-secondary"
									disabled
								>
									{secondaryButtonString}
								</Button>
							</Link>
						)}
					</View>
				)}
			</View>
			{explainerLink && (
				<View tw="absolute bottom-20 right-5 z-20 hidden self-end rounded-full bg-white bg-opacity-10 px-8 py-1 hover:bg-opacity-30 lg:right-8 lg:flex">
					<Link href={explainerLink}>
						<Pressable tw="flex-row items-center gap-1" disabled>
							<Play color="white" width={24} height={24} />
							<Text
								tw={`font-secondary font-semibold ${
									lightText ? "text-white" : "text-black"
								}`}
							>
								{explainerLinkText}
							</Text>
						</Pressable>
					</Link>
				</View>
			)}
			<View tw="absolute bottom-16 z-20 hidden self-center !opacity-75 lg:flex">
				<ChevronDown color="#d1d4dc" height={48} width={48} />
			</View>
			<View tw="h-full w-full">{display}</View>
		</View>
	);
};

export default ImageHeroSection;
