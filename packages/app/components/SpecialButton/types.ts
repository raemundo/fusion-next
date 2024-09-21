interface SpecialButtonProps {
	link: string;
	label: string;
	variant: "solid" | "outlined" | "gradient" | "image";
	colors?: string[];
	textColor?: string;
	borderColor?: string;
	image?: string | { uri: string };
	tw?: string;
	labelTW?: string;
}

export { SpecialButtonProps };
