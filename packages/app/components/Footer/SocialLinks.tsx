import { Text } from "@showtime-xyz/universal.text";
import { View } from "@showtime-xyz/universal.view";
import { Link } from "solito/link";
import { SocialLinksProps } from "./types";

const SocialLinks = (props: SocialLinksProps) => {
	const { socialLinks } = props;

	return (
		<View tw="items-start justify-center gap-4">
			{socialLinks.map((item) => (
				<View tw="flex-row items-center gap-4" key={item.text}>
					{item.icon}
					<Link href={item.link}>
						<Text
							tw="text-md font-secondary text-black dark:text-white"
							role="paragraph"
						>
							{item.text}
						</Text>
					</Link>
				</View>
			))}
		</View>
	);
};

export default SocialLinks;
