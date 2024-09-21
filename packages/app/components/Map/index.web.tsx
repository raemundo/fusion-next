import { View } from "@showtime-xyz/universal.view";

const Map = ({ source }) => {
	return (
		<View className="h-[400px] w-full overflow-hidden rounded-3xl md:h-[500px]">
			<iframe
				src={source}
				width="100%"
				height="100%"
				loading="lazy"
			></iframe>
		</View>
	);
};

export default Map;
