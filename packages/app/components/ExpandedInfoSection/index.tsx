import FluidBox from "app/components/ExpandedInfoSection/FluidBox";
import MainTitle from "app/components/MainTitle";
import { ExpandedInfoSectionProps } from "./types";
import { View } from "@showtime-xyz/universal.view";

const ExpandedInfoSection = (props: ExpandedInfoSectionProps) => {
	const { content, ...rest } = props.expandedInfoSectionProp;

	return (
		<>
			{(rest.title || rest.description || rest.display) && (
				<MainTitle {...rest} />
			)}
			<View tw="items-sretch w-full flex-row flex-wrap justify-center sm:gap-8 2xl:px-[100px]">
				{content.map((fluidBoxContent) => (
					<FluidBox
						key={fluidBoxContent.title}
						fluidBoxProp={fluidBoxContent}
					/>
				))}
			</View>
		</>
	);
};

export default ExpandedInfoSection;
