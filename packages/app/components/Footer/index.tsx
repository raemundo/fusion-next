import { View } from "@showtime-xyz/universal.view";
import { FooterProps } from "./types";
import SocialLinks from "app/components/Footer/SocialLinks";
import FooterLinks from "app/components/Footer/FooterLinks";
import CompanyInfo from "app/components/Footer/CompanyInfo";
import ScreenWrapper from "app/components//ScreenWrapper";

const Footer = (props: FooterProps) => {
	const { companyInfo, footerLinks, socialLinks, centered } =
		props.footerProp;

	return (
		<ScreenWrapper small>
			<View
				tw={`w-full flex-col-reverse flex-wrap ${
					centered ? "justify-center" : "justify-between"
				} gap-12 md:flex-row md:gap-24`}
			>
				<CompanyInfo companyInfo={companyInfo} />
				{(footerLinks || socialLinks) && (
					<View tw="flex-row flex-wrap items-start justify-between gap-8 xl:gap-32">
						{footerLinks?.map((footerLink) => (
							<FooterLinks
								key={footerLink.links[0]?.text}
								footerLinks={footerLink}
							/>
						))}
						{socialLinks && (
							<SocialLinks socialLinks={socialLinks} />
						)}
					</View>
				)}
			</View>
		</ScreenWrapper>
	);
};

export default Footer;
