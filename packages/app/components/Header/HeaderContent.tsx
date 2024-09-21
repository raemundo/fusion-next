import { PressableHover } from "@showtime-xyz/universal.pressable-hover";
import { Text } from "@showtime-xyz/universal.text";
import { View } from "@showtime-xyz/universal.view";
import { Button } from "@showtime-xyz/universal.button";
import { Link } from "solito/link";
import { HeaderContentProps } from "./types";

const HeaderContent = (props: HeaderContentProps) => {
	const { headerLinks, headerButtons } = props;

	return (
		<>
			<View tw="hidden flex-row justify-between gap-4 lg:flex">
				{headerLinks.map((item) => (
					<Link href={item.link} key={item.text}>
						<PressableHover disabled>
							<Text
								role="paragraph"
								tw="font-secondary text-black dark:text-white"
							>
								{item.text}
							</Text>
						</PressableHover>
					</Link>
				))}
			</View>
			{headerButtons && (
				<View tw="hidden flex-row items-center gap-4 lg:flex">
					{headerButtons?.secondaryButton && (
						<Link href={headerButtons?.secondaryButton?.link}>
							<Button
								variant="tertiary"
								size="regular"
								labelTW="font-secondary"
								disabled
							>
								{headerButtons?.secondaryButton?.text}
							</Button>
						</Link>
					)}
					{headerButtons?.primaryButton && (
						<Link href={headerButtons?.primaryButton?.link}>
							<Button
								variant="primary"
								size="regular"
								labelTW="font-secondary"
								disabled
							>
								{headerButtons?.primaryButton?.text}
							</Button>
						</Link>
					)}
				</View>
			)}
		</>
	);
};

export default HeaderContent;
