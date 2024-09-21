import React from "react";
import { StyleProp, TextInputProps, TextStyle } from "react-native";

interface ContactUsProps {
	contactInfoProp: ContactInfoProps;
	contactFormProp: ContactFormProps;
}

interface ContactInfoProps {
	title: string;
	subtitle: string;
	email?: string;
	emailTitle?: string;
	phoneTitle?: string;
	phone?: string;
	socialTitle?: string;
	socialLinks?: {
		link: string;
		icon: React.ReactNode;
	}[];
}

interface ContactFormProps {
	email: string;
	formTitle: string;
	firstNameLabel: string;
	lastNameLabel: string;
	emailLabel: string;
	phoneLabel: string;
	messageLabel: string;
	buttonText: string;
}

interface InputProps {
	leftElement?: JSX.Element;
	rightElement?: JSX.Element;
	placeholder?: string;
	onChangeText?: (text: string) => void;
	value?: string;
	isInvalid?: boolean;
	id?: string;
	disabled?: boolean;
	type?: TextInputProps["keyboardType"];
	label?: string;
	errorText?: string;
	helperText?: string;
	accessibilityLabel?: string;
	autoFocus?: boolean;
	inputStyle?: StyleProp<TextStyle>;
	autocomplete?: "on" | "off";
	multiline?: boolean;
}

export type { ContactUsProps, ContactInfoProps, ContactFormProps, InputProps };
