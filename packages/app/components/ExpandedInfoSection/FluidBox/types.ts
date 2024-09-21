interface FluidBoxProps {
	fluidBoxProp: {
		image: string | { uri: string };
		title: string;
		description: string;
		list?: string[];
		buttonString: string;
		link: string;
		reverse: boolean;
	};
}

export { FluidBoxProps };
