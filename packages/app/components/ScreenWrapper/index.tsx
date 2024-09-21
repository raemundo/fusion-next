import { View } from "@showtime-xyz/universal.view";
import { ScreenWrapperProps } from "./types";

const ScreenWrapper = (props: ScreenWrapperProps) => {
	const { children, small, transparent, tw } = props;
	return (
		<View
			tw={`w-full !max-w-[1720px] items-center gap-24 self-center ${
				transparent ? "" : "bg-white dark:bg-black"
			} px-5 py-14 lg:gap-36 lg:px-8 2xl:px-10 min-[1820px]:px-0 ${
				small ? "" : " lg:py-24 2xl:py-[120px]"
			} ${tw}`}
		>
			{children}
		</View>
	);
};

export default ScreenWrapper;
