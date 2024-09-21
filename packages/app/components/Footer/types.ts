interface CompanyInfo {
	logo?: React.ReactNode;
	name: string;
	email?: string;
	phone?: string;
}

interface SocialLink {
	text: string;
	link: string;
	icon: React.ReactNode;
}

interface FooterLinks {
	title?: string;
	links: {
		text: string;
		link: string;
	}[];
}

interface FooterProps {
	footerProp: {
		companyInfo: CompanyInfo;
		footerLinks?: FooterLinks[];
		socialLinks?: SocialLink[];
		centered?: boolean;
	};
}

interface CompanyInfoProps {
	companyInfo: CompanyInfo;
}

interface SocialLinksProps {
	socialLinks: SocialLink[];
}

interface FooterLinksProps {
	footerLinks: FooterLinks;
}

export { FooterProps, CompanyInfoProps, SocialLinksProps, FooterLinksProps };
