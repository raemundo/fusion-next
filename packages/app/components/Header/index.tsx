import { View } from "@showtime-xyz/universal.view";
import { Text } from "@showtime-xyz/universal.text";
import { Link } from "solito/link";
import { HeaderProps } from "./types";
import HeaderContent from "app/components/Header/HeaderContent";
import HeaderDropdown from "app/components/Header/HeaderDropdown";

const Header = (props: HeaderProps) => {
	const { companyInfo, headerLinks, headerButtons } = props.headerProp;
	const { name, logo } = companyInfo;

	return (
		<View tw="!sticky top-0 z-50 h-16 w-full items-center justify-center bg-white px-5 dark:bg-black lg:px-8">
			<View tw="w-full flex-row items-center justify-between">
				{(name || logo) && (
					<Link href="/">
						<View tw="flex-row items-center gap-4">
							{logo}
							<Text tw="font-primary hidden text-2xl font-bold text-black dark:text-white sm:flex">
								{name}
							</Text>
						</View>
					</Link>
				)}
				<HeaderContent
					headerLinks={headerLinks}
					headerButtons={headerButtons}
				/>
				<HeaderDropdown
					headerLinks={headerLinks}
					headerButtons={headerButtons}
				/>
			</View>
		</View>
	);
};

export default Header;
