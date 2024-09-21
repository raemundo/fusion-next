interface PictureCardProps {
	title: string;
	subtitle: string;
	image: React.ReactNode;
	link?: string;
	variant?: "swipper" | "normal";
}

export { PictureCardProps };
