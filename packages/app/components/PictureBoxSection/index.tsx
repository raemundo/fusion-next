import { View } from "@showtime-xyz/universal.view";
import MainTitle from "app/components/MainTitle";
import PictureBox from "app/components/PictureBox";
import { PictureBoxSectionProps } from "./types";
import Swipper from "app/components/Swipper";
import { PictureBoxProps } from "../PictureBox/types";

const PictureBoxSection = (props: PictureBoxSectionProps) => {
	const { pictureBoxesContent, variant, ...rest } =
		props.pictureBoxSectionProp;

	const variantValue = variant ? variant : "normal";

	const renderContent = pictureBoxesContent.map(
		(pictureBox: PictureBoxProps, index: number) => (
			<PictureBox
				key={index}
				text={pictureBox?.text}
				image={pictureBox.image}
				link={pictureBox.link}
			/>
		),
	);

	return (
		<View tw="w-full gap-6 md:gap-16 xl:gap-20">
			{(rest.title || rest.description || rest.display) && (
				<MainTitle {...rest} />
			)}
			{variantValue === "swipper" ? (
				<Swipper>{renderContent}</Swipper>
			) : (
				<View tw="flex-row flex-wrap items-stretch justify-center md:gap-6 xl:gap-8">
					{renderContent}
				</View>
			)}
		</View>
	);
};

export default PictureBoxSection;
