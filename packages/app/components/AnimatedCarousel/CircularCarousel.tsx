import { useState, useCallback, useEffect } from "react";
import { Dimensions } from "react-native";
import { View } from "@showtime-xyz/universal.view";
import { interpolate } from "react-native-reanimated";
import Carousel from "react-native-reanimated-carousel";
import { CircularCarouselProps } from "./types";

function CircularCarousel(props: CircularCarouselProps) {
	const { items, itemSize: sizing, duration, autoPlay } = props;
	const [width, setWidth] = useState(
		// Dimensions.get("window").width > 1720
		// 	? 1720
		// 	:
		Dimensions.get("window").width,
	);

	const [defaultItemSize, setDefaultItemSize] = useState(
		width / 3 > 500 ? 500 : width / 3,
	);

	useEffect(() => {
		const subscription = Dimensions.addEventListener(
			"change",
			({ window }) => {
				setWidth(window.width);
				setDefaultItemSize(
					window.width / 3 > 500 ? 500 : window.width / 3,
				);
			},
		);
		return () => subscription?.remove();
	});

	const itemSize = sizing || defaultItemSize;

	const centerOffset = width / 2 - itemSize / 2;

	const animationStyle = useCallback(
		(value: number) => {
			"worklet";

			const itemGap = interpolate(
				value,
				[-3, -2, -1, 0, 1, 2, 3],
				[-30, -15, 0, 0, 0, 15, 30],
			);

			const translateX =
				interpolate(value, [-1, 0, 1], [-itemSize, 0, itemSize]) +
				centerOffset -
				itemGap;

			const translateY = interpolate(
				value,
				[-1, -0.5, 0, 0.5, 1],
				[60, 45, 40, 45, 60],
			);

			const scale = interpolate(
				value,
				[-1, -0.5, 0, 0.5, 1],
				[0.8, 0.85, 1.1, 0.85, 0.8],
			);

			const brightness = interpolate(
				value,
				[0, 0.5, 1, 0.5, 0],
				[0.8, 0.85, 1.1, 0.85, 0.8],
			);

			return {
				transform: [
					{
						translateX,
					},
					{
						translateY,
					},
					{ scale },
				],
			};
		},
		[centerOffset],
	);

	return (
		<View tw="w-full items-center justify-center">
			{/* use overflow-hidden to limit width */}
			<Carousel
				width={itemSize}
				height={itemSize}
				style={{
					width: width,
					height: itemSize * 1.5,
				}}
				loop
				autoPlay={autoPlay || true}
				enabled={false}
				autoPlayInterval={duration || 2000}
				data={[...new Array(items.length * 3).keys()]}
				renderItem={({ index }) => (
					<View
						key={index}
						tw="min-h-full items-center justify-center overflow-hidden"
					>
						{items[index % items.length]}
					</View>
				)}
				customAnimation={animationStyle}
			/>
		</View>
	);
}

export default CircularCarousel;
