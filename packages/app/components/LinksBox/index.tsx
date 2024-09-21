import { View } from "@showtime-xyz/universal.view";
import LinkItem from "app/components/LinksBox/LinkItem";
import { LinksBoxProps } from "./types";
import { LinkItemProps } from "app/components/LinksBox/LinkItem/types";

const LinksBox = (props: LinksBoxProps) => {
	const { links } = props;

	return (
		<View tw="w-screen divide-[#6a6d7833] border-y border-[#6a6d7833] bg-white dark:divide-[#434651] dark:border-[#434651] dark:bg-black max-md:divide-y sm:w-full sm:rounded-3xl sm:border-x md:flex-row md:divide-x">
			{links.map((link: LinkItemProps) => (
				<LinkItem key={link.title} {...link} />
			))}
		</View>
	);
};

export default LinksBox;
