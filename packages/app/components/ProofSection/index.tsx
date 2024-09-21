import { View } from "@showtime-xyz/universal.view";
import MainTitle from "app/components/MainTitle";
import { ProofSectionProps } from "./types";
import SectionContainer from "app/components/SectionContainer";
import ProofItem from "app/components/ProofSection/ProofItem";

const ProofSection = (props: ProofSectionProps) => {
	const { proof, headingTW, subheadingTW, proofItemCentered, ...rest } =
		props.proofSectionProp;

	return (
		<SectionContainer>
			{(rest.title || rest.description || rest.display) && (
				<MainTitle {...rest} />
			)}
			<View tw="w-full flex-row flex-wrap items-start justify-start gap-8 xl:gap-12 2xl:gap-16">
				{proof.map((item, index) => (
					<ProofItem
						key={index}
						item={item}
						headingTW={headingTW}
						subheadingTW={subheadingTW}
						centered={proofItemCentered}
					/>
				))}
			</View>
		</SectionContainer>
	);
};

export default ProofSection;
