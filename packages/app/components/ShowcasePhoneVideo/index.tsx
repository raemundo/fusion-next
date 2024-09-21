import { ShowcasePhoneVideoProps } from "./types";
import { View } from "@showtime-xyz/universal.view";
import { Image } from "@showtime-xyz/universal.image";
import ShowcaseVideo from "app/components/ShowcasePhoneVideo/ShowcaseVideo";
import { useTranslation } from "react-i18next";

const ShowcasePhoneVideo = (props: ShowcasePhoneVideoProps) => {
	const { image, video } = props;
	const { t } = useTranslation();

	return (
		<View tw="items-center justify-center overflow-hidden">
			<Image
				source={image}
				alt={t("showcase_phone_video")}
				width={300}
				height={600}
				resizeMode="none"
			/>
			<ShowcaseVideo video={video} />
		</View>
	);
};

export default ShowcasePhoneVideo;
