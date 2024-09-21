interface CustomerItemProps {
	customer: {
		name?: string;
		logo: React.ReactNode;
	};
	variant?: "marquee" | "swipper" | "normal";
}

export { CustomerItemProps };
