import React, { useRef, useState } from "react";
import { View } from "@showtime-xyz/universal.view";
import { Video, ResizeMode } from "expo-av";

const ShowcaseVideo = ({ video }) => {
	const videoRef = useRef<Video>(null);

	return (
		<View tw="flex-1 items-center justify-center">
			<Video
				ref={videoRef}
				source={video}
				useNativeControls
				resizeMode={ResizeMode.CONTAIN}
				isLooping
				isMuted
			/>
		</View>
	);
};

export default ShowcaseVideo;
