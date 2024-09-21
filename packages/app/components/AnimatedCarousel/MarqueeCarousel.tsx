import { useState, useEffect } from "react";
import { Dimensions } from "react-native";
import { View } from "@showtime-xyz/universal.view";
import Carousel from "react-native-reanimated-carousel";
import { Easing } from "react-native-reanimated";
import { MarqueeCarouselProps } from "./types";

function MarqueeCarousel(props: MarqueeCarouselProps) {
	const { items, height, duration, autoPlay, itemsOnScreenCount } = props;
	const count = itemsOnScreenCount || items.length;
	const [width, setWidth] = useState(
		// Dimensions.get("window").width > 1720
		// 	? 1720
		// :
		Dimensions.get("window").width,
	);

	useEffect(() => {
		const subscription = Dimensions.addEventListener(
			"change",
			({ window }) => {
				setWidth(window.width);
			},
		);
		return () => subscription?.remove();
	});

	return (
		<View tw="w-full items-center justify-center">
			{/* use overflow-hidden to limit width */}
			<Carousel
				width={width / count}
				height={height || 96}
				style={{
					width: width,
					height: height || 96,
				}}
				loop
				autoPlay={autoPlay || true}
				withAnimation={{
					type: "timing",
					config: {
						duration: duration || 5000,
						easing: Easing.linear,
					},
				}}
				autoPlayInterval={0}
				data={[...new Array(count * 3).keys()]}
				enabled={false}
				autoFillData={true}
				renderItem={({ index }) => (
					<View
						key={index}
						tw="h-full w-fit items-center justify-center overflow-hidden"
					>
						{items[index % items.length]}
					</View>
				)}
			/>
		</View>
	);
}

export default MarqueeCarousel;
