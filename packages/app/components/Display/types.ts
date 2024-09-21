interface DisplayProps {
	text?: string;
	source: string | { uri: string };
	link?: string;
	variant: "video" | "image";
	cta?: boolean;
	imageCTA?: string;
	videoCTA?: string;
}

export { DisplayProps };
