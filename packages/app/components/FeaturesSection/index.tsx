import { View } from "@showtime-xyz/universal.view";
import MainTitle from "app/components/MainTitle";
import SectionContainer from "app/components/SectionContainer";
import { FeaturesSectionProps } from "./types";
import FeaturesItem from "app/components/FeaturesSection/FeatureItem";

const FeaturesSection = (props: FeaturesSectionProps) => {
	const { features, featureItemVariant, ...rest } = props.featuresSectionProp;

	const featureItemVariantValue = featureItemVariant || "normal";

	return (
		<SectionContainer>
			{(rest.title || rest.description || rest.display) && (
				<MainTitle {...rest} />
			)}
			<View tw="flex-row flex-wrap items-center justify-between gap-10 md:gap-12 xl:gap-x-16 xl:gap-y-20 2xl:gap-x-[120px] min-[1920px]:px-[100px]">
				{features.map((feature, index) => (
					<FeaturesItem
						key={index}
						feature={feature}
						variant={featureItemVariantValue}
					/>
				))}
			</View>
		</SectionContainer>
	);
};

export default FeaturesSection;
