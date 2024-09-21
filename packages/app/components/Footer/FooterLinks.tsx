import { Text } from "@showtime-xyz/universal.text";
import { View } from "@showtime-xyz/universal.view";
import { Link } from "solito/link";
import { FooterLinksProps } from "./types";

const FooterLinks = (props: FooterLinksProps) => {
	const { footerLinks } = props;

	return (
		<View tw="items-start justify-center gap-4">
			{footerLinks.title && (
				<Text
					tw=" font-secondary text-lg font-bold text-black dark:text-white"
					role="heading"
					aria-level={3}
				>
					{footerLinks.title}
				</Text>
			)}
			{footerLinks.links.map((item) => (
				<Link href={item.link} key={item.text}>
					<Text
						tw="font-secondary text-black dark:text-white"
						role="paragraph"
					>
						{item.text}
					</Text>
				</Link>
			))}
		</View>
	);
};

export default FooterLinks;
