import { View } from "@showtime-xyz/universal.view";
import { Text } from "@showtime-xyz/universal.text";
import { Image } from "@showtime-xyz/universal.image";
import { Play } from "@showtime-xyz/universal.icon";
import { Pressable } from "@showtime-xyz/universal.pressable";
import { useLink } from "solito/navigation";
import { DisplayProps } from "./types";

const Display = (props: DisplayProps) => {
	const { source, link, text, variant, cta, imageCTA, videoCTA } = props;
	const elementLink = link
		? useLink({
				href: link,
		  })
		: {};

	return (
		<View tw="flex min-h-[420px] w-screen overflow-hidden rounded-none sm:w-full sm:rounded-[48px] md:min-h-[500px] lg:h-[700px]">
			{variant === "video" ? (
				<video
					loop
					muted
					playsInline
					autoPlay
					src={source as string}
					style={{
						objectFit: "cover",
						overflow: "clip",
						filter: "brightness(0.6)",
						minHeight: "100%",
						minWidth: "100%",
					}}
				/>
			) : (
				<Image
					source={source}
					alt={text}
					height={4000}
					width={4000}
					tw="min-h-[420px] object-cover object-center md:min-h-[500px] lg:h-[700px]"
				/>
			)}
			{cta && (
				<Pressable
					{...elementLink}
					tw="absolute bottom-5 mx-5 h-fit w-fit items-start gap-4 self-center rounded-3xl border border-[#fff3] bg-white bg-opacity-0 px-4 py-6 transition-all hover:bg-opacity-10 sm:max-w-[378px] sm:px-5 sm:py-3 md:bottom-8 md:mx-8 md:flex-row md:items-center md:self-start 2xl:max-w-[402px] 2xl:gap-6 2xl:rounded-[32px] 2xl:px-6 2xl:py-4"
				>
					{variant === "video" && (
						<View tw="flex h-14 w-14 items-center justify-center rounded-full bg-black md:h-16 md:w-16 2xl:h-[72px] 2xl:w-[72px]">
							<Play color="white" width={36} height={36} />
						</View>
					)}
					<View tw="flex max-w-full flex-shrink flex-col items-start gap-1">
						<Text tw="font-secondary text-lg font-semibold leading-snug text-white">
							{text}
						</Text>
						<Text tw="text-md font-secondary font-semibold text-white">
							{variant === "video" ? videoCTA : imageCTA}
						</Text>
					</View>
				</Pressable>
			)}
		</View>
	);
};

export default Display;
