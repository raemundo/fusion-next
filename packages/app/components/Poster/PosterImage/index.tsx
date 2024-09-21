import { Image } from "@showtime-xyz/universal.image";
import { PosterImageProps } from "./types";

const PosterImage = (props: PosterImageProps) => {
	const { source, alt, tw } = props;

	return (
		<Image
			source={source}
			alt={alt}
			width={4000}
			height={500}
			tw={
				"min-h-[400px] object-cover object-bottom md:min-h-[500px] " +
				tw
			}
		/>
	);
};

export default PosterImage;
