import { useState } from "react";
import { View } from "@showtime-xyz/universal.view";
import { Text } from "@showtime-xyz/universal.text";
import { Input } from "@showtime-xyz/universal.input";
import { Button } from "@showtime-xyz/universal.button";
import { Linking } from "react-native";
import { ContactFormProps } from "./types";
import { MultilineInput } from "app/components/ContactUs/MultilineInput";

const ContactForm = (props: ContactFormProps) => {
	const {
		email: emailAddress,
		formTitle,
		firstNameLabel,
		lastNameLabel,
		emailLabel,
		phoneLabel,
		messageLabel,
		buttonText,
	} = props;
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [message, setMessage] = useState("");

	const handleContactUs = () => {
		if (!firstName || !lastName || !email || !phone) {
			return;
		}

		const subject = `Contact Inquiry from ${firstName} ${lastName}`;
		const body = `Reply to:\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`;
		const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
			subject,
		)}&body=${encodeURIComponent(body)}`;

		Linking.openURL(mailtoLink);
	};

	return (
		<View tw="w-screen min-w-[50%] gap-8 border-y border-[#6a6d7833] bg-white px-5 py-8 dark:border-[#434651] dark:bg-black sm:w-auto sm:rounded-3xl sm:border-x sm:p-8 xl:gap-8">
			<Text
				tw="font-secondary text-4xl font-semibold text-black dark:text-white lg:text-5xl"
				role="heading"
				aria-level={2}
			>
				{formTitle}
			</Text>
			<View tw="flex-col gap-8 md:flex-row">
				<View tw="flex-grow">
					<Input
						label={firstNameLabel}
						value={firstName}
						onChangeText={setFirstName}
						id="first-name"
					/>
				</View>
				<View tw="flex-grow">
					<Input
						label={lastNameLabel}
						value={lastName}
						onChangeText={setLastName}
						id="last-name"
					/>
				</View>
			</View>
			<View tw="gap-8">
				<View tw="w-full">
					<Input
						label={emailLabel}
						value={email}
						onChangeText={setEmail}
						id="email"
					/>
				</View>
				<View>
					<Input
						label={phoneLabel}
						value={phone}
						onChangeText={setPhone}
						id="phone"
					/>
				</View>
				<View>
					<MultilineInput
						multiline
						label={messageLabel}
						value={message}
						onChangeText={setMessage}
						id="message"
					/>
				</View>
			</View>
			<View>
				<Button
					size="regular"
					onPress={handleContactUs}
					labelTW="font-secondary"
				>
					{buttonText}
				</Button>
			</View>
		</View>
	);
};

export default ContactForm;
