import { Image } from "@showtime-xyz/universal.image";
import { PictureCardImageProps } from "./types";

const PictureCardImage = (props: PictureCardImageProps) => {
	const { source, alt, tw } = props;

	return (
		<Image
			source={source}
			alt={alt}
			width={1000}
			height={550}
			tw={
				"h-[260px] min-w-full object-cover transition-transform duration-300 ease-in-out hover:scale-105 md:h-[300px] xl:min-h-[550px] " +
				tw
			}
		/>
	);
};

export default PictureCardImage;
