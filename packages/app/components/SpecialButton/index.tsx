import { Text } from "@showtime-xyz/universal.text";
import { Pressable } from "@showtime-xyz/universal.pressable";
import { View } from "@showtime-xyz/universal.view";
import { Image } from "@showtime-xyz/universal.image";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "solito/link";
import { SpecialButtonProps } from "./types";

const SpecialButton = (props: SpecialButtonProps) => {
	const { link, label, variant, colors, image, borderColor, labelTW, tw } =
		props;

	return (
		<Link href={link}>
			<Pressable
				tw={`items-center justify-center self-center overflow-hidden rounded-full ${
					variant === "solid"
						? "bg-transparent"
						: variant === "outlined"
						? "bg-" + (borderColor || "black dark:bg-white")
						: ""
				}`}
				disabled
			>
				<View
					tw={`absolute ${
						variant === ("image" || "gradient") ? "z310" : ""
					} h-full w-full brightness-75 transition-all duration-200 hover:brightness-100`}
				>
					{variant === "image" && (
						<Image
							source={image}
							height={1000}
							width={1000}
							tw="!min-w-full object-cover object-center"
						/>
					)}
					{(variant === "gradient" ||
						(variant === "outlined" && colors)) && (
						<LinearGradient
							colors={colors || ["#345677", "#FF6347"]} // ["#FFA07A", "#FF6347"]
							start={[0, 0]}
							end={[1, 1]}
							style={{
								height: "100%",
								width: "100%",
								position: "absolute",
							}}
						/>
					)}
				</View>
				<View
					tw={`z-20 !m-1 flex-row items-center justify-center rounded-full transition-all duration-200 hover:opacity-75 ${
						tw ||
						(variant === "gradient"
							? "bg-transparent"
							: "bg-white dark:bg-black")
					}`}
				>
					<Text
						tw={`font-primary text- !mx-14 !my-12 text-center !text-2xl md:!mx-28 md:!my-20 md:!text-5xl lg:!mx-48 lg:!my-36 xl:!mx-60 xl:!my-40 ${
							labelTW || "text-black dark:text-white"
						}`}
					>
						{label}
					</Text>
				</View>
				<Text
					tw={`font-primary absolute z-30 !mx-14 !my-12 text-center !text-2xl md:!mx-28 md:!my-20 md:!text-5xl lg:!mx-48 lg:!my-36 xl:!mx-60 xl:!my-40 ${
						labelTW || "text-black dark:text-white"
					}`}
				>
					{label}
				</Text>
			</Pressable>
		</Link>
	);
};

export default SpecialButton;
