import { View } from "@showtime-xyz/universal.view";
import MainTitle from "app/components/MainTitle";
import SectionContainer from "app/components/SectionContainer";
import { OurTeamProps } from "./types";
import TeamMember from "app/components/OurTeam/TeamMember";

const OurTeam = (props: OurTeamProps) => {
	const { team, ...rest } = props.ourTeamProp;

	return (
		<SectionContainer>
			{(rest.title || rest.description || rest.display) && (
				<MainTitle {...rest} />
			)}
			<View tw="flex-row flex-wrap items-center justify-center md:gap-6 xl:gap-8">
				{team.map((member, index) => (
					<TeamMember key={index} member={member} />
				))}
			</View>
		</SectionContainer>
	);
};

export default OurTeam;
