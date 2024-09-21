import { Text } from "@showtime-xyz/universal.text";
import { View } from "@showtime-xyz/universal.view";
import { Button } from "@showtime-xyz/universal.button";
import { CTASectionProps } from "./types";
import { Link } from "solito/link";

const CTASection = (props: CTASectionProps) => {
	const {
		heading,
		subheading,
		text,
		display,
		primaryButtonString,
		primaryButtonLink,
		secondayButtonString,
		secondaryButtonLink,
		lightText,
	} = props.ctaSectionProp;

	return (
		<View
			tw={`justify-center gap-12 ${
				display ? "items-center lg:flex-row lg:gap-0" : ""
			}`}
		>
			<View
				tw={`flex-shrink justify-center gap-8 ${
					display ? "lg:basis-3/5 lg:px-16" : "lg:px-8"
				}`}
			>
				<View tw="flex flex-col gap-4">
					<Text
						tw={`font-primary text-5xl font-bold ${
							lightText
								? "text-white"
								: "text-black dark:text-white"
						} lg:text-8xl`}
						role="heading"
						aria-level={1}
					>
						{heading}
					</Text>
					{subheading && (
						<Text
							tw={`font-primary text-3xl font-bold ${
								lightText
									? "text-white"
									: "text-black dark:text-white"
							} lg:text-5xl`}
							role="heading"
							aria-level={1}
						>
							{subheading}
						</Text>
					)}
				</View>
				<Text
					tw={`font-secondary text-xl ${
						lightText ? "text-white" : "text-black dark:text-white"
					} font-semibold leading-relaxed lg:text-3xl`}
					role="paragraph"
				>
					{text}
				</Text>
				<View tw="gap-2 md:flex-row">
					<Link href={primaryButtonLink}>
						<Button
							size="regular"
							variant="primary"
							labelTW="font-secondary"
							disabled
						>
							{primaryButtonString}
						</Button>
					</Link>
					{secondaryButtonLink && (
						<Link href={secondaryButtonLink}>
							<Button
								size="regular"
								variant="secondary"
								labelTW="font-secondary"
								disabled
							>
								{secondayButtonString}
							</Button>
						</Link>
					)}
				</View>
			</View>
			{display && <View tw="lg:basis-2/5 ">{display}</View>}
		</View>
	);
};

export default CTASection;
