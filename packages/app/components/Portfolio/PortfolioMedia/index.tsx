import { Image } from "@showtime-xyz/universal.image";
import { View } from "@showtime-xyz/universal.view";
import { PortfolioMediaProps } from "./types";
import PortfolioVideo from "app/components/Portfolio/PortfolioMedia/PortfolioVideo";

const PortfolioMedia = (props: PortfolioMediaProps) => {
	const { media } = props;

	return (
		<View tw="w-full">
			{media.map((mediaItem, index) => {
				if (mediaItem.type === "image") {
					return (
						<Image
							key={index}
							source={mediaItem.source}
							width={4000}
							height={4000}
							alt="Portfolio Image"
						/>
					);
				} else if (mediaItem.type === "video") {
					return (
						<PortfolioVideo source={mediaItem.source} key={index} />
					);
				}
			})}
		</View>
	);
};

export default PortfolioMedia;
