import { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import { View } from "@showtime-xyz/universal.view";
import MainTitle from "app/components/MainTitle";
import { CustomersSectionProps } from "./types";
import SectionContainer from "app/components/SectionContainer";
import MarqueeCarousel from "app/components/AnimatedCarousel/MarqueeCarousel";
import Swipper from "app/components/Swipper";
import CustomerItem from "app/components/CustomersSection/CustomerItem";

const CustomersSection = (props: CustomersSectionProps) => {
	const { customers, variant, ...rest } = props.customersSectionProp;

	const [width, setWidth] = useState(
		// Dimensions.get("window").width > 1720
		// 	? 1720
		// 	:
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

	const itemsOnScreenCount =
		width < 568
			? 2
			: width < 768
			? 2
			: width < 1024
			? 3
			: width < 1280
			? 3
			: width < 1536
			? 4
			: 5;

	const renderItems = customers.map((customer) => (
		<CustomerItem
			key={customer.name}
			customer={customer}
			variant={variant}
		/>
	));

	return (
		<SectionContainer>
			{(rest.title || rest.description || rest.display) && (
				<MainTitle {...rest} />
			)}
			{variant === "marquee" ? (
				<MarqueeCarousel
					height={120}
					itemsOnScreenCount={itemsOnScreenCount}
					items={renderItems}
				/>
			) : variant === "swipper" ? (
				<Swipper tw="mt-2">{renderItems}</Swipper>
			) : (
				<View tw="flex flex-row flex-wrap items-start justify-start gap-4 md:gap-6">
					{renderItems}
				</View>
			)}
		</SectionContainer>
	);
};

export default CustomersSection;
