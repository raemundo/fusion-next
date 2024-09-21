import { View } from "@showtime-xyz/universal.view";
import { Menu } from "@showtime-xyz/universal.icon";
import { Button } from "@showtime-xyz/universal.button";
import { PressableHover } from "@showtime-xyz/universal.pressable-hover";
import { useIsDarkMode } from "@showtime-xyz/universal.hooks";
import {
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuRoot,
	DropdownMenuTrigger,
} from "@showtime-xyz/universal.dropdown-menu";
import { Link } from "solito/link";
import { HeaderDropdownProps } from "./types";

const HeaderDropdown = (props: HeaderDropdownProps) => {
	const { headerLinks, headerButtons, headerMenuIcon } = props;
	const isDarkMode = useIsDarkMode();

	return (
		<View tw="flex lg:hidden">
			<DropdownMenuRoot>
				<DropdownMenuTrigger>
					<PressableHover>
						{headerMenuIcon ? (
							headerMenuIcon
						) : (
							<Menu
								width={24}
								height={24}
								color={isDarkMode ? "white" : "black"}
							/>
						)}
					</PressableHover>
				</DropdownMenuTrigger>
				<DropdownMenuContent tw="m-4 gap-4 rounded-[16px] bg-white p-4 dark:bg-black">
					{headerLinks.map((item) => (
						<Link href={item.link} key={item.text}>
							<DropdownMenuItem key={item.text}>
								<Button
									variant="tertiary"
									size="small"
									tw="w-full"
									labelTW="font-secondary"
									disabled
								>
									{item.text}
								</Button>
							</DropdownMenuItem>
						</Link>
					))}
					{headerButtons?.secondaryButton && (
						<Link
							href={headerButtons?.secondaryButton?.link}
							key={headerButtons?.secondaryButton?.text}
						>
							<DropdownMenuItem
								key={headerButtons?.secondaryButton?.text}
							>
								<Button
									variant="primary"
									size="small"
									tw="w-full"
									labelTW="font-secondary"
									disabled
								>
									{headerButtons?.secondaryButton?.text}
								</Button>
							</DropdownMenuItem>
						</Link>
					)}
					{headerButtons?.primaryButton && (
						<Link
							href={headerButtons?.primaryButton?.link}
							key={headerButtons?.primaryButton?.text}
						>
							<DropdownMenuItem
								key={headerButtons?.primaryButton?.text}
							>
								<Button
									variant="primary"
									size="small"
									tw="w-full"
									labelTW="font-secondary"
									disabled
								>
									{headerButtons?.primaryButton?.text}
								</Button>
							</DropdownMenuItem>
						</Link>
					)}
				</DropdownMenuContent>
			</DropdownMenuRoot>
		</View>
	);
};

export default HeaderDropdown;
