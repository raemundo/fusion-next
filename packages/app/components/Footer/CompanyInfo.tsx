import { Text } from "@showtime-xyz/universal.text";
import { View } from "@showtime-xyz/universal.view";
import { Link } from "solito/link";
import { CompanyInfoProps } from "./types";

const CompanyInfo = (props: CompanyInfoProps) => {
	const { companyInfo } = props;

	return (
		<View tw="items-start gap-4">
			<Link href="/">
				<View tw="flex-row items-center gap-4">
					{companyInfo.logo}
					<Text
						tw="font-primary text-2xl font-bold text-black dark:text-white"
						role="heading"
						aria-level={2}
					>
						{companyInfo.name}
					</Text>
				</View>
			</Link>
			<Text
				tw="text-md font-secondary text-black dark:text-[#b2b5be]"
				role="paragraph"
			>
				{companyInfo.email}
			</Text>
			<Text
				tw="text-md font-secondary text-black dark:text-[#b2b5be]"
				role="paragraph"
			>
				{companyInfo.phone}
			</Text>
		</View>
	);
};

export default CompanyInfo;
