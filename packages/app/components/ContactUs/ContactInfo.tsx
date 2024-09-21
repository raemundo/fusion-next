import { View } from "@showtime-xyz/universal.view";
import { Text } from "@showtime-xyz/universal.text";
import { Link } from "solito/link";
import { Mail, PhonePortraitOutline } from "@showtime-xyz/universal.icon";
import { useIsDarkMode } from "@showtime-xyz/universal.hooks";
import { ContactInfoProps } from "./types";

const ContactInfo = (props: ContactInfoProps) => {
	const {
		title,
		subtitle,
		email,
		emailTitle,
		phoneTitle,
		phone,
		socialTitle,
		socialLinks,
	} = props;
	const isDark = useIsDarkMode();

	return (
		<View tw="w-full flex-shrink gap-10 rounded-xl py-10 xl:w-[50%]">
			<View tw="items-start gap-4">
				<Text
					tw="font-secondary text-4xl font-semibold text-black dark:text-white lg:text-5xl"
					role="heading"
					aria-level={2}
				>
					{title}
				</Text>
				<Text
					tw="font-secondary text-xl font-normal text-black dark:text-[#b2b5be]"
					role="paragraph"
				>
					{subtitle}
				</Text>
			</View>
			{email && (
				<View tw="items-start gap-2">
					<View tw="flex-row gap-2">
						<Mail
							height={30}
							width={30}
							color={isDark ? "white" : "black"}
						/>
						<Text
							tw="font-secondary text-2xl font-semibold text-black dark:text-white"
							role="heading"
							aria-level={3}
						>
							{emailTitle}
						</Text>
					</View>
					<Text
						tw="font-secondary text-xl font-normal text-black dark:text-[#b2b5be]"
						role="paragraph"
					>
						{email}
					</Text>
				</View>
			)}
			{phone && (
				<View tw="items-start gap-2">
					<View tw="flex-row gap-2">
						<PhonePortraitOutline
							height={30}
							width={30}
							color={isDark ? "white" : "black"}
						/>
						<Text
							tw="font-secondary text-2xl font-semibold text-black dark:text-white"
							role="heading"
							aria-level={3}
						>
							{phoneTitle}
						</Text>
					</View>
					<Text
						tw="font-secondary text-xl font-normal text-black dark:text-[#b2b5be]"
						role="paragraph"
					>
						{phone}
					</Text>
				</View>
			)}
			{socialLinks && (
				<View tw="gap-2">
					<View tw="flex-row gap-2">
						<Text
							tw="font-secondary text-2xl font-semibold text-black dark:text-white"
							role="heading"
							aria-level={3}
						>
							{socialTitle}
						</Text>
					</View>
					<View tw="flex-row items-center gap-4">
						{socialLinks.map((link) => (
							<Link href={link.link} key={link.link}>
								{link.icon}
							</Link>
						))}
					</View>
				</View>
			)}
		</View>
	);
};

export default ContactInfo;
