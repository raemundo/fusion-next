interface TeamMember {
	name: string;
	title: string;
	image?: string | { uri: string };
	socialLinks?: {
		text: string;
		icon: React.ReactNode;
	}[];
}

interface OurTeamProps {
	ourTeamProp: {
		title?: string;
		description?: string;
		divider?: boolean;
		display?: React.ReactNode;
		startAligned?: boolean;
		titleTW?: string;
		descriptionTW?: string;
		button?: {
			text: string;
			link: string;
		};
		team: TeamMember[];
	};
}

export { OurTeamProps, TeamMember };
