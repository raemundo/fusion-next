import { View } from "@showtime-xyz/universal.view";
import { CustomerItemProps } from "./types";

const CustomerItem = (props: CustomerItemProps) => {
	const { customer, variant } = props;

	const variantValue = variant ? variant : "normal";

	return variantValue === "marquee" ? (
		<View
			tw="h-[60px] w-[120px] items-center justify-center rounded-xl p-2 transition duration-300 ease-in-out dark:brightness-50 sm:h-20 sm:p-8 md:h-[120px] md:w-[200px] xl:w-[280px] 2xl:w-[300px]"
			key={customer.name}
		>
			{customer.logo}
		</View>
	) : (
		<View
			tw="h-[60px] w-[160px] items-center justify-center rounded-xl bg-[#2a2e39] bg-opacity-0 p-8 grayscale filter transition duration-300 ease-in-out hover:bg-opacity-10 hover:filter-none dark:hover:bg-opacity-100 sm:h-20 md:h-[120px] md:w-[224px] xl:w-[288px] 2xl:w-[308px]"
			key={customer.name}
		>
			{customer.logo}
		</View>
	);
};

export default CustomerItem;
