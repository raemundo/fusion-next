import { View } from "@showtime-xyz/universal.view";
import { Text } from "@showtime-xyz/universal.text";
import { Button } from "@showtime-xyz/universal.button";
import { PortfolioCardProps } from "./types";
import { Link } from "solito/link";
import { Image } from "@showtime-xyz/universal.image";

const PortfolioCard = (props: PortfolioCardProps) => {
	const { title, description, image, link, buttonText } = props;

	return (
		<View
			key={title}
			tw="w-screen flex-col overflow-hidden border-t border-[#6a6d7833] bg-white last:border-b dark:border-[#434651] dark:bg-black sm:h-[580px] sm:w-[540px] sm:rounded-3xl sm:border"
		>
			<View tw="w-full flex-shrink basis-1/2 overflow-hidden">
				<Image
					source={image}
					height={200}
					width={800}
					resizeMode="cover"
				/>
			</View>
			<View tw="w-full basis-1/2 items-start justify-between gap-4 p-8">
				<Text
					tw="font-secondary text-2xl font-semibold text-black dark:text-white lg:text-5xl"
					role="heading"
					aria-level={2}
				>
					{title}
				</Text>
				<Text
					tw="font-secondary mb-4 text-lg font-normal text-black dark:text-[#b2b5be] lg:text-xl"
					role="paragraph"
				>
					{description}
				</Text>
				<Link href={link}>
					<Button
						size="regular"
						variant="primary"
						labelTW="font-secondary"
						disabled
					>
						{buttonText}
					</Button>
				</Link>
			</View>
		</View>
	);
};

export default PortfolioCard;
