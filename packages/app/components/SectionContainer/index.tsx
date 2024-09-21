import { View } from "@showtime-xyz/universal.view";

const SectionContainer = ({ children }) => {
	return (
		<View tw="bg-white-dark:bg-black w-full items-center gap-6 md:gap-16 xl:gap-20">
			{children}
		</View>
	);
};

export default SectionContainer;
