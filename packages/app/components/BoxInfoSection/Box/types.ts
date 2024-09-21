interface BoxProps {
	title: string;
	description: string;
	image: string | { uri: string };
	reverse?: boolean;
	buttonText?: string;
	buttonLink?: string;
}

export { BoxProps };
