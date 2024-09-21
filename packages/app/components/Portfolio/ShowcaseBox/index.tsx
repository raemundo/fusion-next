import { Text } from "@showtime-xyz/universal.text";
import { View } from "@showtime-xyz/universal.view";
import { ShowcaseBoxProps } from "./types";
import ShowcaseVideo from "app/components/Portfolio/ShowcaseBox/ShowcaseVideo";

const ShowcaseBox = (props: ShowcaseBoxProps) => {
	const { title, description, video, reverse } = props;

	return (
		<View tw="gap-8 rounded-[16px] border-[1px] border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-black">
			<View
				tw={`items-center gap-8  xl:items-start xl:justify-between  ${
					reverse ? "xl:flex-row-reverse" : "xl:flex-row"
				}`}
			>
				<View tw="h-full flex-1 gap-12 rounded-[16px] p-8 xl:w-1/2 xl:justify-center">
					<Text tw="font-secondary text-3xl font-bold dark:text-white xl:text-4xl">
						{title}
					</Text>
					<Text tw="font-secondary text-lg dark:text-white">
						{description}
					</Text>
				</View>
				<View tw="w-full items-center justify-center overflow-hidden rounded-[16px] xl:h-full xl:w-1/2">
					<ShowcaseVideo video={video} />
				</View>
			</View>
		</View>
	);
};

export default ShowcaseBox;
