import { useState, useEffect } from "react";
import { Dimensions } from "react-native";
import { View } from "@showtime-xyz/universal.view";
import Carousel from "react-native-reanimated-carousel";
import { AnimatedCarouselProps } from "./types";

function AnimatedCarousel(props: AnimatedCarouselProps) {
	const { items, height, duration, autoPlay, itemsOnScreenCount } = props;

	const [width, setWidth] = useState(
		// Dimensions.get("window").width > 1720
		// 	? 1720
		// 	:
		Dimensions.get("window").width,
	);

	const count = itemsOnScreenCount || items.length;

	const [carouselHeight, setCarouselHeight] = useState(
		width / count > 500 ? 500 : width / count,
	);

	useEffect(() => {
		const subscription = Dimensions.addEventListener(
			"change",
			({ window }) => {
				setWidth(window.width);
				setCarouselHeight(
					window.width / count > 500 ? 500 : window.width / count,
				);
			},
		);
		return () => subscription?.remove();
	});

	return (
		<View tw="w-full items-center justify-center">
			{/* use overflow-hidden to limit width */}
			<Carousel
				width={width / count}
				height={height || carouselHeight}
				style={{
					width: width,
				}}
				loop
				autoPlay={autoPlay || true}
				autoPlayInterval={duration || 2000}
				data={[...new Array(count * 3).keys()]}
				enabled={false}
				autoFillData={true}
				renderItem={({ index }) => (
					<View
						key={index}
						tw="h-fit items-center justify-center overflow-hidden"
					>
						{items[index % items.length]}
					</View>
				)}
			/>
		</View>
	);
}

export default AnimatedCarousel;
