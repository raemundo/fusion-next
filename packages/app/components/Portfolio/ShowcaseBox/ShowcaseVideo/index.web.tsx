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
				borderRadius: "8px",
				width: "100%",
			}}
		/>
	);
};

export default ShowcaseVideo;
