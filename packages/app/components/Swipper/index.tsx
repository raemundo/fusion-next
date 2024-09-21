import { useState, useEffect } from "react";
import { Dimensions } from "react-native";
import { ScrollView } from "@showtime-xyz/universal.scroll-view";
import { SwipperProps } from "./types";

const Swipper = (props: SwipperProps) => {
	const { children, tw } = props;

	const [width, setWidth] = useState(Dimensions.get("window").width);

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
		<ScrollView
			horizontal
			scrollEnabled
			showsHorizontalScrollIndicator={false}
			contentContainerStyle={{
				flex: 1,
				flexDirection: "row",
				gap: width > 1024 ? 32 : 16,
			}}
			tw={"max-w-full items-start justify-start" + tw}
		>
			{children}
		</ScrollView>
	);
};

export default Swipper;
