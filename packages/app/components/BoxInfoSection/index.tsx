import { View } from "@showtime-xyz/universal.view";
import LongBox from "app/components/BoxInfoSection/LongBox";
import MainTitle from "app/components/MainTitle";
import Box from "app/components/BoxInfoSection/Box";
import { BoxInfoSectionProps } from "./types";

const BoxInfoSection = (props: BoxInfoSectionProps) => {
	const { boxesContents, longEndingBox, ...rest } = props.boxInfoSectionProp;

	return (
		<View tw="gap-12">
			{(rest.title || rest.description || rest.display) && (
				<MainTitle {...rest} />
			)}
			<View tw="items-center justify-center gap-16">
				{boxesContents.map((box) => (
					<Box
						key={box.title}
						title={box.title}
						description={box.description}
						image={box.image}
						reverse={box.reverse}
						buttonText={box.buttonText}
						buttonLink={box.buttonLink}
					/>
				))}
				{longEndingBox && (
					<LongBox
						title={longEndingBox.title}
						description={longEndingBox.description}
						image={longEndingBox.image}
						buttonLink={longEndingBox.buttonLink as string}
						buttonText={longEndingBox.buttonText as string}
					/>
				)}
			</View>
		</View>
	);
};

export default BoxInfoSection;
