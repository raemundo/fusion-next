import { View } from "@showtime-xyz/universal.view";
import { Text } from "@showtime-xyz/universal.text";

const FeaturesItem = ({ feature, variant }) => {
	return (
		<View
			tw={`w-full flex-col ${
				variant === "centered" ? "items-center" : "items-start"
			} justify-between gap-6 md:w-[340px] xl:w-[360px] min-[1920px]:w-[400px]`}
		>
			<View tw=" items-center justify-center">{feature.icon}</View>
			<View
				tw={`${
					variant === "centered" ? "items-center" : "items-start"
				} gap-2`}
			>
				<Text
					tw={`font-secondary 
					${variant === "centered" ? "text-center" : "text-start"}
					text-xl font-bold text-black dark:text-white lg:text-2xl`}
					role="heading"
					aria-level={3}
				>
					{feature.title}
				</Text>
				{feature.description && (
					<Text
						tw={`text-md font-secondary ${
							variant === "centered"
								? "text-center"
								: "text-start"
						} font-normal text-black dark:text-[#d1d4dc] lg:text-lg`}
						role="paragraph"
					>
						{feature.description}
					</Text>
				)}
			</View>
		</View>
	);
};

export default FeaturesItem;
