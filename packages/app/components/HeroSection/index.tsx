import { Text } from "@showtime-xyz/universal.text";
import { View } from "@showtime-xyz/universal.view";
import { Button } from "@showtime-xyz/universal.button";
import { Link } from "solito/link";
import { HeroSectionProps } from "./types";

const HeroSection = (props: HeroSectionProps) => {
	const {
		title,
		titleGradient,
		secondTitle,
		secondTitleGradient,
		text,
		description,
		primaryButtonString,
		primaryButtonLink,
		secondaryButtonString,
		secondaryButtonLink,
		display,
		startAligned,
		lightText,
	} = props.heroSectionProp;

	return (
		<View
			tw={`${
				startAligned ? "items-start" : "items-center"
			} gap-8 md:gap-[120px] 2xl:gap-20`}
		>
			{(title ||
				secondTitle ||
				text ||
				description ||
				primaryButtonLink ||
				secondaryButtonLink) && (
				<View
					tw={`flex-col ${
						startAligned ? "items-start" : "items-center"
					} gap-8`}
				>
					<View
						tw={`flex-col ${
							startAligned ? "items-start" : "items-center"
						}`}
					>
						{title && (
							<Text
								tw={`w-full ${
									startAligned ? "text-start" : "text-center"
								} text-[10vw] font-bold leading-[10vw] ${
									titleGradient
										? "bg-[linear-gradient(90deg,#00bce6,#2962ff,#d500f9)] bg-clip-text pb-[1vw] text-transparent"
										: lightText
										? "text-white"
										: "text-black dark:text-white"
								} font-primary min-[2000px]:text-[224px] min-[2000px]:leading-[224px]`}
								role="heading"
								aria-level={1}
							>
								{title}
							</Text>
						)}
						{secondTitle && (
							<Text
								tw={`font-primary w-full ${
									startAligned ? "text-start" : "text-center"
								} text-[10vw] font-bold ${
									secondTitleGradient
										? "bg-[linear-gradient(90deg,#00bce6,#2962ff,#d500f9)] bg-clip-text pb-[1vw] text-transparent"
										: lightText
										? "text-white"
										: "text-black dark:text-white"
								} leading-[10vw] min-[2000px]:text-[224px] min-[2000px]:leading-[224px]`}
								role="heading"
								aria-level={1}
							>
								{secondTitle}
							</Text>
						)}
					</View>
					{text && (
						<Text
							tw={`w-full ${
								startAligned ? "text-start" : "text-center"
							} text-[24px] font-semibold ${
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
							tw={`w-full ${
								startAligned ? "text-start" : "text-center"
							} text-xl font-normal ${
								lightText
									? "text-white"
									: "text-black dark:text-[#d1d4dc]"
							} font-secondary lg:text-3xl`}
							role="paragraph"
						>
							{description}
						</Text>
					)}
					{(primaryButtonLink || secondaryButtonLink) && (
						<View
							tw={`flex flex-row flex-wrap items-center ${
								startAligned
									? "justify-start"
									: "justify-center"
							} gap-4`}
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
										variant="outlined"
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
			)}
			{display && <View tw="w-full">{display}</View>}
		</View>
	);
};

export default HeroSection;
