import { View } from "@showtime-xyz/universal.view";
import { Avatar } from "@showtime-xyz/universal.avatar";
import { Text } from "@showtime-xyz/universal.text";
import { UserCircle } from "@showtime-xyz/universal.icon";
import { useIsDarkMode } from "@showtime-xyz/universal.hooks";

const TeamMember = ({ member }) => {
	const isDarkMode = useIsDarkMode();

	return (
		<View tw="flex flex-col items-center justify-center gap-4 p-8 md:basis-1/3">
			{member.image ? (
				<Avatar size={180} url={member.image} alt={member.name} />
			) : (
				<UserCircle
					height={180}
					width={180}
					color={isDarkMode ? "white" : "black"}
				/>
			)}
			<Text
				tw="font-secondary text-xl font-bold dark:text-white lg:text-3xl"
				role="heading"
				aria-level={3}
			>
				{member.name}
			</Text>
			<Text
				tw="text-md font-secondary font-semibold text-gray-500 lg:text-lg"
				role="paragraph"
			>
				{member.title}
			</Text>
			<View tw="flex-row gap-4">
				{member.socialLinks?.map((link, index) => (
					<View key={index} tw="flex items-center gap-2">
						{link.icon}
					</View>
				))}
			</View>
		</View>
	);
};

export default TeamMember;
