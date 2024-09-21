import { useRef } from "react";

const ShowcaseVideo = ({ video }) => {
	const videoRef = useRef<HTMLVideoElement>(null);

	return (
		<video
			ref={videoRef}
			autoPlay
			loop
			muted
			playsInline
			controlsList="nofullscreen"
			src={video}
			style={{
				zIndex: -10,
				position: "absolute",
				borderRadius: "24px",
				width: "280px",
				height: "97%",
			}}
		/>
	);
};

export default ShowcaseVideo;
