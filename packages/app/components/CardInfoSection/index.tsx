import { View } from "@showtime-xyz/universal.view";
import MainTitle from "app/components/MainTitle";
import SmallCard from "app/components/CardInfoSection/SmallCard";
import { CardInfoSectionProps, Card } from "./types";
import LargeCard from "app/components/CardInfoSection/LargeCard";
import PictureCard from "app/components/CardInfoSection/PictureCard";
import Swipper from "app/components/Swipper";

const CardInfoSection = (props: CardInfoSectionProps) => {
	const { cardsContent, cardsVariant, variant, ...rest } =
		props.cardInfoSectionProp;

	const variantValue = variant ? variant : "normal";

	const renderCard = (card: Card) =>
		cardsVariant === "large" ? (
			<LargeCard
				key={card.title}
				title={card.title}
				description={card.description ?? ""}
				variant={variantValue}
				icon={card.icon}
			/>
		) : cardsVariant === "small" ? (
			<SmallCard
				key={card.title}
				title={card.title}
				icon={card.icon}
				variant={variantValue}
			/>
		) : cardsVariant === "picture" ? (
			<PictureCard
				key={card.title}
				title={card.title}
				subtitle={card.description ?? ""}
				image={card.image}
				variant={variantValue}
				link={card.link}
			/>
		) : null;

	const renderContent = cardsContent.map((card) => renderCard(card));

	return (
		<View tw="w-full gap-6 md:gap-16 xl:gap-20">
			{(rest.title || rest.description || rest.display) && (
				<MainTitle {...rest} />
			)}
			{variantValue === "swipper" ? (
				<Swipper>{renderContent}</Swipper>
			) : (
				<View tw="flex-row flex-wrap items-stretch justify-center md:gap-6 xl:gap-8">
					{renderContent}
				</View>
			)}
		</View>
	);
};

export default CardInfoSection;
