interface LinkItem {
	text: string;
	link: string;
}

interface HeaderProps {
	headerProp: {
		companyInfo: {
			logo?: React.ReactNode;
			name?: string;
		};
		headerLinks: LinkItem[];
		headerButtons?: {
			primaryButton?: LinkItem;
			secondaryButton?: LinkItem;
		};
		headerMenuIcon?: React.ReactNode;
	};
}

interface HeaderContentProps {
	headerLinks: LinkItem[];
	headerButtons?: {
		primaryButton?: LinkItem;
		secondaryButton?: LinkItem;
	};
}

interface HeaderDropdownProps extends HeaderContentProps {
	headerMenuIcon?: React.ReactNode;
}

export { HeaderProps, HeaderContentProps, HeaderDropdownProps };
