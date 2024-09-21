import { useRef } from "react";

const PortfolioVideo = ({ source }) => {
	const videoRef = useRef<HTMLVideoElement>(null);

	return (
		<video
			ref={videoRef}
			src={source}
			style={{ width: "100vw" }}
			loop
			muted
		/>
	);
};

export default PortfolioVideo;
