import { useRef } from "react";

const ShowcaseVideo = ({ video }) => {
	const videoRef = useRef<HTMLVideoElement>(null);

	return (
		<video
			ref={videoRef}
			autoPlay
			loop
			muted
			src={video}
			style={{
				zIndex: -10,
				position: "absolute",
				borderRadius: "48px",
			}}
		/>
	);
};

export default ShowcaseVideo;
