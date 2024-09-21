import { View } from "@showtime-xyz/universal.view";
import MainTitle from "app/components/MainTitle";
import PortfolioCard from "app/components/Portfolio/PortfolioCard";
import { PortfolioSelectionProps } from "./types";
import { PortfolioCardProps } from "app/components/Portfolio/PortfolioCard/types";

const PortfolioSelection = (props: PortfolioSelectionProps) => {
	const { title, description, portfolioContent } =
		props.portfolioSelectionProp;

	return (
		<View tw="w-full gap-6 md:gap-16 xl:gap-20">
			<MainTitle title={title} description={description} />
			<View tw="flex-row flex-wrap items-center justify-center sm:gap-8">
				{portfolioContent.map((card: PortfolioCardProps) => (
					<PortfolioCard
						key={card.title}
						title={card.title}
						description={card.description ?? ""}
						image={card.image}
						link={card.link}
						buttonText={card.buttonText}
					/>
				))}
			</View>
		</View>
	);
};

export default PortfolioSelection;
