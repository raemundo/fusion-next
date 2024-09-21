import { View } from "@showtime-xyz/universal.view";
import { ContactUsProps } from "./types";
import ContactForm from "app/components/ContactUs/ContactForm";
import ContactInfo from "app/components/ContactUs/ContactInfo";

const ContactUs = (props: ContactUsProps) => {
	const { contactInfoProp, contactFormProp } = props;

	return (
		<View tw="w-full items-center justify-center gap-8 xl:flex-row xl:items-start xl:justify-between xl:gap-32">
			<ContactInfo {...contactInfoProp} />
			<ContactForm {...contactFormProp} />
		</View>
	);
};

export default ContactUs;
